import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Care from "./pages/Care/Care";
import All from "./components/All/All";
import Arrivals from "./components/Arrivals/Arrivals";
import Sale from "./components/Sale/Sale";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <All />,
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
      element: <Shop />,
    },
    {
      path: "/care",
      element: <Care />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
