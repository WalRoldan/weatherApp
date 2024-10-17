// src/components/WeatherCard.jsx
import React from "react";

const WeatherCard = ({ location, temp, weather, humidity, windSpeed }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-2">{location}</h3>
      <p className="text-4xl font-bold text-blue-600">{temp} °C</p>
      <p className="text-md text-gray-700">{weather}</p>
      <div className="mt-4">
        <p className="text-sm text-gray-500">Humidity: {humidity} %</p>
        <p className="text-sm text-gray-500">Wind Speed: {windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
