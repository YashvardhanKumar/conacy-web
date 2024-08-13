import ReplyCommentProvider from "./Providers/ReplyCommentProvider/ReplyCommentProvider";
import { useParams } from "react-router-dom";
import ReplyList from "./components/ReplyList";
import CommentInputProvider from "./Providers/CommentInputProvider/CommentInputProvider";

const CommentReplyPage = () => {
  const params = useParams();
  return (
    <CommentInputProvider>

    <div className="flex md:ml-20 max-md:my-16 justify-center w-screen scroll-m-0 box-border p-2">
      <ReplyCommentProvider params={params}>
        <ReplyList />
      </ReplyCommentProvider>
    </div>
    </CommentInputProvider>

    // </div>
  );
};

export default CommentReplyPage;
