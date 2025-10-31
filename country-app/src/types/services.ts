export const fetchCountryByName = async (name: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Error("Country not found");
    }
    const data = await response.json();
    return data[0];
  };
  