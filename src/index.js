import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTER } from "./router/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
//Pages
import HomePage from "./pages/HomePage";
import SignIn from "./components/sign/sign-in/SignIn";
import SignUp from "./components/sign/sign-up/SignUp";

const router = createBrowserRouter([
  {
    path: ROUTER.HOMEPAGE_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTER.SIGNINPAGE_ROUTE,
    element: <SignIn />,
  },
  {
    path: ROUTER.SIGNUPPAGE_ROUTE,
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
