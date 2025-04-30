

import React from 'react';

interface WindInfoProps {
  windSpeed: number;    // Wind speed (in km/h or m/s)
  windDirection: string; // Wind direction (e.g., "North", "ESE")
  windGusts: number;    // Wind gusts (in km/h or m/s)
}

const WindInfo: React.FC<WindInfoProps> = ({ windSpeed, windDirection, windGusts }) => {
  return (
    <div className="rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold text-gray-700">Wind Information</h2>
      <div className="mt-2 text-sm text-gray-600">
        <p><strong>Wind Speed:</strong> {windSpeed} km/h</p>
        <p><strong>Wind Direction:</strong> {windDirection}</p>
        <p><strong>Wind Gusts:</strong> {windGusts} km/h</p>
      </div>
    </div>
  );
}

export default WindInfo;
