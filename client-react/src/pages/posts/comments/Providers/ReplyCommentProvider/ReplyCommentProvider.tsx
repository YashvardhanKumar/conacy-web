import { createContext, useContext, useEffect, useRef, useState } from "react";
import { graphql } from "../../../../../gql";
import { useMutation, useQuery } from "@apollo/client";
import { Comment, Post } from "../../../../../gql/graphql";

const commentSubscription = graphql(/*graphql*/ `
  subscription CommentCreated {
    commentCreated {
      event
      timestamp
      createdComment {
        id
        text
        indent
        parentsOfComment
        createdAt
        updatedAt
      }
    }
  }
`);
const commentDeleteSub = graphql(`
  subscription CommentDeleted {
    commentDeleted {
      event
      timestamp
      deletedComment {
        id
        text
        indent
        parentsOfComment
        createdAt
        updatedAt
      }
    }
  }
`);

const commentReplyMutation = graphql(/*graphql*/ `
  mutation CreateComments(
    $comment: String!
    $indent: Int!
    $parentsOfComment: [ID!]!
    $username: ID!
    $pid: ID!
    $cid: ID
  ) {
    createComments(
      input: {
        text: $comment
        indent: $indent
        parentsOfComment: $parentsOfComment
        author: { connect: { where: { node: { username: $username } } } }
        commentOfPost: { connect: { where: { node: { id: $pid } } } }
        replyOfComment: { connect: { where: { node: { id: $cid } } } }
      }
    ) {
      comments {
        id
      }
    }
  }
`);
const getSingleComment = graphql(/*graphql*/ `
  query CommentReply($cid: ID!) {
    comments(where: { id: $cid }) {
      id
      text
      indent
      parentsOfComment
      createdAt
      updatedAt
      likes {
        id
        name
        email
        username
        dob
        createdAt
        updatedAt
      }
      author {
        id
        name
        email
        username
        dob
        createdAt
        updatedAt
      }
      replies {
        id
      }
    }
  }
`);
const ReplyCommentContext = createContext<ReplyCommentContextProps | undefined>(
  undefined
);

export const useReplyCommentContext = () => {
  const context = useContext(ReplyCommentContext);
  if (!context) {
    throw new Error(
      `${useReplyCommentContext.name} must be used within a CommentProvider`
    );
  }
  return context;
};

const ReplyCommentProvider: React.FC<ReplyCommentProps> = ({ children, params }) => {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLInputElement | null>(null);
  const { data, subscribeToMore } = useQuery(getSingleComment, {
    variables: {
      cid: params?.cid ?? null,
    },
  });
  const [replier, setReplier] = useState<ReplyReplierProps | null>(null);
  const ccrm = useMutation(commentReplyMutation);
  const [comment, setComment] = useState("");

  const handleCancelReply = () => {
    if (replier?.username.length) {
      setReplier(null);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);

  const handleClick = async () => {
    console.log(comment);

    if (comment.trim().length) {
      console.log({
        username: localStorage.getItem("username") ?? "",
        comment: comment.trim(),
        cid: replier?.cid as string,
        cuser: replier?.username as string,
        pid: params.pid!,
      });
      await ccrm[0]({
        variables: {
          username: localStorage.getItem("username") ?? "",
          comment: comment.trim(),
          pid: params.pid as string,
          cid: replier?.cid ?? null,
          indent: replier?.indent ?? 0,
          parentsOfComment: replier?.parentsOfComment ?? [],
        },
      });
      // }
      setComment("");
      setReplier(null);
    }
  };

  useEffect(() => {
    if (!data) return;
    subscribeToMore({
      document: commentSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const d = subscriptionData.data.commentCreated;
        console.log(d);
        return Object.assign({}, prev, {
          comments: [d, ...prev.comments],
        });
      },
    });
    subscribeToMore({
      document: commentDeleteSub,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const newFeedItem = subscriptionData.data.commentDeleted.deletedComment;
        console.log(newFeedItem);
        return Object.assign({}, prev, {
          comments: [...prev.comments.filter((p) => p.id !== newFeedItem.id)],
        });
      },
    });
  }, [data]);
  if (!data) {
    return <CommentPageSkeleton />;
  }
  return (
    <ReplyCommentContext.Provider
      value={{
        inputRef,
        pointerRef,
        comment: data.comments[0] as Comment,
        replier,
        reply: comment,
        ccrm,
        setReplier,
        handleCancelReply,
        handleCommentChange,
        handleClick,
      }}
      children={children}
    />
  );
};

export default ReplyCommentProvider;

import React from "react";
import { CommentTileSkeleton } from "../../../components/Skeleton";
import { ReplyCommentContextProps, ReplyCommentProps, ReplyReplierProps } from "./types";

export const CommentPageSkeleton = () => {
  return (
    <div className="flex flex-col  w-full md:w-3/5 lg:w-2/5 max-_390:w-[95vw]">
      <div className="flex items-center gap-3 w-full p-3">
        <div className="skeleton sm:h-14 sm:w-14 w-10 h-10" />
        <div className="flex flex-col w-full sm:gap-1">
          <div className="skeleton w-1/2 h-5" />
          <div className="skeleton h-4 w-1/2"></div>
        </div>
      </div>
      <div className="p-3">
        <div className="skeleton h-[520px] w-full" />
      </div>
      <div className="p-3">
        <div className="skeleton w-full flex items-center p-3 h-10" />
      </div>
      <div className="p-3">
        <div className="skeleton p-4 w-40 h-5" />
      </div>
      <CommentTileSkeleton />
      <CommentTileSkeleton />
      <CommentTileSkeleton />
    </div>
  );
};
