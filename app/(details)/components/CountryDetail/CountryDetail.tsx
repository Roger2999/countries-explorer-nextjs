import Image from "next/image";
import { CountryById } from "../../models/countriesbyIdResponse.model";
import { Fragment } from "react/jsx-runtime";

interface Props {
  country: CountryById[];
}
const CountryDetail = ({ country }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-10 lg:items-start">
      {country.map((c) => (
        <Fragment key={c.cca3}>
          <figure className="relative w-full lg:max-w-xl h-52 lg:h-60 overflow-hidden">
            <Image
              src={c.flags.svg}
              priority
              fill
              alt={`${c.name.common}-flag`}
              className="object-container"
            />
          </figure>
          <div className="info-container flex flex-col gap-10">
          <div className="description-container flex flex-col flex-wrap md:flex-row gap-10 max-w-xl">
            <p><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos commodi, consequuntur maxime porro quam consequatur. Unde, earum aspernatur quis cumque fugiat soluta minima, est rerum iure ea ab culpa. Atque?</span></p>
            <p><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, aut nihil quasi possimus obcaecati architecto, dolorum, consequuntur pariatur eveniet rerum aperiam ratione odit facere. Similique nam aspernatur eaque sequi voluptate!</span></p>
            <p><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, aut nihil quasi possimus obcaecati architecto, dolorum, consequuntur pariatur eveniet rerum aperiam ratione odit facere. Similique nam aspernatur eaque sequi voluptate!</span></p>
            <p><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, aut nihil quasi possimus obcaecati architecto, dolorum, consequuntur pariatur eveniet rerum aperiam ratione odit facere. Similique nam aspernatur eaque sequi voluptate!</span></p>
            <p><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, aut nihil quasi possimus obcaecati architecto, dolorum, consequuntur pariatur eveniet rerum aperiam ratione odit facere. Similique nam aspernatur eaque sequi voluptate!</span></p>
          </div>
          <div className="borders flex flex-wrap gap-5">
            <p>borders</p>
            <p>borders</p>
            <p>borders</p>
            <p>borders</p>
          </div>
          </div>

        </Fragment>
      ))}
    </div>
  );
};

export default CountryDetail;
