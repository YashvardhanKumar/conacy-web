import { Comment } from "../../../../gql/graphql";
import person from "../../../../assets/person.png";
import { Suspense, useEffect, useState } from "react";
import { graphql } from "../../../../gql";
import { useLazyQuery, useMutation } from "@apollo/client";
export const getPostComment = graphql(/* GraphQL */ `
  query PostCommentsByID($cid: ID!) {
    comments(
      where: { id: $cid }
      options: { sort: { createdAt: DESC, updatedAt: DESC } }
    ) {
      replies {
        id
        text
        indent
        createdAt
        updatedAt
        author {
          id
          name
          email
          username
          dob
          createdAt
          updatedAt
        }
        likes {
          id
          name
          email
          username
          dob
          createdAt
          updatedAt
        }
        commentOfPost {
          id
          url
          description
          visibility
          createdAt
          updatedAt
        }
        replies {
          id
          text
          indent
          createdAt
          updatedAt
        }
        replyOfComment {
          id
          text
          createdAt
          updatedAt
          author {
            id
            name
            email
            username
            dob
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`);

const likeComment = graphql(/* GraphQL */ `
  mutation LikeComment($username: ID!, $cid: ID!) {
    updateComments(
      where: { id: $cid }
      update: {
        likes: { connect: { where: { node: { username: $username } } } }
      }
    ) {
      comments {
        id
        text
        indent
        createdAt
        updatedAt
      }
    }
  }
`);

const commentSubscription = graphql(/*graphql*/ `
  subscription ReplyCommentRelationshipCreated {
    commentCreated {
      event
      timestamp
      createdComment {
        id
        text
        createdAt
        updatedAt
      }
    }
  }
`);

type CommentTileProps = {
  comment: Comment;
  setReplier: React.Dispatch<
    React.SetStateAction<{
      username: string;
      cid: string;
      indent: number;
    } | null>
  >;
  inputRef: React.MutableRefObject<HTMLDivElement | null>;
  pointerRef: React.MutableRefObject<HTMLInputElement | null>;
};

const CommentTile: React.FC<CommentTileProps> = ({
  comment,
  setReplier,
  inputRef,
  pointerRef,
}) => {
  const [showReplies, setShowReplies] = useState(false);
  const [like, setLike] = useState(false);
  const [getPost, { data, subscribeToMore }] = useLazyQuery(getPostComment, {
    variables: { cid: comment.id },
  });
  const [likeCommentFunc] = useMutation(likeComment);
  useEffect(() => {
    setLike(
      comment.likes?.filter(
        (like) => like.username == localStorage.getItem("username")
      ).length != 0 ?? false
    );
    pointerRef.current?.focus({ preventScroll: true });
    subscribeToMore({
      document: commentSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const d = subscriptionData.data.commentCreated.createdComment;
        return Object.assign({}, prev, {
          comments: [d, ...prev.comments],
          // posts: [newFeedItem, ...prev.posts[0].comments],
        });
      },
    });
  });

  return (
    <Suspense fallback={<CommentTileSkeleton />}>
      <div key={comment.id} className="flex w-full h-full">
        <div className="w-full h-full">
          <div
            key={comment.id}
            className="flex p-1 justify-between w-full"
            children={
              <div className="flex flex-col">
                <div className="grid grid-cols-[24px_minmax(0,1fr)] items-center xs:grid-cols-[32px_minmax(0,1fr)]">
                  <img
                    src={person}
                    alt=""
                    height={36}
                    className="w-8 h-8 p-1 rounded-full object-cover"
                  />
                  <div
                    className="px-2 text-web-color"
                    children={comment?.author?.username ?? ""}
                  />
                </div>

                <div className="grid grid-cols-[24px_1fr] w-full xs:grid-cols-[32px_1fr] text-sm text-start justify-self-start relative group">
                  <div
                    className="group absolute top-0 left-0 bottom-0 w-6 xs:w-8 flex justify-center items-center z-0 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => setShowReplies(!showReplies)}
                  >
                    <div className="w-[1px] h-full group-hover:bg-base-300 bg-gray-300" />
                  </div>
                  <div className="contents">
                    <div />
                    <div className="px-2 inline-flex gap-1 w-full">
                      {comment?.replyOfComment && (
                        <div
                          className=" font-bold"
                          children={`@${
                            comment?.replyOfComment!.author.username
                          }`}
                        />
                      )}

                      <div children={comment.text} />
                    </div>
                  </div>
                  <div className="contents">
                    <div />
                    <div className="inline-flex px-1">
                      <motion.button
                        className="text-gray-400 text-xs p-1 w-fit inline-flex gap-0.5 items-center "
                        onClick={async () => {
                          if(like) {

                          } else {
                            await likeCommentFunc({
                              variables: {
                                username: localStorage?.getItem("username") ?? "",
                                cid: comment.id,
                              },
                            });
                          }
                          setLike(!like);
                          
                        }}
                      >
                        <Like size={18} liked={like} />
                        <div children={comment.likes.length}/>
                      </motion.button>
                      <button
                        onClick={() => {
                          inputRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "nearest",
                          });

                          setReplier({
                            username: comment.author.username,
                            cid: comment.id,
                            indent: comment.indent + 1,
                          });
                        }}
                        className=" text-gray-400 text-xs w-fit p-1"
                        children="Reply"
                      />
                      {(comment.author.username ==
                        localStorage?.getItem("username") ??
                        "") && (
                        <button
                          className=" text-gray-400 text-xs w-fit p-1"
                          children="Delete"
                        />
                      )}
                      {comment.replies && comment.replies.length > 0 && (
                        <button
                          onClick={async () => {
                            setShowReplies(!showReplies);
                            await getPost({
                              variables: {
                                cid: comment.id,
                              },
                            });
                          }}
                          className=" text-gray-400 text-xs w-fit p-1"
                          children={
                            showReplies
                              ? "Hide replies"
                              : `Show replies (${comment.replies.length})`
                          }
                        />
                      )}
                    </div>
                  </div>
                  {showReplies && (
                    <div
                      className="contents border-gray-300"
                      children={data?.comments[0].replies?.map((reply) => (
                        <>
                          <div
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
                          <CommentTile
                            key={reply.id}
                            comment={reply as Comment}
                            setReplier={setReplier}
                            inputRef={inputRef}
                            pointerRef={pointerRef}
                          />
                        </>
                      ))}
                    />
                  )}
                </div>
              </div>
            }
          />
        </div>
      </div>
    </Suspense>
  );
};

export default CommentTile;

import React from "react";
import Like from "../../../../assets/Icons/Like";
import { motion } from "framer-motion";

export const CommentTileSkeleton = () => {
  return (
    <div
      className="flex w-full flex-col gap-4 p-3"
      children={
        <div className="flex items-center gap-4 w-full">
          <div className="skeleton h-6 w-6 shrink-0 rounded-full" />
          <div className="flex flex-col gap-2 w-full">
            <div className="skeleton h-3 w-1/3" />
            <div className="skeleton h-3 w-3/4" />
          </div>
        </div>
      }
    />
  );
};
