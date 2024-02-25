import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { ROUTER } from "./router/routes";
//Pages
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: ROUTER.HOMEPAGE_ROUTE,
    element: <HomePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
