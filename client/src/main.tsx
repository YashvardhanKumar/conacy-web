import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "@pages/register/Register.tsx";
import { ApolloWrapper } from "@components/apollo-wrapper.tsx";
import LoginPage from "@pages/login/LoginPage.tsx";
import LoadingLogo from "@components/LoadingLogo.tsx";
import Root from "@common/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloWrapper>
      <RouterProvider router={router} fallbackElement={<LoadingLogo />} />
    </ApolloWrapper>
  </React.StrictMode>
);
