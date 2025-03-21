import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import RegisterPage from "./pages/register/Register.tsx";
import { ApolloWrapper } from "./components/apollo-wrapper.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import LoadingLogo from "./components/LoadingLogo.tsx";
import Create from "./pages/create/Create.tsx";
import Messages from "./pages/messages/Messages.tsx";
import CommentsPage from "./pages/posts/comments/CommentsPage.tsx";
import NavBar from "./components/SideBar.tsx";
import CommentReplyPage from "./pages/posts/comments/CommentReplyPage.tsx";
import ProfilePage from "./pages/profile/ProfilePage.tsx";
import { handleValid } from "./apis/submitActions.ts";
import SinglePostPage from "./pages/posts/SinglePostPage.tsx";
import Search from "./pages/search/Search.tsx";
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
  const p = useParams();
  const nav = useNavigate();

  useEffect(() => {
    try {
      handleValid();
    } catch (error) {
      console.error(error);
    }
    localStorage.setItem("redirectUrl", p["*"] ?? "")
  });

  if(localStorage?.getItem("isAuthenticated") != "Yes") {
    return <Navigate to={'/'}/>
  }
  return (
    <>
      <NavBar />


      <Routes>
        {/* ⬆️ Home route lifted up to the data router */}
        <Route path="/create" element={<Create />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post/:pid">
          <Route path="" element={<SinglePostPage />} />
          <Route path="comments">
            <Route path="" element={<CommentsPage />} />
            <Route path=":cid" element={<CommentReplyPage />} />
          </Route>
        </Route>
        <Route path="/u/:username" element={<ProfilePage />} />
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
