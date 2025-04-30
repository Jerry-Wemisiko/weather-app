interface WeatherSummaryProps {
    data: {
      temperature: string;
      condition: string;
      humidity: string;
      windSpeed: string;
    };
    unit: "C" | "F";
  }
  
  const WeatherSummary: React.FC<WeatherSummaryProps> = ({ data, unit }) => {
    const temperature = unit === "C" ? data.temperature : (parseFloat(data.temperature) * 9/5) + 32;
  
    return (
      <div className="p-4 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">Current Weather</h2>
        <p>Temperature: {temperature}°{unit}</p>
        <p>Condition: {data.condition}</p>
        <p>Humidity: {data.humidity}%</p>
        <p>Wind Speed: {data.windSpeed} km/h</p>
      </div>
    );
  };
  
  export default WeatherSummary;
  