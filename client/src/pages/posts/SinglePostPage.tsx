import { useEffect, useState } from "react";
import SinglePostProvider, {
  useSinglePostContext,
} from "./SinglePostProvider/SinglePostProvider";
import CommentButton from "./components/CommentButton";
import LikeForm from "./components/LikeForm";
import { DeletePostDialogBox } from "./components/PostCardImage";
import CommentIcon from "../../assets/Icons/CommentIcon";
import SendIcon from "../../assets/Icons/SendIcon";
import SaveIcon from "../../assets/Icons/SaveIcon";
import ToggleSettings from "../../assets/Icons/ToggleSettings";
import { Link, useParams } from "react-router-dom";
import person from "../../assets/avatar.png";

const SinglePostPage = () => {
  const param = useParams();
  return (
    <SinglePostProvider
      id={param.pid ?? ""}
      children={
        <div
          className="w-full flex justify-center p-10"
          children={<SinglePost />}
        />
      }
    />
  );
};
export default SinglePostPage;

import React from "react";
import DialogBox from "../../components/DialogBox";

const SinglePost = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { post } = useSinglePostContext();
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    console.log(post.visibility);
  });
  return (
    <div className="w-[640px] max-sm:w-[95vw] flex flex-col items-center content-center">
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
            <div children={post.creatorOfPost.name} />
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
              {/* <li><a>Item 2</a></li> */}
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
            {/* <CommentButton /> */}
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
        <Link
          to={"comments"}
          className="rounded-md dark:bg-base-200 bg-blue-50 flex flex-col gap-3 p-3"
        >
          <div className="inline-flex items-center gap-1.5 ">
            <CommentIcon width="20" height="20" />
            <span children="Comments" />
            <span
              className="text-gray-400 text-sm"
              children={post.comments.length}
            />
          </div>

          {post.comments.length ? (
            <div
              key={post.comments[0].id}
              className="flex flex-col justify-between items-start"
              children={
                <div className="flex">
                  <img
                    src={person}
                    alt=""
                    height={36}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="flex flex-col text-sm text-start justify-self-start">
                    <div
                      className="px-2 text-web-color"
                      children={`@${post.comments[0].author.username}`}
                    />
                    <div className="px-2" children={post.comments[0].text} />
                  </span>
                </div>
              }
            />
          ) : (
            <div className="text-sm" children="No Comments Yet" />
          )}
        </Link>
      </div>
    </div>
  );
};
