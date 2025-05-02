"use client"

import { motion } from "framer-motion"
import { useAppSelector } from "../hooks/useAppSelector"
import type { WeatherData } from "../types/weather"
import WeatherIcon from "./WeatherIcon"

interface WeatherCardProps {
  data: WeatherData
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode)

  // Format date
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Format time
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Get weather background class based on weather condition
  const getWeatherBackground = () => {
    const weatherMain = data.weather[0].main.toLowerCase()

    if (weatherMain.includes("clear")) {
      return darkMode ? "from-blue-900 to-indigo-900" : "from-blue-400 to-cyan-300"
    } else if (weatherMain.includes("cloud")) {
      return darkMode ? "from-gray-700 to-gray-900" : "from-gray-300 to-gray-400"
    } else if (weatherMain.includes("rain") || weatherMain.includes("drizzle")) {
      return darkMode ? "from-blue-800 to-gray-900" : "from-blue-500 to-gray-400"
    } else if (weatherMain.includes("thunderstorm")) {
      return darkMode ? "from-purple-900 to-gray-900" : "from-purple-500 to-gray-600"
    } else if (weatherMain.includes("snow")) {
      return darkMode ? "from-blue-900 to-gray-800" : "from-blue-100 to-gray-200"
    } else if (weatherMain.includes("mist") || weatherMain.includes("fog")) {
      return darkMode ? "from-gray-700 to-gray-800" : "from-gray-300 to-gray-400"
    } else {
      return darkMode ? "from-gray-800 to-gray-900" : "from-gray-200 to-gray-300"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`weather-card rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${getWeatherBackground()}`}
    >
      <div className={`p-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold">
              {data.name}, {data.sys.country}
            </h2>
            <p className="text-lg opacity-90">{formatDate(data.dt)}</p>
          </div>
          <div className="flex items-center">
            <WeatherIcon weatherCode={data.weather[0].id} size={64} />
            <div className="ml-4 text-center">
              <p className="text-4xl font-bold">
                {Math.round(data.main.temp)}°C
              </p>
              <p className="text-lg capitalize">
                {data.weather[0].description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-effect p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
              </svg>
              <span className="text-sm opacity-90">Feels Like</span>
            </div>
            <p className="text-xl font-semibold">
              {Math.round(data.main.feels_like)}°C
            </p>
          </div>

          <div className="glass-effect p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M16.5 19a4.5 4.5 0 1 0 0-9h-9a4.5 4.5 0 1 0 0 9Z" />
              </svg>
              <span className="text-sm opacity-90">Humidity</span>
            </div>
            <p className="text-xl font-semibold">{data.main.humidity}%</p>
          </div>

          <div className="glass-effect p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
              </svg>
              <span className="text-sm opacity-90">Wind</span>
            </div>
            <p className="text-xl font-semibold">
              {Math.round(data.wind.speed * 3.6)} km/h
            </p>
          </div>

          <div className="glass-effect p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v8" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41 1.41" />
                <path d="M22 22H2" />
                <path d="m8 6 4-4 4 4" />
                <path d="M16 18a4 4 0 0 0-8 0" />
              </svg>
              <span className="text-sm opacity-90">Pressure</span>
            </div>
            <p className="text-xl font-semibold">{data.main.pressure} hPa</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="glass-effect p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                  <span className="text-sm opacity-90">Sunrise</span>
                </div>
                <p className="text-xl font-semibold">
                  {formatTime(data.sys.sunrise)}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-yellow-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v8" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41 1.41" />
                <path d="M22 22H2" />
                <path d="m8 6 4-4 4 4" />
                <path d="M16 18a4 4 0 0 0-8 0" />
              </svg>
            </div>
          </div>

          <div className="glass-effect p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 10V2" />
                    <path d="m4.93 10.93 1.41-1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41-1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4-4-4 4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                  <span className="text-sm opacity-90">Sunset</span>
                </div>
                <p className="text-xl font-semibold">
                  {formatTime(data.sys.sunset)}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10 text-orange-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 10V2" />
                <path d="m4.93 10.93 1.41-1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41-1.41" />
                <path d="M22 22H2" />
                <path d="m16 6-4-4-4 4" />
                <path d="M16 18a4 4 0 0 0-8 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default WeatherCard
