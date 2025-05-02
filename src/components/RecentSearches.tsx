"use client"

import { motion } from "framer-motion"
import { useAppSelector } from "../hooks/useAppSelector"
import { fetchWeatherByCity } from "../store/weatherSlice"
import WeatherIcon from "./WeatherIcon"
import { useAppDispatch } from "../hooks/useAppDispatch"

const RecentSearches = () => {
  const recentResults = useAppSelector((state) => state.history.recentResults)
  const { darkMode } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  if (recentResults.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8"
    >
      <h2
        className={`text-xl font-semibold mb-4 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Recent Searches
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentResults.map((result, index) => (
          <motion.div
            key={`${result.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border border-gray-400 ${
              darkMode ? "dark:text-gray-100" : "text-gray-900"
            }`}
            onClick={() => dispatch(fetchWeatherByCity(result.name))}
          >
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {result.name}, {result.sys.country}
                </h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {result.weather[0].description}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <span
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {Math.round(result.main.temp)}°C
                  </span>
                  <WeatherIcon weatherCode={result.weather[0].id} size={36} />
                </div>
                <span
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {result.weather[0].main}
                  H: {Math.round(result.main.temp_max)}° L:{" "}
                  {Math.round(result.main.temp_min)}°
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default RecentSearches
