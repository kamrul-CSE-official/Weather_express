import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { path: '/', index: true, element: <HomePage /> }
      ]
    }
  ]);


  export default router;