import { Country } from "@/app/(home)/models/countriesResponse.model";

interface V5Country {
  names?: {
    common?: string;
    official?: string;
    native?: Record<string, { common: string; official: string }>;
  };
  codes?: { alpha_2?: string; alpha_3?: string };
  flag?: { url_svg?: string; url_png?: string; description?: string };
  tlds?: string[];
  capitals?: { name: string }[];
  currencies?: { code: string; name: string; symbol: string }[];
  languages?: { iso639_3?: string; name?: string }[];
  region?: string;
  subregion?: string;
  population?: number;
}

const toCountry = (v5: V5Country): Country => ({
  flags: {
    svg: v5.flag?.url_svg ?? "",
    png: v5.flag?.url_png ?? "",
    alt: v5.flag?.description ?? "",
  },
  name: {
    common: v5.names?.common ?? "Unknown",
    official: v5.names?.official ?? "",
    nativeName: (v5.names?.native ?? {}) as Country["name"]["nativeName"],
  },
  tld: v5.tlds ?? [],
  cca2: v5.codes?.alpha_2 ?? "",
  cca3: v5.codes?.alpha_3 ?? "",
  currencies: Object.fromEntries(
    (v5.currencies ?? []).map((currency) => [
      currency.code,
      { name: currency.name, symbol: currency.symbol },
    ]),
  ) as Country["currencies"],
  capital: (v5.capitals ?? []).map((capital) => capital.name),
  region: v5.region ?? "",
  subregion: v5.subregion ?? "",
  languages: (v5.languages ?? []).reduce<Record<string, string>>(
    (acc, language) => {
      if (language.iso639_3) acc[language.iso639_3] = language.name ?? "";
      return acc;
    },
    {},
  ) as Country["languages"],
  population: v5.population ?? 0,
});

export const getCountries = async (
  search: string | undefined,
  region: string | undefined,
): Promise<Country[]> => {
  const url = search
    ? `https://api.restcountries.com/countries/v5/name?q=${encodeURIComponent(search)}&limit=100`
    : region && region !== "all"
      ? `https://api.restcountries.com/countries/v5/region/${encodeURIComponent(region)}?limit=100`
      : "https://api.restcountries.com/countries/v5?limit=100";
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.RESTCOUNTRIES_API_KEY}` },
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    if (response.status === 404) return [];
    throw new Error(
      `Error in response: ${response.status}, ${response.statusText}`,
    );
  }
  const body = await response.json();
  const data = (body?.data?.objects ?? []) as V5Country[];
  const total = body?.data?.meta?.total ?? data.length;
  const pageCount = Math.ceil(total / 100);

  if (pageCount > 1) {
    const pages = await Promise.all(
      Array.from({ length: pageCount - 1 }, (_, index) =>
        fetch(
          `https://api.restcountries.com/countries/v5?limit=100&offset=${(index + 1) * 100}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.RESTCOUNTRIES_API_KEY}`,
            },
            next: { revalidate: 3600 },
          },
        ).then((page) => page.json()),
      ),
    );
    data.push(
      ...pages.flatMap((page) => (page?.data?.objects ?? []) as V5Country[]),
    );
  }

  return data.map(toCountry);
};
