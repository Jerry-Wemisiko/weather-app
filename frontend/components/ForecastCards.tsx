interface ForecastCardProps {
    date: string;
    temperature: string;
    condition: string;
    unit: "C" | "F";
  }
  
  const ForecastCard: React.FC<ForecastCardProps> = ({ date, temperature, condition, unit }) => {
    const temp = unit === "C" ? temperature : (parseFloat(temperature) * 9/5) + 32;
    
    return (
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h3>{date}</h3>
        <p>Temperature: {temp}°{unit}</p>
        <p>Condition: {condition}</p>
      </div>
    );
  };
  
  interface ForecastCardsProps {
    forecast: Array<{ date: string; temperature: string; condition: string }>;
    unit: "C" | "F";
  }
  
  const ForecastCards: React.FC<ForecastCardsProps> = ({ forecast, unit }) => {
    return (
      <div className="grid grid-cols-2 gap-4 mt-4">
        {forecast.map((day, index) => (
          <ForecastCard key={index} {...day} unit={unit} />
        ))}
      </div>
    );
  };
  
  export default ForecastCards;
  