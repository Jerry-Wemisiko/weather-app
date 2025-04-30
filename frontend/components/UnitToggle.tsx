interface UnitToggleProps {
    onToggle: (unit: "C" | "F") => void;
  }
  
  const UnitToggle: React.FC<UnitToggleProps> = ({ onToggle }) => {
    return (
      <div className="flex space-x-4 mt-4">
        <button onClick={() => onToggle("C")} className="p-2 bg-blue-500 text-white rounded-md">
          °C
        </button>
        <button onClick={() => onToggle("F")} className="p-2 bg-blue-500 text-white rounded-md">
          °F
        </button>
      </div>
    );
  };
  
  export default UnitToggle;
  