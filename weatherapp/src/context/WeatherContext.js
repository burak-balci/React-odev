import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState({
    id: 26,
    name: "Eskisehir",
    region: "İç Anadolu",
  });

  const city = {
    setCurrentCity,
    currentCity,
  };

  return (
    <WeatherContext.Provider value={city}>{children}</WeatherContext.Provider>
  );
};

export const UseWeatherCity = () => useContext(WeatherContext);
