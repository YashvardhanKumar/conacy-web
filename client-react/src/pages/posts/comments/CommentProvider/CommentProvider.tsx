import { createContext, useContext, useEffect, useRef, useState } from "react";
import { graphql } from "../../../../gql";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

const getPostComments = graphql(/* GraphQL */ `
  query PostComments2($username: ID!, $pid: ID!) {
    comments(
      where: {
        author: { username: $username }
        commentOfPost: { id: $pid }
        indent: 0
      }
      options: { sort: { createdAt: DESC, updatedAt: DESC } }
    ) {
      id
    }
  }
`);

const getPostCount = graphql(/* GraphQL*/ `
  query CommentsConnection2($username: ID!, $pid: ID!) {
    commentsConnection(
      where: { author: { username: $username }, commentOfPost: { id: $pid } }
    ) {
      totalCount
    }
  }
`);

const commentSubscription = graphql(/*graphql*/ `
  subscription PostCommentRelationshipCreated2 {
    commentCreated {
      event
      timestamp
      createdComment {
        id
      }
    }
  }
`);

const getPostsForComment = graphql(/* GraphQL */ `
  query PostsComment2($pid: ID!) {
    posts(where: { id: $pid }) {
      id
      url
      description
      visibility
      createdAt
      updatedAt
      creatorOfPost {
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
`);

const createComment = graphql(/* GraphQL */ `
  mutation CreatePostComments2($username: ID!, $comment: String!, $pid: ID!) {
    createComments(
      input: {
        text: $comment
        author: { connect: { where: { node: { username: $username } } } }
        commentOfPost: { connect: { where: { node: { id: $pid } } } }
      }
    ) {
      comments {
        id
      }
    }
  }
`);

const commentReplyMutation = graphql(/*graphql*/ `
  mutation CreateComments2(
    $username: ID!
    $cid: ID!
    $comment: String!
    $pid: ID!
    $cuser: ID!
    $indent: Int!
  ) {
    createComments(
      input: {
        replyOfComment: {
          connect: {
            where: { node: { id: $cid, author: { username: $cuser } } }
          }
        }
        author: { connect: { where: { node: { username: $username } } } }
        text: $comment
        indent: $indent
        commentOfPost: { connect: { where: { node: { id: $pid } } } }
      }
    ) {
      comments {
        id
      }
    }
  }
`);

const CommentContext = createContext<CommentContextProps | undefined>(
  undefined
);

export const useCommentContext = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error(
      `${useCommentContext.name} must be used within a CommentProvider`
    );
  }
  return context;
};

const CommentProvider: React.FC<CommentProps> = ({ children }) => {
  const params = useParams();
  const inputRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLInputElement | null>(null);
  const pcq = useQuery(getPostComments, {
    variables: {
      pid: params.pid as string,
      username: localStorage.getItem("username") ?? "",
    },
  });
  const pcntq = useQuery(getPostCount, {
    variables: {
      pid: params.pid as string,
      username: localStorage.getItem("username") ?? "",
    },
  });
  const pofc = useQuery(getPostsForComment, {
    variables: {
      pid: params.pid as string,
    },
  });
  const [replier, setReplier] = useState<ReplierProps | null>(null);
  const ccm = useMutation(createComment);
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
    if (comment.trim().length) {
      if (replier && replier?.username.length) {
        console.log({
          username: localStorage.getItem("username") ?? "",
          comment: comment.trim(),
          cid: replier.cid as string,
          cuser: replier.username as string,
          pid: params.pid!,
        });

        await ccrm[0]({
          variables: {
            username: localStorage.getItem("username") ?? "",
            comment: comment.trim(),
            cid: replier.cid as string,
            cuser: replier.username as string,
            pid: params.pid!,
            indent: replier.indent as number,
          },
        });
        setComment("");
        setReplier(null);
        // setReplyID(null);
      } else {
        await ccm[0]({
          variables: {
            username: localStorage.getItem("username") ?? "",
            comment: comment,
            pid: params.pid as string,
          },
        });
      }
      setComment("");
    }
  };

  useEffect(() => {
    pcq.subscribeToMore({
      document: commentSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const d = subscriptionData.data.commentCreated.createdComment;
        return Object.assign({}, prev, {
          comments: [d, ...prev.comments],
        });
      },
    });
    // subscribeToMore({
    //   document: subsPostUpdate,
    //   updateQuery: (prev, { subscriptionData }) => {
    //     if (!subscriptionData.data) return prev;
    //     const newFeedItem = subscriptionData.data.postUpdated.updatedPost;
    //     return Object.assign({}, prev, {
    //       posts: [...prev.posts],
    //     });
    //   },
    // });
  }, [pcq.data]);
  return (
    <CommentContext.Provider
      value={{
        inputRef,
        pointerRef,
        pcq,
        pofc,
        pcntq,
        replier,
        comment,
        ccm,
        handleCancelReply,
        handleCommentChange,
        handleClick,
      }}
      children={children}
    />
  );
};

export default CommentProvider;
