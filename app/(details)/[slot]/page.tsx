import BackButton from "../components/BackButton/BackButton";
import CountryDetail from "../components/CountryDetail/CountryDetail";
import { getCountryById } from "../services/getCounrtyById.service";

const CountryDetails = async ({
  params,
}: {
  params: Promise<{ slot: string }>;
}) => {
  const { slot } = await params;
  const country = await getCountryById(slot);
  return (
    <>
    <BackButton />
    <CountryDetail country={country} />
    </>
    
  );
};
export default CountryDetails;
