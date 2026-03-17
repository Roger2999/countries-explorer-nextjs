import { getCountryById } from "../services/getCounrtyById.service";

const CountryDetails = async ({
  params,
}: {
  params: Promise<{ slot: string }>;
}) => {
  const { slot } = await params;
  const country = await getCountryById(slot);
  return <div>{country.map((c) => c.name?.common)}</div>;
};
export default CountryDetails;
