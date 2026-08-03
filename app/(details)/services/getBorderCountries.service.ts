import { CountryById } from "../models/countriesbyIdResponse.model";
import { fetchCountriesByProperty } from "@/lib/restcountries";
import { toCountryById } from "./getCounrtyById.service";

export const getBorderCountries = async (
  slot: string,
): Promise<CountryById[]> => {
  const { objects } = await fetchCountriesByProperty("borders", slot);
  return objects.map(toCountryById);
};