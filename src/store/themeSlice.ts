import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface ThemeState {
  darkMode: boolean
}

const initialState: ThemeState = {
  darkMode: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload

      // Update DOM and localStorage
      if (action.payload) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode

      // Update DOM and localStorage
      if (state.darkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    },
  },
})

export const { setDarkMode, toggleDarkMode } = themeSlice.actions
export default themeSlice.reducer
