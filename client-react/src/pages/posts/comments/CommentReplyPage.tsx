import ReplyCommentProvider from "./Providers/ReplyCommentProvider/ReplyCommentProvider";
import { useParams } from "react-router-dom";
import ReplyList from "./components/ReplyList";

const CommentReplyPage = () => {
  const params = useParams();
  return (
    <div className="flex md:ml-20 max-md:my-16 justify-center w-screen scroll-m-0 box-border p-2">
      <ReplyCommentProvider params={params}>
        <ReplyList />
      </ReplyCommentProvider>
    </div>

    // </div>
  );
};

export default CommentReplyPage;
