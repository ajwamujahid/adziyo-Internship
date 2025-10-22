
let currCity: string = "Faisalabad";
 let units: "metric" | "imperial" = "metric";

const city = document.querySelector(".weather__city")!;
const datetime = document.querySelector(".weather__datetime")!;
const weatherForecast = document.querySelector(".weather__forecast")!;
const weatherTemperature = document.querySelector(".weather__temperature")!;
const weatherIcon = document.querySelector(".weather__icon")!;
const weatherMinMax = document.querySelector(".weather__minmax")!;
const weatherRealFeel = document.querySelector(".weather__realfeel")!;
const weatherHumidity = document.querySelector(".weather__humidity")!;
const weatherWind = document.querySelector(".weather__wind")!;
const weatherPressure = document.querySelector(".weather__pressure")!;

function convertTimeStamp(timestamp: number, timezone: number): string {
  const convertTimezone = timezone / 3600;
  const date = new Date(timestamp * 1000);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

function convertCountryCode(country: string): string {
  if ((Intl as any).DisplayNames) {
    const regionNames = new (Intl as any).DisplayNames(["en"], { type: "region" });
    return regionNames.of(country) ?? country;
  } else {
    return country;
  }
}

enum UnitSystem {
  Metric = "metric",
  Imperial = "imperial"
}

class WeatherApp {
  private readonly API_KEY: string = '9486352959a7ab748c0d7f5d6d0cb497';

  constructor(public city: string, public units: UnitSystem) {}

  // async getWeather() {
  //   try {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}&units=${this.units}`
  //     );
  //     const data = await res.json();
  //     this.displayWeather(data);
  //   } catch (error) {
  //     console.error("Error fetching weather:", error);
  //   }
  // }
  
getWeather() {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}&units=${this.units}`)
  .then((res) => {
    if(!res.ok){
      throw new Error("Failed to detch weather data");
    }
    return res.json();
  })
  .then((data)=> {
      this.displayWeather(data);
  })
   .catch((error) => {
    console.error("Error fetching weather:", error);
   });
}

  private displayWeather(data: any) {
    city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
    datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
    weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
    weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176;`;
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" class="w-24" />`;
    weatherMinMax.innerHTML = `
      <p>Min: ${data.main.temp_min.toFixed()}&#176;</p>
      <p>Max: ${data.main.temp_max.toFixed()}&#176;</p>`;
    weatherRealFeel.innerHTML = `${data.main.feels_like.toFixed()}&#176;`;
    weatherHumidity.innerHTML = `${data.main.humidity}%`;
    weatherWind.innerHTML = `${data.wind.speed} ${this.units === UnitSystem.Imperial ? "mph" : "m/s"}`;
    weatherPressure.innerHTML = `${data.main.pressure} hPa`;
  }
}

const app = new WeatherApp(currCity, UnitSystem.Metric);

document.querySelector(".weather__search")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.querySelector(".weather__searchform") as HTMLInputElement;
  app.city = searchInput.value;
  app.getWeather();
  searchInput.value = "";
});

document.querySelector(".weather_unit_celsius")?.addEventListener("click", () => {
  if (app.units !== UnitSystem.Metric) {
    app.units = UnitSystem.Metric;
    app.getWeather();
  }
});

document.querySelector(".weather_unit_farenheit")?.addEventListener("click", () => {
  if (app.units !== UnitSystem.Imperial) {
    app.units = UnitSystem.Imperial;
    app.getWeather();
  }
});

window.addEventListener("load", () => app.getWeather());
