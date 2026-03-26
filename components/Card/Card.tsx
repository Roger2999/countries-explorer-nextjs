import Description from "@/app/(home)/components/Description/Description";
import { Country } from "@/app/(home)/models/countriesResponse.model";
import Image from "next/image";

interface Props {
  country: Country;
}
const Card = ({ country }: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <figure className="flag-image-container relative flex-1 overflow-hidden">
        <Image
          src={country?.flags?.svg}
          alt={country?.name?.common}
          fill
          priority
          className="object-cover"
        />
      </figure>
      <Description>
        <p className="text-2xl font-semibold">
          {country.name.common ? country.name.common : "Unknow"}
        </p>
        <p>
          <span className="font-semibold">Poulation: </span>
          {country.population ? country.population : "Unknow"}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {country.region ? country.region : "Unknow"}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {country.capital ? country.capital : "Unknow"}
        </p>
      </Description>
    </div>
  );
};

export default Card;
