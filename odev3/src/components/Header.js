import { UseWeatherCity } from "../context/WeatherContext";
import "../App.css";
import Dropdown from "./Dropdown";
import Timer from "./Timer";

function Header() {
  const currentCity = UseWeatherCity().currentCity;

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card mt p-2">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <Dropdown />
              <div className="font bold">{currentCity.name}</div>
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
