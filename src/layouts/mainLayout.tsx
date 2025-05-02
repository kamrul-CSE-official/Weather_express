import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <section className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default MainLayout;
