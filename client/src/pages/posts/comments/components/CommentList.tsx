import { useCommentContext } from "@pages/posts/comments/Providers/CommentProvider/CommentProvider";
import CommentForm from "@pages/posts/comments/components/CommentForm";
import CommentTile from "@pages/posts/comments/components/CommentTile";
import person from "@assets/avatar.png";
import SingleCommentProvider from "@pages/posts/comments/Providers/SingleCommentProvider/SingleCommentProvider";
import { Link } from "react-router-dom";

export const CommentList = ({ showHeader = true }: { showHeader?: boolean }) => {
  const { comments, post, inputRef, commentCount } = useCommentContext();
  return (
    <div className="flex flex-col w-full max-w-4xl gap-5">
      {showHeader && (
        <>
          <Link
            to={`/u/${post.creatorOfPost.username}`}
            className="flex items-center gap-3 p-4 border-b border-gray-150 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200"
          >
            <div className="w-10 h-10">
              <img
                src={post.creatorOfPost.profileUrl || person}
                alt="creator-avatar"
                className="rounded-full object-cover h-full w-full bg-white border border-gray-100 dark:border-gray-850"
              />
            </div>
            <div className="flex flex-col text-start">
              <div className="font-semibold text-gray-900 dark:text-white sm:text-lg text-md leading-tight hover:underline">
                {post.creatorOfPost.name}
              </div>
              <div className="text-xs text-gray-400">
                {"@" + post.creatorOfPost.username}
              </div>
            </div>
          </Link>

          <div className="bg-gray-100 dark:bg-gray-900 flex justify-center max-h-[520px]">
            <img
              src={post.url}
              alt="post-media"
              className="max-h-[520px] w-full object-contain"
            />
          </div>
        </>
      )}

      {/* Comment Input Section */}
      <div
        ref={inputRef}
        className="border-t border-b border-gray-100 dark:border-gray-800/80 flex flex-col items-stretch gap-3 bg-gray-50/20 dark:bg-gray-900/10"
      >
        <CommentForm />
      </div>

      {/* Comments List */}
      <div className="flex flex-col gap-1">
        <div className="text-lg font-bold text-gray-950 dark:text-white text-start mb-2 border-b border-gray-100 dark:border-gray-800 pb-2">
          Comments ({commentCount})
        </div>
        <div className="flex flex-col">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <SingleCommentProvider
                id={comment.id}
                key={comment.id}
                children={<CommentTile />}
              />
            ))
          ) : (
            <div className="text-sm text-gray-400 dark:text-gray-500 py-8 text-center">
              No Comments Yet. Be the first to comment!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
