import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Installation from "./components/Installation/Installation.jsx";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import AllApps from "./components/AllApps/AllApps.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/data.json"),
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
