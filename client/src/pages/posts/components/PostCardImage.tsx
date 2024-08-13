import { useState } from "react";
import person from "../../../assets/person.png";
import { Link } from "react-router-dom";
import SaveIcon from "../../../assets/Icons/SaveIcon";
import SendIcon from "../../../assets/Icons/SendIcon";
import CommentIcon from "../../../assets/Icons/CommentIcon";
import LikeForm from "./LikeForm";
import CommentButton from "./CommentButton";
import SinglePostProvider, {
  useSinglePostContext,
} from "../SinglePostProvider/SinglePostProvider";

const PostCardImage = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { post } = useSinglePostContext();
  return (
    <SinglePostProvider
      id={post.id}
      children={
        <div className="w-[390px] max-_390:w-[95vw]">
          <div className="p-1 font-bold h-12 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 "
                children={
                  <img
                    src={person}
                    alt=""
                    height={36}
                    className="w-full h-8 rounded-md object-cover"
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
            </div>
          </div>
          <img
            src={post.url}
            alt=""
            className="w-[390px] max-h-[520px] min-h-[219px] object-scale-down rounded-sm bg-base-200"
          />
          <div className="w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-sm">
                <LikeForm />
                <CommentButton />
              </div>
              <div
                className="px-1 py-1 border-[1px] border-[#EC61C5] bg-[#EC61C5] bg-opacity-35 m-2 rounded-lg text-xs"
                children="Best Friend"
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
                    } font-light text-sm dark:text-gray-400`}
                    children={post.description}
                  />
                }
              />
            )}
            <div className="rounded-md dark:bg-base-300 bg-blue-50 flex flex-col gap-3 p-3">
              <div className="inline-flex items-center gap-1">
                <CommentIcon width="20" height="20" />
                <span children="Comments" />
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
                        <div
                          className="px-2"
                          children={post.comments[0].text}
                        />
                      </span>
                    </div>
                  }
                />
              ) : (
                <div className="text-sm" children="No Comments Yet" />
              )}
            </div>
          </div>
        </div>
      }
    />
  );
};

export default PostCardImage;
