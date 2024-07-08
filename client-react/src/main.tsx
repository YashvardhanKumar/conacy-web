import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import RegisterPage from "./pages/register/Register.tsx";
import { ApolloWrapper } from "./components/apollo-wrapper.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import LoadingLogo from "./components/LoadingLogo.tsx";
import Create from "./pages/create/Create.tsx";
import Messages from "./pages/messages/Messages.tsx";
import CommentsPage from "./pages/posts/comments/CommentsPage.tsx";
import NavBar from "./components/SideBar.tsx";
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

function Root() {
  useEffect(() => {
    // handleValid();
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        {/* ⬆️ Home route lifted up to the data router */}
        <Route path="/create" element={<Create />} />
        <Route path="/messages" element={<Messages />} />
        <Route
          path="/post/:pid/comments"
          element={<CommentsPage />}
          loader={({ params }) => {
            return fetch(`/api/teams/${params.teamId}`);
          }}
        />
      </Routes>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ApolloWrapper>
        <RouterProvider router={router} fallbackElement={<LoadingLogo />} />
      </ApolloWrapper>
  </React.StrictMode>
);
