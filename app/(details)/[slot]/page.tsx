import BackButton from "../components/BackButton/BackButton";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import { getCountryById } from "../services/getCounrtyById.service";

const CountryDetails = async ({
  params,
}: {
  params: Promise<{ slot: string }>;
}) => {
  const { slot } = await params;
  const countryArray = await getCountryById(slot);
  const country = countryArray[0];
  return (
    <>
      <BackButton className="border py-1 px-2" />
      <CountryDetail country={country} />
    </>
  );
};
export default CountryDetails;
