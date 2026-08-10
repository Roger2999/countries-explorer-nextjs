import { CountryById } from "../models/countriesbyIdResponse.model";
import {
  toCountryById,
  V5Country,
} from "./getCounrtyById.service";

export const getBorderCountries = async (
  slot: string,
): Promise<CountryById[]> => {
  const response = await fetch(
    `https://api.restcountries.com/countries/v5/borders/${slot}`,
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
