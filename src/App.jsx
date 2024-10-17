// src/App.jsx
import React from "react";
import WeatherCard from "./components/WeatherCard";
import useWeatherData from "./hooks/useWeatherData";

const App = () => {
  const locations = [
    "https://wttr.in/boulder,co?format=j1",
    "https://wttr.in/losangeles,ca?format=j1",
    "https://wttr.in/newyork,ny?format=j1",
  ];

  const { weatherData, loading, error } = useWeatherData(locations);

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-6 text-red-500">
        Error fetching weather data: {error}
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weatherData.map((data, index) => {
          const { current_condition, nearest_area } = data;
          const { temp_C, weatherDesc, humidity, windspeedKmph } =
            current_condition[0];

          const cityName = nearest_area[0].areaName[0].value;
          const regionName = nearest_area[0].region[0].value;
          const location = `${cityName}, ${regionName}`;

          return (
            <WeatherCard
              key={index}
              location={location}
              temp={temp_C}
              weather={weatherDesc[0].value}
              humidity={humidity}
              windSpeed={windspeedKmph}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
