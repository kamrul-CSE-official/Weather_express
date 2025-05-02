import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkMode } from "./store/themeSlice";
import { RouterProvider } from "react-router";
import router from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || (!savedTheme && prefersDarkMode)) {
      dispatch(setDarkMode(true));
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop />
    </>
  );
}

export default App;
