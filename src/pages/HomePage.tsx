"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../hooks/useAppSelector";
import { addToRecentResults } from "../store/historySlice";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import RecentSearches from "../components/RecentSearches";
import ErrorMessage from "../components/ErrorMessage";
import { useAppDispatch } from "../hooks/useAppDispatch";

const HomePage = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);
  const { darkMode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  // Add to recent results when weather data is fetched
  useEffect(() => {
    if (data) {
      dispatch(addToRecentResults(data));
    }
  }, [data, dispatch]);

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? "bg-gray-900" : "bg-white shadow-md"
      } transition-colors duration-300`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Weather Forecast
        </h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Search for a city to get the current weather conditions and forecast.
        </p>
      </motion.div>

      <SearchBar />

      <AnimatePresence>
        <div className={`mt-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          {error && (
            <div>
              <ErrorMessage message={error} /> <br />
              <small>Type only city name not country or other!</small>
            </div>
          )}
        </div>
      </AnimatePresence>

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
  );
};

export default HomePage;
