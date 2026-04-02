import { getCountries } from "@/app/(home)/services/getCountries.service";
import Link from "next/link";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";
import SearchInput from "./components/SearchInput/SearchInput";
import { Suspense } from "react";
import RegionSelect from "./components/RegionSelect/RegionSelect";
import { regions } from "./models/regions.model";

const Countries = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; region?: string }>;
}) => {
  const { search, region } = await searchParams;
  const countries = await getCountries(search, region);

  return (
    <>
      <Suspense>
        <form className="flex flex-col sm:flex-row w-full sm:justify-between gap-3 mb-10">
          <SearchInput />
          <RegionSelect regions={regions} />
        </form>
      </Suspense>
      {countries && countries.length === 0 && (
        <div className="text-2xl m-auto w-fit mt-20">No se encontraron paises</div>
      )}
      <ul className={`w-full min-h-full ${styles.gridContainer}`}>
        {countries.map((country) => (
          <li key={country.cca3} className="min-h-100">
            <Link
              className="flex w-full h-full justify-center items-center border rounded-sm transition-all duration-200 ease hover:scale-105"
              href={`/${country.cca3.toLowerCase()}`}
            >
              <Card country={country} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Countries;
