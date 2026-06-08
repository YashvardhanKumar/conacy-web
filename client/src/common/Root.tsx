import { useEffect } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import NavBar from "@components/SideBar.tsx";
import Create from "@pages/create/Create.tsx";
import Messages from "@pages/messages/Messages.tsx";
import Search from "@pages/search/Search.tsx";
import SinglePostPage from "@pages/posts/SinglePostPage.tsx";
import CommentsPage from "@pages/posts/comments/CommentsPage.tsx";
import CommentReplyPage from "@pages/posts/comments/CommentReplyPage.tsx";
import ProfilePage from "@pages/profile/ProfilePage.tsx";
import { handleValid } from "@apis/submitActions.ts";

export default function Root() {
  const p = useParams();

  useEffect(() => {
    try {
      handleValid();
    } catch (error) {
      console.error(error);
    }
    localStorage.setItem("redirectUrl", p["*"] ?? "");
  }, [p]);

  if (localStorage?.getItem("isAuthenticated") !== "Yes") {
    return <Navigate to="/" />;
  }
  return (
    <>
      <NavBar />
      <Routes>
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
