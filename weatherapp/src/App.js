import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import { CityProvider } from "./context/CityContext";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="container">
      <WeatherProvider>
        <CityProvider>
          <Header />
          <WeatherCard />
        </CityProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;
