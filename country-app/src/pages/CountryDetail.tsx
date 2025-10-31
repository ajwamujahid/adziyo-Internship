import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Country = {
  name: { common: string; official: string };
  flags: { svg: string };
  region: string;
  subregion?: string;
  population: number;
  capital?: string[];
  borders?: string[];
  languages?: { [key: string]: string };
  currencies?: { [key: string]: { name: string; symbol: string } };
};

type Props = {
  darkMode: boolean;
};

const CountryDetail = ({ darkMode }: Props) => {
  const { name } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<
    { name: string; cca3: string }[]
  >([]);

  useEffect(() => {
    if (!name) return;

    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        const countryData = data[0];
        setCountry(countryData);

        if (countryData.borders?.length) {
          fetch(
            `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(
              ","
            )}`
          )
            .then((res) => res.json())
            .then((borders) => {
              const formatted = borders.map((b: any) => ({
                name: b.name.common,
                cca3: b.cca3,
              }));
              setBorderCountries(formatted);
            });
        }
      })
      .catch((err) => console.error("Error fetching country:", err));
  }, [name]);

  if (!country)
    return <p className="text-center mt-10">Loading country details...</p>;

  return (
    <div
      className={`p-8 min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Back Button */}
      <Link
        to="/"
        className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded shadow transition ${
          darkMode
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-white text-gray-900 hover:bg-gray-200"
        }`}
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Country Card */}
      <div
        className={`max-w-5xl mx-auto rounded-lg  overflow-hidden ${
          darkMode ? "bg-gray-800" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left: Flag */}
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />

          {/* Right: Details */}
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">{country.name.common}</h2>

            <div className="space-y-2 text-base">
              <p>
                <strong>Official Name:</strong> {country.name.official}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              {country.subregion && (
                <p>
                  <strong>Subregion:</strong> {country.subregion}
                </p>
              )}
              <p>
                <strong>Capital:</strong> {country.capital?.join(", ") || "N/A"}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              {country.languages && (
                <p>
                  <strong>Languages:</strong>{" "}
                  {Object.values(country.languages).join(", ")}
                </p>
              )}
              {country.currencies && (
                <p>
                  <strong>Currencies:</strong>{" "}
                  {Object.values(country.currencies)
                    .map((c) => `${c.name} (${c.symbol})`)
                    .join(", ")}
                </p>
              )}
            </div>

            {/* Border Countries */}
            {borderCountries.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Border Countries:</h3>
                <div className="flex flex-wrap gap-2">
                  {borderCountries.map((b) => (
                    <Link
                      key={b.cca3}
                      to={`/country/${b.name}`}
                      className={`px-3 py-1 rounded-md text-sm font-medium shadow ${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {b.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
