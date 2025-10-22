var _a, _b, _c;
var currCity = "Faisalabad";
var units = "metric";
var city = document.querySelector(".weather__city");
var datetime = document.querySelector(".weather__datetime");
var weatherForecast = document.querySelector(".weather__forecast");
var weatherTemperature = document.querySelector(".weather__temperature");
var weatherIcon = document.querySelector(".weather__icon");
var weatherMinMax = document.querySelector(".weather__minmax");
var weatherRealFeel = document.querySelector(".weather__realfeel");
var weatherHumidity = document.querySelector(".weather__humidity");
var weatherWind = document.querySelector(".weather__wind");
var weatherPressure = document.querySelector(".weather__pressure");
function convertTimeStamp(timestamp, timezone) {
    var convertTimezone = timezone / 3600;
    var date = new Date(timestamp * 1000);
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "Etc/GMT".concat(convertTimezone >= 0 ? "-" : "+").concat(Math.abs(convertTimezone)),
        hour12: true,
    };
    return date.toLocaleString("en-US", options);
}
function convertCountryCode(country) {
    var _a;
    if (Intl.DisplayNames) {
        var regionNames = new Intl.DisplayNames(["en"], { type: "region" });
        return (_a = regionNames.of(country)) !== null && _a !== void 0 ? _a : country;
    }
    else {
        return country;
    }
}
var UnitSystem;
(function (UnitSystem) {
    UnitSystem["Metric"] = "metric";
    UnitSystem["Imperial"] = "imperial";
})(UnitSystem || (UnitSystem = {}));
var WeatherApp = /** @class */ (function () {
    function WeatherApp(city, units) {
        this.city = city;
        this.units = units;
        this.API_KEY = '9486352959a7ab748c0d7f5d6d0cb497';
    }
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
    WeatherApp.prototype.getWeather = function () {
        var _this = this;
        return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.city, "&appid=").concat(this.API_KEY, "&units=").concat(this.units))
            .then(function (res) {
            if (!res.ok) {
                throw new Error("Failed to detch weather data");
            }
            return res.json();
        })
            .then(function (data) {
            _this.displayWeather(data);
        })
            .catch(function (error) {
            console.error("Error fetching weather:", error);
        });
    };
    WeatherApp.prototype.displayWeather = function (data) {
        city.innerHTML = "".concat(data.name, ", ").concat(convertCountryCode(data.sys.country));
        datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
        weatherForecast.innerHTML = "<p>".concat(data.weather[0].main, "</p>");
        weatherTemperature.innerHTML = "".concat(data.main.temp.toFixed(), "&#176;");
        weatherIcon.innerHTML = "<img src=\"http://openweathermap.org/img/wn/".concat(data.weather[0].icon, "@4x.png\" class=\"w-24\" />");
        weatherMinMax.innerHTML = "\n      <p>Min: ".concat(data.main.temp_min.toFixed(), "&#176;</p>\n      <p>Max: ").concat(data.main.temp_max.toFixed(), "&#176;</p>");
        weatherRealFeel.innerHTML = "".concat(data.main.feels_like.toFixed(), "&#176;");
        weatherHumidity.innerHTML = "".concat(data.main.humidity, "%");
        weatherWind.innerHTML = "".concat(data.wind.speed, " ").concat(this.units === UnitSystem.Imperial ? "mph" : "m/s");
        weatherPressure.innerHTML = "".concat(data.main.pressure, " hPa");
    };
    return WeatherApp;
}());
var app = new WeatherApp(currCity, UnitSystem.Metric);
(_a = document.querySelector(".weather__search")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    var searchInput = document.querySelector(".weather__searchform");
    app.city = searchInput.value;
    app.getWeather();
    searchInput.value = "";
});
(_b = document.querySelector(".weather_unit_celsius")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    if (app.units !== UnitSystem.Metric) {
        app.units = UnitSystem.Metric;
        app.getWeather();
    }
});
(_c = document.querySelector(".weather_unit_farenheit")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    if (app.units !== UnitSystem.Imperial) {
        app.units = UnitSystem.Imperial;
        app.getWeather();
    }
});
window.addEventListener("load", function () { return app.getWeather(); });
