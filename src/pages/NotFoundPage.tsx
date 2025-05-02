import { Link } from "react-router";
import Seo from "../components/Seo";

function NotFoundPage() {
  return (
    <>
      <Seo title="404" />

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p>Page not found!</p>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>Please check the URL or go back to the homepage.</p>
        <Link
          className="bg-blue-700 text-white px-10 py-5 rounded-2xl my-5"
          to="/"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
