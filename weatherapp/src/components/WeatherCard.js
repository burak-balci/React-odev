import { useState, useEffect } from "react";
import { UseWeatherCity } from "../context/WeatherContext";
import axios from "axios";

function WeatherCard() {
  const currentCity = UseWeatherCity().currentCity;
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.collectapi.com/weather/getWeather", {
        params: {
          "data.lang": "tr",
          "data.city": currentCity.name,
        },
        headers: {
          authorization: `apikey ${process.env.REACT_APP_API_KEY}`,
          "content-type": "application/json",
        },
      })
      .then((data) => setForecast(data.data.result))
      .catch((err) => console.error(err));
  }, [currentCity]);

  return (
    <div>
      <div className="card-group">
        {forecast.map((day, i) => {
          return (
            <div key={i} className="card">
              <div className="card-body">
                <h5 className="card-title">{day.day}</h5>
                <hr />
                <ul>
                  <li className="d-flex justify-content-center">
                    <img
                      className="weatherImg"
                      alt="Weather Status"
                      src={day.icon}
                    />
                  </li>
                  <hr />
                  <li>Beklenen Sıcaklık: {Math.floor(day.degree)}°C</li>
                  <li>Max:{Math.floor(day.max)}°C</li>
                  <li>Min:{Math.floor(day.min)}°C</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherCard;
