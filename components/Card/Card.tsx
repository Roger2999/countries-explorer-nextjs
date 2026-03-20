import { Country } from "@/app/(home)/models/countriesResponse.model";
import Image from "next/image";

interface Props {
  country: Country;
}
const Card = ({ country }: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <figure className="flag-image-container relative flex-1 border aspect-16/8 overflow-hidden">
        <Image
          src={country?.flags?.svg}
          alt={country?.name?.common}
          fill
          priority
          className="object-cover"
        />
      </figure>
      <div className="description-container flex flex-col flex-1 py-6 px-8 gap-1">
        <p className="text-2xl font-semibold">{country.name.common}</p>
        <p>
          <span className="font-semibold">Poulation: </span>
          {country.population}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {country.region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
