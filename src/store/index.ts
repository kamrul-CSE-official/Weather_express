import { configureStore } from "@reduxjs/toolkit"
import weatherReducer from "./weatherSlice"
import themeReducer from "./themeSlice"
import historyReducer from "./historySlice"

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    theme: themeReducer,
    history: historyReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
