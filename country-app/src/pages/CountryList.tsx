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

type CountryListProps = {
  darkMode: boolean;
};

const CountryList = ({ darkMode }: CountryListProps) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllCountries()
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching countries:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading countries...</p>;

  
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const displayCountries =
    searchTerm.trim() === ""
      ? filteredCountries.slice(0, 13)
      : filteredCountries;

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
    
      <div className="p-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full max-w-md px-4 py-2 rounded-md shadow-md focus:outline-none border ${
            darkMode
              ? "bg-gray-800 text-white border-gray-700 placeholder-gray-400"
              : "bg-white text-gray-900 border-gray-300 placeholder-gray-500"
          }`}
        />
      </div>

    
      <div
        className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {displayCountries.length > 0 ? (
          displayCountries.map((country) => (
            <Link
              key={country.name.common}
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
          ))
        ) : (
          <p className="text-center col-span-full text-lg mt-10">
            No countries found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryList;
