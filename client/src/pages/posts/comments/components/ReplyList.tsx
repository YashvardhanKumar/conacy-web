import { useReplyCommentContext } from "@pages/posts/comments/Providers/ReplyCommentProvider/ReplyCommentProvider";
import ReplyCommentForm from "@pages/posts/comments/components/ReplyCommentForm";
import SingleCommentProvider from "@pages/posts/comments/Providers/SingleCommentProvider/SingleCommentProvider";
import CommentTile from "@pages/posts/comments/components/CommentTile";
import person from "@assets/avatar.png";
import { Link } from "react-router-dom";

const ReplyList = () => {
  const { inputRef, comment } = useReplyCommentContext();
  return (
    <div className="flex flex-col  w-full md:w-3/5 lg:w-2/5 max-_390:w-[95vw]">
      <Link 
        to={`/u/${comment.author.username}`}
        className="flex items-center gap-3 p-3 border-b-[0.5px] border-t-[0.5px] border-slate-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
      >
        <div className="sm:h-14 sm:w-14 w-10 h-10">
          <img
            src={comment.author.profileUrl || person}
            alt=""
            className="rounded-full object-cover h-full w-full bg-white"
          />
        </div>
        <div className="flex flex-col sm:gap-1 text-start">
          <div className="sm:text-xl text-lg font-semibold hover:underline">{comment.author.name}</div>
          <div className="sm:text-md text-sm text-gray-400">
            {"@" + comment.author.username}
          </div>
        </div>
      </Link>
      <div className="text-2xl p-6">{comment.text}</div>
      <div
        ref={inputRef}
        className="bg-transparent border-b-[0.5px] border-t-[0.5px] border-slate-400 flex items-center p-3 gap-3"
        children={<ReplyCommentForm />}
      />
      <div className="p-4 text-xl ">Comments ({comment.replies.length})</div>
      {comment.replies.map((comment) => (
        <SingleCommentProvider
          id={comment.id}
          key={comment.id}
          children={<CommentTile />}
        />
      ))}
    </div>
  );
};

export default ReplyList;
