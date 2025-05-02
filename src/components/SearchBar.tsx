"use client"

import { useState, type FormEvent, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAppSelector } from "../hooks/useAppSelector"
import { fetchWeatherByCity, setCurrentCity } from "../store/weatherSlice"
import { addToSearchHistory } from "../store/historySlice"
import { useAppDispatch } from "../hooks/useAppDispatch"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const dispatch = useAppDispatch()
  const searchHistory = useAppSelector((state) => state.history.searchHistory)
  const { darkMode } = useAppSelector((state) => state.theme);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close suggestions when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(setCurrentCity(query));
      dispatch(fetchWeatherByCity(query));
      dispatch(addToSearchHistory(query));
      setQuery("");
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    dispatch(setCurrentCity(suggestion));
    dispatch(fetchWeatherByCity(suggestion));
    setQuery("");
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-md mx-auto relative" ref={searchRef}>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search for a city..."
            className={`w-full px-4 py-3 pl-10 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${
              darkMode
                ? "text-white border-gray-600"
                : "text-gray-900 border-gray-300"
            }`}
            aria-label="Search for a city"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
      </motion.form>

      <AnimatePresence>
        {showSuggestions && searchHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-10 mt-1 w-full rounded-lg shadow-lg border max-h-60 overflow-y-auto ${
              darkMode
                ? "text-white bg-black border-gray-700"
                : "text-black bg-white border-gray-200"
            }`}
          >
            <ul className="py-1">
              {searchHistory.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSuggestionClick(item)}
                    className={`w-full text-left px-4 py-2  flex items-center rounded-lg transition-colors duration-300 ${
                      darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 mr-2 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchBar
