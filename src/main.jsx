import React from "react"
import ReactDOM from "react-dom/client"
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import InProgress from "./global/InProgress/index.jsx";
import _404 from "./global/404/index.jsx";
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
          {
            path: "/timeline",
            element: <InProgress />,
          },
          {
            path: "/overview",
            element: <InProgress />,
          },
          {
            path: "/faqs",
            element: <InProgress />,
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
