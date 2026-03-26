import Image from "next/image";
import { CountryById } from "../../models/countriesbyIdResponse.model";
import Link from "next/link";
import { getBorderCountries } from "../../services/getBorderCountries.service";
interface Props {
  country: CountryById;
}
const CountryDetail = async ({ country }: Props) => {
  const borderCountries = country.borders?.length 
    ? await getBorderCountries(country.borders.join(","))
    : [];
  const currencies =
    country?.currencies &&
    Object.values(country.currencies)
      .map((c: { name: string }) => c.name)
      .join(", ");
  const languages =
    country?.languages && Object.values(country.languages).join(", ");
  const nativeName =
    country?.name?.nativeName &&
    Object.values(country.name.nativeName)[0]?.common;
  const population = country?.population?.toLocaleString();
  const region = country?.region;
  const subregion = country?.subregion;
  const capital = country?.capital?.join(", ");
  const topLevelDomain = country?.tld?.join(", ");
  return (
    <div className="flex flex-col items-start justify-center sm:flex-row gap-8 sm:items-start">
      <figure className="relative w-full aspect-video max-w-md sm:max-w-xl overflow-hidden">
        <Image
          src={country.flags.svg}
          priority
          fill
          alt={`${country.name.common}-flag`}
          className="object-cover"
        />
      </figure>

      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold">{country.name.common}</h1>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-3">
            <p>
              <span className="font-semibold">Native Name:</span>{" "}
              {nativeName || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              {population || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {region || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Sub Region:</span>{" "}
              {subregion || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {capital || "N/A"}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p>
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {topLevelDomain || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Currencies:</span>{" "}
              {currencies || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {languages || "N/A"}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="flex flex-wrap gap-5">
              <span className="font-semibold">Borders:</span>
              {borderCountries && borderCountries.length > 0 ? (
                borderCountries.map((border) => (
                  <Link
                    key={border.cca3}
                    href={`/country/${border.cca3}`}
                    className="rounded-sm border px-3 py-1"
                  >
                    {border.name.common}
                  </Link>
                ))
              ) : (
                <span>--</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
