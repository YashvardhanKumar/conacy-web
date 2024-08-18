import person from "../../../../assets/avatar.png";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import CircularLoader from "../../../../components/CircularLoader";
import { useCommentContext } from "../Providers/CommentProvider/CommentProvider";

const CommentForm = ({}) => {
  const {
    handleCancelReply,
    replier,
    pointerRef,
    handleCommentChange,
    comment,
    handleClick,
    ccrm,
  } = useCommentContext();
  return (
    <>
      {replier && replier?.username.length && (
        <div className="bg-base-200 p-1 rounded-md w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="text-xs text-gray-400">Reply to</div>
              <div className="text-xs overflow-clip overflow-ellipsis">
                @{replier.username}
              </div>
              <div className="h-4 w-[1px] bg-slate-400" />
              <div className="text-xs text-gray-400">{replier.text}</div>
            </div>
            <motion.button
              type="button"
              whileTap={{
                scale: [null, 0.2, 0.3],
              }}
              transition={{ duration: 1 }}
              onClick={handleCancelReply}
              className="dark:bg-gray-700 bg-gray-200 p-0.5 text-xs -top-1.5 right-0 rounded-full"
              children={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={14}
                  viewBox="0 -960 960 960"
                  width={14}
                  className="*:fill-gray-400"
                  children={
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  }
                />
              }
            />
          </div>
        </div>
      )}
      <div className="bg-transparent flex items-center gap-3">
        <img
          src={person}
          alt=""
          height={36}
          className="w-8 h-8 rounded-full self-end object-cover"
        />
        <div className="flex flex-col w-full _390:gap-2">
          <input
            type="text"
            ref={pointerRef}
            value={comment}
            className="bg-transparent h-full outline-none w-full"
            placeholder="Type Comments"
            onChange={handleCommentChange}
          />
        </div>
        <button
          className={`text-web-color-2 dark:text-web-color ${
            ccrm.addReplyLoad || !comment ? "btn-disabled" : ""
          }`}
          onClick={handleClick}
          children={
            ccrm[1].loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Post"
            )
          }
        />
      </div>
    </>
  );
};

export default CommentForm;
