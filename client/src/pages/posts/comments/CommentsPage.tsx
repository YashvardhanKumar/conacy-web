import { Navigate, useParams } from "react-router-dom";
import CommentProvider from "@pages/posts/comments/Providers/CommentProvider/CommentProvider";
import { CommentList } from "@pages/posts/comments/components/CommentList";
import CommentInputProvider from "@pages/posts/comments/Providers/CommentInputProvider/CommentInputProvider";

const CommentsPage = () => {
  const params = useParams();
  if (localStorage?.getItem("isAuthenticated") != "Yes") {
    return <Navigate to={"/"} />;
  }
  // else if (cntLoading || commentLoading || postLoading) {
  //   return <LoadingLogo />;
  // }
  return (
    <CommentInputProvider>
      <div className="flex md:ml-20 pb-20 justify-center w-screen scroll-m-0 box-border p-2">
        <CommentProvider params={params}>
          <CommentList />
        </CommentProvider>
      </div>
    </CommentInputProvider>
  );
};

export default CommentsPage;
