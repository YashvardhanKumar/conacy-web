import CommentTile from "./components/CommentTile";
import SingleCommentProvider, {
  useSingleCommentContext,
} from "./Providers/SingleCommentProvider/SingleCommentProvider";
import { CommentTileSkeleton } from "../components/Skeleton";
import { useCommentContext } from "./Providers/CommentProvider/CommentProvider";

const CommentReplyList = () => {
  const { pointerRef, inputRef, setReplier } = useCommentContext();
  const { replyList } = useSingleCommentContext();
  if (!replyList) return <CommentTileSkeleton />;
  return (
    <div
      className="contents border-gray-300"
      children={replyList.map((reply) => (
        <>
          <div
            key={reply.id + "div"}
            aria-hidden="true"
            className="flex justify-end align-start relative bg-base-100 group"
          >
            <div
              data-testid="branch-line"
              className="box-border h-5 border-0 border-gray-300 group-hover:border-base-300 border-solid border-b-[1px]  w-[calc(50%+0.5px)] border-l-[1px] rounded-bl-[12px]"
            />
            <div className="box-border absolute h-full border-0 border-gray-300 group-hover:border-base-300 border-solid border-l-[1px] w-[calc(50%+0.5px)]"></div>
            <div className="box-border h-5 border-0 border-gray-300 group-hover:border-base-300 border-solid border-b-[1px] cursor-pointer w-1 absolute right-[-4px]"></div>
          </div>
          <SingleCommentProvider
            id={reply.id}
            key={reply.id}
            pointerRef={pointerRef}
            inputRef={inputRef}
            setReplier={setReplier}
            children={
              <CommentTile
                id={reply.id}
                pointerRef={pointerRef}
                inputRef={inputRef}
                setReplier={setReplier}
              />
            }
          />
        </>
      ))}
    />
  );
};

export default CommentReplyList;
