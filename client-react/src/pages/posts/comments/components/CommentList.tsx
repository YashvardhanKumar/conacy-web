import { useCommentContext } from "../Providers/CommentProvider/CommentProvider";
import CommentForm from "./CommentForm";
import CommentTile from "./CommentTile";
import person from "../../../../assets/person.png";
import { useParams } from "react-router-dom";
import SingleCommentProvider from "../Providers/SingleCommentProvider/SingleCommentProvider";

export const CommentList = () => {
  const {
    comments,
    post,
    inputRef,
    pointerRef,
    commentCount,
    setReplier,
  } = useCommentContext();
  return (
    <div className="flex flex-col  w-full md:w-3/5 lg:w-2/5 max-_390:w-[95vw]">
      <div className="flex items-center gap-3 p-3 border-b-[0.5px] border-t-[0.5px] border-slate-400">
        <div className="sm:h-14 sm:w-14 w-10 h-10">
          <img
            src={person}
            alt=""
            className="rounded-full object-cover h-full w-full bg-white"
          />
        </div>
        <div className="flex flex-col sm:gap-1">
          <div className="sm:text-xl text-lg">{post.creatorOfPost.name}</div>
          <div className="sm:text-md text-sm text-gray-400">
            {"@" + post.creatorOfPost.username}
          </div>
        </div>
      </div>
      <img src={post.url} alt="" className="max-h-[520px] object-scale-down" />
      <div
        ref={inputRef}
        className="bg-transparent border-b-[0.5px] border-t-[0.5px] border-slate-400 flex items-center p-3 gap-3"
      >
        <CommentForm />
      </div>
      <div className="p-4 text-xl ">Comments ({commentCount})</div>
      {comments.map((comment) => (
        <SingleCommentProvider
          id={comment.id}
          pointerRef={pointerRef}
          inputRef={inputRef}
          setReplier={setReplier}
          children={
            <CommentTile
              id={comment.id}
              pointerRef={pointerRef}
              inputRef={inputRef}
              setReplier={setReplier}
            />
          }
        />
      ))}
    </div>
  );
};
