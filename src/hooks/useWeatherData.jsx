import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/api";

const useWeatherData = (locations) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      try {
        const promises = locations.map((url) => fetchWeatherData(url));
        const results = await Promise.all(promises);
        setWeatherData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllWeatherData();
  }, []);

  return { weatherData, loading, error };
};

export default useWeatherData;
