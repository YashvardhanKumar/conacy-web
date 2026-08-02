import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useSinglePostContext,
} from "@pages/posts/SinglePostProvider/SinglePostProvider";
import LikeForm from "@pages/posts/components/LikeForm";
import CommentIcon from "@assets/Icons/CommentIcon";
import SendIcon from "@assets/Icons/SendIcon";
import SaveIcon from "@assets/Icons/SaveIcon";
import ToggleSettings from "@assets/Icons/ToggleSettings";
import { Link, useParams } from "react-router-dom";
import person from "@assets/avatar.png";
import DialogBox from "@components/DialogBox";
import CommentInputProvider from "@pages/posts/comments/Providers/CommentInputProvider/CommentInputProvider";
import CommentProvider from "@pages/posts/comments/Providers/CommentProvider/CommentProvider";
import { CommentList } from "@pages/posts/comments/components/CommentList";

const SinglePost = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { post } = useSinglePostContext();
  const param = useParams();
  useEffect(() => {
    console.log(post.visibility);
  });
  return (
    <>
      <div className="p-1 font-bold h-12 flex items-center justify-between gap-2 w-full">
        <div className="flex items-center gap-2">
          <div
            className="avatar"
            children={
              <div
                className="h-8 w-8 rounded-full"
                children={<img src={person} alt="" height={36} />}
              />
            }
          />
          <div>
            <div className="max-sm:text-sm w-fit text-wrap text-" children={post.creatorOfPost.name} />
            <div
              className=" text-xs text-gray-400"
              children={"@" + post.creatorOfPost.username}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/send/post?id=${post.id}`} children={<SendIcon />} />
          <Link to={`/save?id=${post.id}`} children={<SaveIcon />} />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <ToggleSettings className="h-[24px] w-[24px]" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 rounded-box z-[1] w-40 p-2 shadow"
            >
              {post.creatorOfPost.username ==
                localStorage.getItem("username") && (
                <li>
                  <button
                    onClick={() => {
                      (
                        document.getElementById(
                          "delete_post_modal"
                        ) as HTMLDialogElement
                      ).showModal();
                    }}
                  >
                    Delete Post
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        <DialogBox
          uid="delete_post_modal"
          title="Delete Post"
          description="Are you sure you want to delete your post? It cannot be undone!"
        >
          <button
            className="btn btn-error text-base-100"
            onClick={async () => {}}
          >
            Delete Post
          </button>
        </DialogBox>
      </div>
      <img
        src={post.url}
        alt=""
        className="max-h-[520px] min-h-[219px] object-scale-down rounded-sm bg-base-200"
      />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-sm">
            <LikeForm />
            <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-1">
              <CommentIcon width="20" height="20" />
              <span className="text-xs">{post.comments.length}</span>
            </button>
          </div>
          <div
            className="px-1 py-1 border-[1px] border-[#EC61C5] bg-[#EC61C5] bg-opacity-35 m-2 rounded-lg text-xs"
            children={(post!.visibility![0] as string) ?? ""}
          />
        </div>
        {post.description && (
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="my-2"
            children={
              <div
                className={`text-start ${
                  seeMore ? "" : "line-clamp-2"
                } font-light text-sm dark:text-white`}
                children={post.description}
              />
            }
          />
        )}
      </div>
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden rounded-box bg-primary/5 dark:bg-primary/10 p-4"
          >
            <CommentInputProvider>
              <CommentProvider params={param}>
                <CommentList showHeader={false} />
              </CommentProvider>
            </CommentInputProvider>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SinglePost;
