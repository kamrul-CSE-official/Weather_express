import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import type { WeatherData, WeatherState } from "../types/weather"

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || "bd5e378503939ddaee76f12ad7a97608"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

export const fetchWeatherByCity = createAsyncThunk("weather/fetchByCity", async (city: string, { rejectWithValue }) => {
  try {
    const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)

    if (!response.ok) {
      const errorData = await response.json()
      return rejectWithValue(errorData.message || "Failed to fetch weather data")
    }

    const data = await response.json()
    return data
  } catch (error:unknown) {
    console.log(error);
    return rejectWithValue("Network error occurred")
  }
})

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  currentCity: "",
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload
    },
    clearWeatherData: (state) => {
      state.data = null
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action: PayloadAction<WeatherData>) => {
        state.loading = false
        state.data = action.payload
        state.error = null
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.loading = false
        state.data = null
        state.error = action.payload as string
      })
  },
})

export const { setCurrentCity, clearWeatherData } = weatherSlice.actions
export default weatherSlice.reducer
