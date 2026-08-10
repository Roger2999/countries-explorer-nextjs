import { CountryById } from "../models/countriesbyIdResponse.model";

export interface V5Country {
  names?: {
    common?: string;
    official?: string;
    native?: Record<string, { common: string; official: string }>;
  };
  codes?: {
    alpha_2?: string;
    alpha_3?: string;
    ccn3?: string;
    cioc?: string;
    fifa?: string;
  };
  flag?: {
    emoji?: string;
    url_svg?: string;
    url_png?: string;
    description?: string;
  };
  capitals?: { name: string; coordinates?: { lat: number; lng: number } }[];
  currencies?: { code: string; name: string; symbol: string }[];
  languages?: { iso639_3?: string; name?: string }[];
  tlds?: string[];
  borders?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  area?: { kilometers: number };
  landlocked?: boolean;
  timezones?: string[];
  continents?: string[];
  coordinates?: { lat: number; lng: number };
  demonyms?: Record<string, { f: string; m: string }>;
  cars?: { signs: string[]; driving_side: string };
  classification?: {
    sovereign?: boolean;
    un_member?: boolean;
    status?: string;
  };
  links?: { google_maps?: string; open_street_maps?: string };
  date?: { start_of_week?: string };
  postal_code?: { format?: string; regex?: string };
}

export const toCountryById = (v5: V5Country): CountryById => {
  const firstCapital = v5.capitals?.[0];

  return {
    tld: v5.tlds ?? [],
    cca2: v5.codes?.alpha_2 ?? "",
    ccn3: v5.codes?.ccn3 ?? "",
    cca3: v5.codes?.alpha_3 ?? "",
    cioc: v5.codes?.cioc ?? "",
    independent: v5.classification?.sovereign === true,
    status: v5.classification?.status ?? "",
    unMember: v5.classification?.un_member === true,
    idd: { root: "", suffixes: [] },
    capital: (v5.capitals ?? []).map((capital) => capital.name),
    altSpellings: [],
    region: v5.region ?? "",
    subregion: v5.subregion ?? "",
    landlocked: v5.landlocked ?? false,
    borders: v5.borders ?? [],
    area: v5.area?.kilometers ?? 0,
    maps: {
      googleMaps: v5.links?.google_maps ?? "",
      openStreetMaps: v5.links?.open_street_maps ?? "",
    },
    population: v5.population ?? 0,
    fifa: v5.codes?.fifa ?? "",
    car: {
      signs: v5.cars?.signs ?? [],
      side: v5.cars?.driving_side ?? "",
    },
    timezones: v5.timezones ?? [],
    continents: v5.continents ?? [],
    flag: v5.flag?.emoji ?? "",
    name: {
      common: v5.names?.common ?? "Unknown",
      official: v5.names?.official ?? "",
      nativeName: (v5.names?.native ??
        {}) as unknown as CountryById["name"]["nativeName"],
    },
    currencies: Object.fromEntries(
      (v5.currencies ?? []).map((currency) => [
        currency.code,
        { name: currency.name, symbol: currency.symbol },
      ]),
    ) as unknown as CountryById["currencies"],
    languages: (v5.languages ?? []).reduce<Record<string, string>>(
      (acc, language) => {
        if (language.iso639_3) acc[language.iso639_3] = language.name ?? "";
        return acc;
      },
      {},
    ) as unknown as CountryById["languages"],
    latlng: [v5.coordinates?.lat ?? 0, v5.coordinates?.lng ?? 0],
    demonyms: (v5.demonyms ??
      {}) as unknown as CountryById["demonyms"],
    translations: {} as unknown as CountryById["translations"],
    flags: {
      png: v5.flag?.url_png ?? "",
      svg: v5.flag?.url_svg ?? "",
      alt: v5.flag?.description ?? "",
    },
    coatOfArms: { png: "", svg: "" },
    startOfWeek: v5.date?.start_of_week ?? "",
    capitalInfo: {
      latlng: firstCapital?.coordinates
        ? [firstCapital.coordinates.lat, firstCapital.coordinates.lng]
        : [],
    },
    postalCode: {
      format: v5.postal_code?.format ?? "",
      regex: v5.postal_code?.regex ?? "",
    },
  };
};

export const getCountryById = async (slot: string): Promise<CountryById[]> => {
  const response = await fetch(
    `https://api.restcountries.com/countries/v5/codes.alpha_3/${slot}`,
    {
      headers: { Authorization: `Bearer ${process.env.RESTCOUNTRIES_API_KEY}` },
      next: { revalidate: 3600 },
    },
  );
  if (!response.ok) {
    throw new Error(
      `Error in response: ${response.status}, ${response.statusText}`,
    );
  }
  const body = await response.json();
  const data = (body?.data?.objects ?? []) as V5Country[];
  return data.map(toCountryById);
};
