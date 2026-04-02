import { Country } from "@/app/(home)/models/countriesResponse.model";

export const getCountries = async (
  search: string | undefined,
  region: string | undefined,
): Promise<Country[]> => {
  const url = search
    ? `https://restcountries.com/v3.1/name/${search}`
    : region
      ? `https://restcountries.com/v3.1/region/${region}`
      : "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca3,region,subregion,tld,currencies,languages";
  const response = await fetch(url, { next: { revalidate: 3600 } });
  if (!response.ok) {
    if(response.status===404)return []
    throw new Error(
      `Error in response: ${response.status}, ${response.statusText}`,
    );
  }
  const data: Country[] = await response.json();
  return data ||[];
};
