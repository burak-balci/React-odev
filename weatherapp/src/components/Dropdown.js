import React from "react";
import { UseWeatherCity } from "../context/WeatherContext";
import { UseCities } from "../context/CityContext";

function Dropdown() {
  const cities = UseCities();
  const cityFunction = UseWeatherCity();

  const changeCity = (e) => {
    cities.map((city) => {
      if (city.name === e.target.value) {
        cityFunction.setCurrentCity(city);
      }
      return false;
    });
  };

  return (
    <div className="dropdown">
      <select defaultValue={"Eskisehir"} onChange={(e) => changeCity(e)}>
        {cities.map((city) => {
          return <option key={city.id} value={city.name}>{city.name}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
