import { FC, useEffect, useState } from "react";
import person from "../../../assets/person.png";
import { Link } from "react-router-dom";
import SaveIcon from "../../../assets/Icons/SaveIcon";
import SendIcon from "../../../assets/Icons/SendIcon";
import CommentIcon from "../../../assets/Icons/CommentIcon";
import LikeForm from "./LikeForm";
import { Post } from "../../../gql/graphql";
import CommentButton from "./CommentButton";

const PostCardImage: FC<Post> = ({ ...e }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div className="w-[390px] max-_390:w-[95vw]">
        <div className="p-1 font-bold h-12 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 ">
              <img
                src={person}
                alt=""
                height={36}
                className="w-full h-8 rounded-md object-cover"
              />
            </div>
            <div>
              <div>{e.creatorOfPost.name}</div>
              <div className=" text-xs text-gray-400">
                {"@" + e.creatorOfPost.username}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to={`/send/post?id=${e.id}`}>
              <SendIcon />
            </Link>
            <Link to={`/save?id=${e.id}`}>
              <SaveIcon />
            </Link>
          </div>
        </div>
        <img
          src={e.url}
          alt=""
          className="w-[390px] max-h-[520px] min-h-[219px] object-scale-down rounded-sm bg-base-200"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-sm">
              <LikeForm {...e} />
              <CommentButton {...e} />
            </div>
            <div className="px-1 py-1 border-[1px] border-[#EC61C5] bg-[#EC61C5] bg-opacity-35 m-2 rounded-lg text-xs">
              Best Friend
            </div>
          </div>
          {e.description && (
            <button onClick={() => setSeeMore(!seeMore)} className="my-2">
              <div
                className={`text-start ${
                  seeMore ? "" : "line-clamp-2"
                } font-light text-sm dark:text-gray-400`}
              >
                {e.description}
              </div>
            </button>
          )}
          <div className="rounded-md dark:bg-base-300 bg-blue-50 flex flex-col gap-3 p-3">
            <div className="inline-flex items-center gap-1">
              <CommentIcon width="20" height="20" />
              <span>Comments</span>
            </div>

            {e.comments.length ? (
              <div
                key={e.comments[0].id}
                className="flex flex-col justify-between items-start"
              >
                <div className="flex">
                  <img
                    src={person}
                    alt=""
                    height={36}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="flex flex-col text-sm text-start justify-self-start">
                    <div className="px-2 text-web-color">
                      @{e.comments[0].author.username}
                    </div>
                    <div className="px-2">{e.comments[0].text}</div>
                    
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-sm">No Comments Yet</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCardImage;
