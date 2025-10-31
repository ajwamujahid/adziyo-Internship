
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCountries } from "../api/countries";

type Country = {
  name: { common: string };
  flags: { svg: string };
  region: string;
  population: number;
  capital?: string[];
};


type HomeProps = {
  darkMode: boolean;
};

const Home = ({ darkMode }: HomeProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCountries()
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching countries:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading countries...</p>;

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {countries.map((country, index) => (
        <Link
          key={index}
          to={`/country/${country.name.common}`}
          className={`rounded-lg shadow-md hover:scale-105 transition-transform ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              {country.name.common}
            </h2>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Capital: {country.capital?.[0] || "N/A"}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
