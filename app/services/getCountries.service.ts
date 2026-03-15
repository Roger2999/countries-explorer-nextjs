import { Country } from "@/app/models/countriesResponse.model";

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,cca2,region,subregion,tld,currencies,languages",
    { next: { revalidate: 3600 } },
  );
  if (!response.ok) {
    throw new Error(
      `Error in response: ${response.status}, ${response.statusText}`,
    );
  }
  const data: Country[] = await response.json();
  return data;
};
