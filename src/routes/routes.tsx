import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", index: true, element: <HomePage /> }],
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
