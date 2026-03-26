import { CountryById } from "../models/countriesbyIdResponse.model";

export const getBorderCountries = async (
  slot: string,
): Promise<CountryById[]> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${slot}`,
    {
      next: { revalidate: 3600 },
    },
  );
  if (!response.ok) {
    throw new Error(
      `Error in response: ${response.status}, ${response.statusText}`,
    );
  }
  const data: CountryById[] = await response.json();
  return data;
};
