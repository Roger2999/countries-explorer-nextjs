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
    <div className="flex flex-col">
      <BackButton />
      <CountryDetail country={country} />
    </div>
  );
};
export default CountryDetails;
