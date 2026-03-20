import Image from "next/image";
import { CountryById } from "../../models/countriesbyIdResponse.model";
import { Fragment } from "react/jsx-runtime";

interface Props {
  country: CountryById[];
}
const CountryDetail = ({ country }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row">
      {country.map((c) => (
        <Fragment key={c.cca3}>
          <figure className="relative w-32 h-60">
            <Image
              src={c.flags.svg}
              priority
              fill
              alt={`${c.name.common}-flag`}
            />
          </figure>
        </Fragment>
      ))}
    </div>
  );
};

export default CountryDetail;
