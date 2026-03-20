import { getCountries } from "@/app/(home)/services/getCountries.service";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/Card/Card";

const Countries = async () => {
  const countries = await getCountries();
  return (
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
  );
};
export default Countries;
