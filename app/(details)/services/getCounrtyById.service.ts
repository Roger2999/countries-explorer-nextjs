import { CountryById } from "../models/countriesbyIdResponse.model";

export const getCountryById = async (slot: string): Promise<CountryById[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${slot}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error(
      `Error in response: ${response.status}, ${response.statusText}`,
    );
  }
  const data: CountryById[] = await response.json();
  return data;
};
