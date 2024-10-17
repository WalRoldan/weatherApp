import React from "react";
import WeatherCard from "./components/WeatherCard";
import useWeatherData from "./hooks/useWeatherData";

const LoadingPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center">
    <p className="text-center mt-6">Loading...</p>
  </div>
);

const ErrorMessage = ({ error }) => (
  <p className="text-center mt-6 text-red-500">
    Error fetching weather data: {error}
  </p>
);

const formatWeatherData = (data) => {
  const { current_condition, nearest_area } = data;
  const { temp_C, weatherDesc, humidity, windspeedKmph } = current_condition[0];
  const cityName = nearest_area[0].areaName[0].value;
  const regionName = nearest_area[0].region[0].value;
  const location = `${cityName}, ${regionName}`;

  return {
    location,
    temp: temp_C,
    weather: weatherDesc[0].value,
    humidity,
    windSpeed: windspeedKmph,
  };
};

const App = () => {
  const locations = [
    "https://wttr.in/boulder,co?format=j1",
    "https://wttr.in/losangeles,ca?format=j1",
    "https://wttr.in/newyork,ny?format=j1",
  ];

  const { weatherData, loading, error } = useWeatherData(locations);

  return loading ? (
    <LoadingPlaceholder />
  ) : error ? (
    <ErrorMessage error={error} />
  ) : (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weatherData.map((data, index) => {
          const formattedData = formatWeatherData(data);
          return (
            <WeatherCard
              key={formattedData.location}
              location={formattedData.location}
              temp={formattedData.temp}
              weather={formattedData.weather}
              humidity={formattedData.humidity}
              windSpeed={formattedData.windSpeed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
