import Image from "next/image";
import { CountryById } from "../../models/countriesbyIdResponse.model";
import { Fragment } from "react/jsx-runtime";

interface Props {
  country: CountryById[];
}
const CountryDetail = ({ country }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-10">
      {country.map((c) => (
        <Fragment key={c.cca3}>
          <figure className="relative w-full lg:w-xl h-52 lg:h-72 overflow-hidden">
            <Image
              src={c.flags.svg}
              priority
              fill
              alt={`${c.name.common}-flag`}
              className="object-container"
            />
          </figure>
          <div className="description-container flex flex-col flex-wrap md:flex-row gap-10">
            <p><span></span></p>
            <p><span></span></p>
            <p><span></span></p>
            <p><span></span></p>
            <p><span></span></p>
          </div>
          <div className="borders flex flex-wrap gap-5">
            <p>borders</p>
            <p>borders</p>
            <p>borders</p>
            <p>borders</p>
          </div>

        </Fragment>
      ))}
    </div>
  );
};

export default CountryDetail;
