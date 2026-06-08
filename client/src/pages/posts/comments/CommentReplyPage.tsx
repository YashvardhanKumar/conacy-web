import ReplyCommentProvider from "@pages/posts/comments/Providers/ReplyCommentProvider/ReplyCommentProvider";
import { useParams } from "react-router-dom";
import ReplyList from "@pages/posts/comments/components/ReplyList";
import CommentInputProvider from "@pages/posts/comments/Providers/CommentInputProvider/CommentInputProvider";

const CommentReplyPage = () => {
  const params = useParams();
  return (
    <CommentInputProvider>
      <div className="flex md:ml-20 justify-center w-screen scroll-m-0 box-border p-2 pb-20">
        <ReplyCommentProvider params={params}>
          <ReplyList />
        </ReplyCommentProvider>
      </div>
    </CommentInputProvider>

    // </div>
  );
};

export default CommentReplyPage;
