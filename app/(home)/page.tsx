import { getCountries } from "@/app/(home)/services/getCountries.service";
import styles from "./page.module.css";
import Link from "next/link";
const Countries = async () => {
  const countries = await getCountries();
  return (
    <div className="country-container w-full min-h-full">
      <ul className={styles.gridContainer}>
        {countries.map((country) => (
          <li key={country.cca3} className="h-20">
            <Link
              className="flex w-full h-full justify-center items-center border rounded-sm transition-all duration-200 ease hover:scale-105"
              href={`/${country.cca3.toLowerCase()}`}
            >
              {country?.name?.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Countries;
