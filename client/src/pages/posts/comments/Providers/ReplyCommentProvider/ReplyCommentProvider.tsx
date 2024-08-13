import { createContext, useContext, useEffect, useState } from "react";
import { graphql } from "../../../../../gql";
import { useMutation, useQuery } from "@apollo/client";
import { Comment } from "../../../../../gql/graphql";
import { CommentReplyPageSkeleton } from "../../../components/Skeleton";
import { ReplyCommentContextProps, ReplyCommentProps } from "./types";
import { useCommentInputContext } from "../CommentInputProvider/CommentInputProvider";

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
  const { inputRef, pointerRef, replier, setReplier } = useCommentInputContext();
  const { data, subscribeToMore } = useQuery(getSingleComment, {
    variables: {
      cid: params?.cid ?? null,
    },
  });
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
    return <CommentReplyPageSkeleton />;
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