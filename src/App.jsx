import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Care from "./pages/Care/Care";
import All from "./components/All/All";
import Arrivals from "./components/Arrivals/Arrivals";
import Sale from "./components/Sale/Sale";
import SinglePage from "./pages/SinglePage/SinglePage";
import SingleDesc from "./components/SingleDesc/SingleDesc";
import SingleRew from "./components/SingleRew/SingleRew.";
import Korzink from "./pages/Karzinka/Korzink";
import { API } from "./util/config";
import CheckOut from "./pages/CheckOut/CheckOut";

function App() {
  const getAllFlowers = async () => {
    const data = await API.get("flowers");
    return data.data;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <All />,
          loader: getAllFlowers,
        },
        {
          path: "arrivals",
          element: <Arrivals />,
        },
        {
          path: "sale",
          element: <Sale />,
        },
      ],
    },
    {
      path: "/shop",
      element: <Korzink />,
      loader: getAllFlowers,
    },
    {
      path: "/care",
      element: <Care />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/shop/:id",
      element: <SinglePage />,
      loader: getAllFlowers,
      children: [
        {
          path: "description",
          element: <SingleDesc />,
        },
        {
          path: "review",
          element: <SingleRew />,
        },
        {
          index: true,
          element: <Navigate to="description" replace />,
        },
      ],
    },
    {
      path: "/shop/checkout",
      element: <CheckOut />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
