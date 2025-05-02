import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { WeatherData } from "../types/weather"

interface HistoryState {
  searchHistory: string[]
  recentResults: WeatherData[]
}

// Load search history from localStorage if available
const loadSearchHistory = (): string[] => {
  const savedHistory = localStorage.getItem("searchHistory")
  return savedHistory ? JSON.parse(savedHistory) : []
}

// Load recent results from localStorage if available
const loadRecentResults = (): WeatherData[] => {
  const savedResults = localStorage.getItem("recentResults")
  return savedResults ? JSON.parse(savedResults) : []
}

const initialState: HistoryState = {
  searchHistory: loadSearchHistory(),
  recentResults: loadRecentResults(),
}

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToSearchHistory: (state, action: PayloadAction<string>) => {
      const city = action.payload.trim()

      // Don't add empty strings or duplicates
      if (city && !state.searchHistory.includes(city)) {
        // Add to the beginning of the array
        state.searchHistory = [city, ...state.searchHistory.slice(0, 9)]

        // Save to localStorage
        localStorage.setItem("searchHistory", JSON.stringify(state.searchHistory))
      }
    },
    addToRecentResults: (state, action: PayloadAction<WeatherData>) => {
      const newResult = action.payload

      // Check if we already have this city in results
      const existingIndex = state.recentResults.findIndex((result) => result.name === newResult.name)

      if (existingIndex !== -1) {
        // Remove the existing entry
        state.recentResults.splice(existingIndex, 1)
      }

      // Add to the beginning of the array and limit to 5 items
      state.recentResults = [newResult, ...state.recentResults.slice(0, 4)]

      // Save to localStorage
      localStorage.setItem("recentResults", JSON.stringify(state.recentResults))
    },
    clearHistory: (state) => {
      state.searchHistory = []
      localStorage.removeItem("searchHistory")
    },
    clearRecentResults: (state) => {
      state.recentResults = []
      localStorage.removeItem("recentResults")
    },
  },
})

export const { addToSearchHistory, addToRecentResults, clearHistory, clearRecentResults } = historySlice.actions

export default historySlice.reducer
