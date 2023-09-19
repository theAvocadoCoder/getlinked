import React from "react"
import ReactDOM from "react-dom/client"
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import _404 from "./pages/404";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <_404 />,
    children: [
      {
        errorElement: <_404 />,
        children: [
          {
            index: true,
            element: <Landing />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
