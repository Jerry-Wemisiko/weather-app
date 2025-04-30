import { useState, useEffect } from "react";
import WeatherSummary from "../components/WeatherSummary";
import ForecastCards from "../components/ForecastCards";
import SearchBar from "../components/SearchBar";
import UnitToggle from "../components/UnitToggle";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [unit, setUnit] = useState<"C" | "F">("C");

  useEffect(() => {
    fetchWeatherData("Nairobi"); // Default city or use dynamic search
  }, []);

  const fetchWeatherData = async (city: string) => {
    const response = await fetch(`/api/weather?city=${city}`);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleSearch = (city: string) => {
    fetchWeatherData(city);
  };

  const handleUnitToggle = (unit: "C" | "F") => {
    setUnit(unit);
  };

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <UnitToggle onToggle={handleUnitToggle} />
      <WeatherSummary data={weatherData.summary} unit={unit} />
      <ForecastCards forecast={weatherData.forecast} unit={unit} />
    </div>
  );
};

export default WeatherDashboard;
