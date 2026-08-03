import { Country } from "@/app/(home)/models/countriesResponse.model";
import {
  fetchCountries,
  V5Country,
  V5Native,
} from "@/lib/restcountries";

const PAGE_SIZE = 100;

const fromNative = (native: Record<string, V5Native> | undefined) =>
  native
    ? Object.fromEntries(
        Object.entries(native).map(([key, value]) => [
          key,
          { common: value.common, official: value.official },
        ]),
      )
    : {};

const toCountry = (v5: V5Country): Country => ({
  flags: {
    svg: v5.flag?.url_svg ?? "",
    png: v5.flag?.url_png ?? "",
    alt: v5.flag?.description ?? "",
  },
  name: {
    common: v5.names?.common ?? "Unknown",
    official: v5.names?.official ?? "",
    nativeName: fromNative(v5.names?.native) as Country["name"]["nativeName"],
  },
  tld: v5.tlds ?? [],
  cca2: v5.codes?.alpha_2 ?? "",
  cca3: v5.codes?.alpha_3 ?? "",
  currencies: (v5.currencies ?? []).reduce<Record<string, { name: string; symbol: string }>>(
    (acc, currency) => {
      acc[currency.code] = { name: currency.name, symbol: currency.symbol };
      return acc;
    },
    {},
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
  const base: Record<string, string | number> = { limit: PAGE_SIZE };
  if (search && search.trim()) base.q = search.trim();
  if (region && region !== "all") base.region = region;

  const firstPage = await fetchCountries(base);
  if (firstPage.total <= PAGE_SIZE) return firstPage.objects.map(toCountry);

  const pageCount = Math.ceil(firstPage.total / PAGE_SIZE);
  const remainingPages = await Promise.all(
    Array.from({ length: pageCount - 1 }, (_, index) =>
      fetchCountries({
        ...base,
        limit: PAGE_SIZE,
        offset: (index + 1) * PAGE_SIZE,
      }),
    ),
  );

  return [firstPage, ...remainingPages]
    .flatMap((page) => page.objects)
    .map(toCountry);
};