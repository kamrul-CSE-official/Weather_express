import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAppSelector } from "../hooks/useAppSelector";

function MainLayout() {
  const { darkMode } = useAppSelector((state) => state.theme);

  return (
    <main
      className={`flex flex-col min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <Header />
      <br />
      <section className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default MainLayout;
