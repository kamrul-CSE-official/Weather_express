"use client"

import { motion } from "framer-motion"
import { useAppSelector } from "../hooks/useAppSelector"
import { fetchWeatherByCity } from "../store/weatherSlice"
import WeatherIcon from "./WeatherIcon"
import { useAppDispatch } from "../hooks/useAppDispatch"

const RecentSearches = () => {
  const recentResults = useAppSelector((state) => state.history.recentResults)
  const dispatch = useAppDispatch()

  if (recentResults.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Recent Searches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentResults.map((result, index) => (
          <motion.div
            key={`${result.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => dispatch(fetchWeatherByCity(result.name))}
          >
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {result.name}, {result.sys.country}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{result.weather[0].description}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {Math.round(result.main.temp)}°C
                  </span>
                  <WeatherIcon weatherCode={result.weather[0].id} size={36} />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  H: {Math.round(result.main.temp_max)}° L: {Math.round(result.main.temp_min)}°
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default RecentSearches
