import React from "react";
import { motion } from "framer-motion";
import { WiCloud, WiDaySunny } from "react-icons/wi";

const WeatherCard = ({ location, temp, weather, humidity, windSpeed }) => {
  const getWeatherIcon = () => {
    switch (weather.toLowerCase()) {
      case "sunny":
        return <WiDaySunny className="text-yellow-500 text-6xl" />;
      case "overcast":
        return <WiCloud className="text-blue-500 text-6xl" />;
      default:
        return <WiDaySunny className="text-gray-500 text-6xl" />;
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, rotate: 3 }}
      whileTap={{ scale: 0.95, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)" }}
    >
      <h3 className="text-xl font-semibold mb-2">{location}</h3>
      {getWeatherIcon()}
      <p className="text-4xl font-bold text-blue-600">{temp} °C</p>
      <p className="text-md text-gray-700">{weather}</p>
      <div className="mt-4">
        <p className="text-sm text-gray-500">Humidity: {humidity} %</p>
        <p className="text-sm text-gray-500">Wind Speed: {windSpeed} km/h</p>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
