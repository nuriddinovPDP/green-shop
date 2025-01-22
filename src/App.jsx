import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Care from "./pages/Care/Care";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
