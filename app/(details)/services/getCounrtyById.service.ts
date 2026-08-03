import { CountryById } from "../models/countriesbyIdResponse.model";
import {
  fetchCountriesByProperty,
  V5Country,
  V5Native,
} from "@/lib/restcountries";

const fromNative = (native: Record<string, V5Native> | undefined) =>
  native
    ? Object.fromEntries(
        Object.entries(native).map(([key, value]) => [
          key,
          { common: value.common, official: value.official },
        ]),
      )
    : {};

export const toCountryById = (v5: V5Country): CountryById => {
  const currencies = (v5.currencies ?? []).reduce<
    Record<string, { name: string; symbol: string }>
  >((acc, currency) => {
    acc[currency.code] = { name: currency.name, symbol: currency.symbol };
    return acc;
  }, {});
  const languages = (v5.languages ?? []).reduce<Record<string, string>>(
    (acc, language) => {
      if (language.iso639_3) acc[language.iso639_3] = language.name ?? "";
      return acc;
    },
    {},
  );
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
      nativeName: fromNative(v5.names?.native) as unknown as CountryById["name"]["nativeName"],
    },
    currencies: currencies as unknown as CountryById["currencies"],
    languages: languages as unknown as CountryById["languages"],
    latlng: [v5.coordinates?.lat ?? 0, v5.coordinates?.lng ?? 0],
    demonyms: (v5.demonyms ?? {}) as unknown as CountryById["demonyms"],
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
  const { objects } = await fetchCountriesByProperty("codes.alpha_3", slot);
  if (objects.length === 0) {
    throw new Error(`Country not found: ${slot}`);
  }
  return objects.map(toCountryById);
};