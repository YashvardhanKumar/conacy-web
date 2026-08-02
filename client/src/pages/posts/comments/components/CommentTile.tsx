import React from "react";
import Like from "@assets/Icons/Like";
import person from "@assets/avatar.png";
import CommentReplyList from "@pages/posts/comments/CommentReplyList";
import { useSingleCommentContext } from "@pages/posts/comments/Providers/SingleCommentProvider/SingleCommentProvider";
import { useCommentContext } from "@pages/posts/comments/Providers/CommentProvider/CommentProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CommentTile = ({isLastComment} : {isLastComment?: boolean}) => {
  const {
    comment,
    like,
    replyList,
    toggleReplies,
    toggleCommentLike,
    handleDeleteComment,
    handleReplies,
    showReplies,
    commentRef,
    likesNo,
  } = useSingleCommentContext();

  const { post } = useCommentContext();
  const [isHovered, setIsHovered] = React.useState(false);

  const isOP = comment.author.username === post?.creatorOfPost?.username;

  return (
    <div 
      ref={commentRef} 
      className="w-full text-start group/tile"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Row: Avatar and Metadata */}
      <div
        onClick={(e) => {
          e.preventDefault();
          toggleReplies();
        }}
        className="flex items-center gap-2 cursor-pointer select-none outline-none py-1.5 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors rounded-lg px-1 -ml-1"
      >
        <div className="w-8 flex justify-center flex-shrink-0">
          {showReplies ? (
            <img
              src={comment.author?.profileUrl || person}
              alt="avatar"
              className="w-7 h-7 rounded-full object-cover border border-gray-150 dark:border-gray-800 shadow-sm"
            />
          ) : (
            <div className="text-web-color-2 dark:text-sky-400 w-7 h-7 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
              <svg fill="currentColor" height="14" viewBox="0 0 20 20" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 16.2a7.2 7.2 0 117.2-7.2 7.208 7.208 0 01-7.2 7.2zm.9-8.1H14v1.8h-3.1V14H9.1v-3.1H6V9.1h3.1V6h1.8v3.1z"></path>
              </svg>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-[13px] leading-none">
          <Link
            to={`/u/${comment.author?.username}`}
            className="font-bold text-gray-900 dark:text-gray-100 hover:underline flex items-center gap-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            {comment.author?.username ?? "anonymous"}
            {isOP && (
              <span className="bg-web-color-2/10 dark:bg-sky-400/10 text-web-color-2 dark:text-sky-400 text-[10px] px-1.5 py-0.5 rounded-md font-black uppercase tracking-wider border border-web-color-2/20 dark:border-sky-400/20 leading-none">
                OP
              </span>
            )}
          </Link>
          <span className="text-gray-400 dark:text-gray-500 text-[11px] font-normal">
            • {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : ""}
          </span>
          {!showReplies && replyList && replyList.length > 0 && (
            <span className="text-web-color-2 dark:text-sky-400 font-semibold text-[12px] ml-1 px-2 py-0.5 bg-web-color-2/5 dark:bg-sky-400/5 rounded-full">
              {replyList.length} {replyList.length === 1 ? 'reply' : 'replies'}
            </span>
          )}
        </div>
      </div>

      {/* Content Row: Line and Body */}
      <AnimatePresence>
        {showReplies && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex overflow-hidden justify-center"
          >
            {/* Vertical Line Column */}
            <div 
              className="w-8 flex flex-col items-center flex-shrink-0 cursor-pointer group/line"
              onClick={toggleReplies}
            >
              <div className={`w-px h-2 transition-colors duration-200 ${
                isHovered ? "bg-gray-400 dark:bg-gray-500" : "bg-gray-200 dark:bg-gray-800"
              }`} />
              <button
                aria-label="Collapse Thread"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 w-4 h-4 flex items-center justify-center bg-white dark:bg-gray-950 rounded-full border border-gray-200 dark:border-gray-800 cursor-pointer shadow-sm hover:scale-110 transition-all duration-200 flex-shrink-0"
              >
                <svg fill="currentColor" height="10" viewBox="0 0 20 20" width="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2.8A7.2 7.2 0 112.8 10 7.208 7.208 0 0110 2.8zM10 1a9 9 0 100 18 9 9 0 000-18zm4 8.1H6v1.8h8V9.1z"></path>
                </svg>
              </button>
              {!isLastComment && <div className={`w-px transition-colors duration-200 ${
                replyList && replyList.length > 0 ? "flex-1" : "hidden"
              } ${
                isHovered ? "bg-gray-400 dark:bg-gray-500" : "bg-gray-200 dark:bg-gray-800"
              }`} />}
            </div>

            {/* Content Column */}
            <div className="flex-1 min-w-0">
              {/* Body Text */}
              <div className="text-[14px] leading-relaxed text-gray-800 dark:text-gray-200 break-words pr-4 pt-0.5 pb-1 relative z-0">
                {comment.replyOfComment && (
                  <Link
                    to={`/u/${comment.replyOfComment.author.username}`}
                    className="text-web-color-2 dark:text-sky-400 font-semibold mr-1.5 hover:underline cursor-pointer"
                  >
                    @{comment.replyOfComment.author.username}
                  </Link>
                )}
                <span>{comment.text}</span>
              </div>

              {/* Actions Row */}
              <div className="flex items-center gap-5 pb-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center gap-1.5 text-[12px] transition-colors duration-200 ${
                    like ? "text-red-500 font-semibold" : "text-gray-500 dark:text-gray-400 hover:text-red-500"
                  }`}
                  onClick={toggleCommentLike}
                >
                  <Like size={14} liked={like} />
                  <span>{likesNo}</span>
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleReplies}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-[12px] font-medium transition-colors"
                >
                  Reply
                </motion.button>

                {comment.author.username === localStorage?.getItem("username") && (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 dark:text-gray-400 hover:text-red-500 text-[12px] font-medium transition-colors"
                    onClick={handleDeleteComment}
                  >
                    Delete
                  </motion.button>
                )}
              </div>

              {/* Children replies */}
              {replyList && replyList.length > 0 && (
                <div className="mt-1">
                  <CommentReplyList isParentHovered={isHovered} />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommentTile;
