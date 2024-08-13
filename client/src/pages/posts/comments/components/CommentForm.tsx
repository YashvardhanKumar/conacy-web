
import person from "../../../../assets/person.png";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import CircularLoader from "../../../../components/CircularLoader";
import { useCommentContext } from "../Providers/CommentProvider/CommentProvider";

const CommentForm = ({
}) => {
  const params = useParams();
  const { handleCancelReply, replier, pointerRef, handleCommentChange, comment, handleClick,ccrm } =
    useCommentContext();
  return (
    <>
      <img
        src={person}
        alt=""
        height={36}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex max-_390:flex-col w-full _390:gap-2">
        {replier && replier?.username.length && (
          <div className="flex max-_390:inline-flex bg-base-200 p-1 rounded-md flex-col _390:max-w-[100px] w-fit">
            <div className="flex justify-between items-start">
              <div className=" text-xs text-gray-400">Reply to</div>
              <motion.button
                name="likes"
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

            <div className="text-xs overflow-clip overflow-ellipsis">
              @{replier.username}
            </div>
          </div>
        )}
        <div className="h-10 w-[1px] bg-slate-400 max-_390:hidden" />

        <input
          type="text"
          ref={pointerRef}
          value={comment}
          className="bg-transparent h-10 outline-none w-full"
          placeholder="Type Comments"
          onChange={handleCommentChange}
        />
      </div>
      <button
        className="text-web-color-2"
        onClick={handleClick}
        children={ccrm.addReplyLoad ? <CircularLoader /> : "Post"}
      />
    </>
  );
};

export default CommentForm;
