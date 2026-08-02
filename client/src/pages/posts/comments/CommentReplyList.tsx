import React from "react";
import CommentTile from "@pages/posts/comments/components/CommentTile";
import SingleCommentProvider, {
  useSingleCommentContext,
} from "@pages/posts/comments/Providers/SingleCommentProvider/SingleCommentProvider";
import { CommentTileSkeleton } from "@pages/posts/components/Skeleton";

interface CommentReplyListProps {
  isParentHovered?: boolean;
}

const CommentReplyList: React.FC<CommentReplyListProps> = ({
  isParentHovered,
}) => {
  const { replyList, toggleReplies } = useSingleCommentContext();
  if (!replyList) return <CommentTileSkeleton />;
  return (
    <div className="flex flex-col">
      {replyList.map((reply, i, all) => (
        <div key={reply.id} className="flex group/reply-item">
          {/* 
            Connector Column: 
            This handles the "L" curve connecting to the parent's line.
          */}
          <div
            className="flex flex-col items-center flex-shrink-0 cursor-pointer relative"
            onClick={toggleReplies}
          >
            <div
              className={`absolute -left-4 w-4 h-[22px] border-l-[1.5px] border-b-[1.5px] rounded-bl-xl transition-colors duration-200 z-10 ${
                isParentHovered
                  ? "border-gray-400 dark:border-gray-500"
                  : "border-gray-200 dark:border-gray-800"
              } group-hover/reply-item:border-gray-400 dark:group-hover/reply-item:border-gray-600`}
            />
            
            {i === replyList.length - 1 && (
              <div className="absolute -left-5 top-[10px] bottom-0 w-4 dark:bg-gray-950 z-0" />
            )}
          </div>

          {/* Child comment tile wrapper */}
          <div className="flex-1 min-w-0">
            <SingleCommentProvider id={reply.id}>
              <CommentTile isLastComment={i === all.length - 1} />
            </SingleCommentProvider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentReplyList;
