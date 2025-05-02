"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAppSelector } from "../hooks/useAppSelector"
import { addToRecentResults } from "../store/historySlice"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"
import RecentSearches from "../components/RecentSearches"
import ErrorMessage from "../components/ErrorMessage"
import { useAppDispatch } from "../hooks/useAppDispatch"

const HomePage = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather)
  const dispatch = useAppDispatch()

  // Add to recent results when weather data is fetched
  useEffect(() => {
    if (data) {
      dispatch(addToRecentResults(data))
    }
  }, [data, dispatch])

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Weather Forecast</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Search for a city to get the current weather conditions and forecast.
        </p>
      </motion.div>

      <SearchBar />

      <AnimatePresence>{error && <ErrorMessage message={error} />}</AnimatePresence>

      <div className="mt-8">
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <AnimatePresence>
            {data && (
              <motion.div
                key={data.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <WeatherCard data={data} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      <RecentSearches />
    </div>
  )
}

export default HomePage
