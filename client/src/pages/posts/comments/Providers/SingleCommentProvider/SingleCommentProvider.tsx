import { createContext, useContext, useEffect, useRef, useState } from "react";
import { graphql } from "../../../../../gql";
import { useMutation, useQuery } from "@apollo/client";
import { Comment } from "../../../../../gql/graphql";
import { SingleCommentContextProps, SingleCommentProps } from "./types";
import { CommentTileSkeleton } from "../../../components/Skeleton";
import { useNavigate, useParams } from "react-router-dom";
import { useCommentInputContext } from "../CommentInputProvider/CommentInputProvider";

const likeComment = graphql(/* GraphQL */ `
  mutation LikeComment($username: ID!, $cid: ID!) {
    updateUsers(
      where: {username: $username}
      connect: {
        likedComments: {
          where: { node: { id: $cid } }
        }
      }
    ) {
      users {
        likedComments {
          id
        }
      }
    }
  }
`);

const unlikeComment = graphql(/* GraphQL */ `
  mutation unLikeComment($username: ID!, $cid: ID!) {
    updateUsers(
      where: {username: $username}
      disconnect: {
        likedComments: {
          where: { node: { id: $cid } }
        }
      }
    ) {
      users {
        likedComments {
          id
        }
      }
    }
  }
`);

const deleteComment = graphql(`
  mutation DeleteComments($cid: ID!) {
    deleteComments(
      where: { OR: [{ id: $cid }, { parentsOfComment_INCLUDES: $cid }] }
    ) {
      bookmark
      nodesDeleted
      relationshipsDeleted
    }
  }
`);

const getSingleComment = graphql(/*graphql*/ `
  query SingleComments2($cid: ID!) {
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
      replyOfComment {
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
      }
    }
  }
`);
const getRepliesQuery = graphql(`
  query Comments($cid: ID!) {
    comments(where: { replyOfComment: { id: $cid } }) {
      id
      text
      indent
      createdAt
      updatedAt
    }
  }
`);
// const commentSubscription = graphql(/*graphql*/ `
//   subscription ReplyCommentRelationshipCreated($uid: ID!) {
//     commentRelationshipCreated(
//       where: { createdRelationship: { replyOfComment: { node: { id: $uid } } } }
//     ) {
//       event
//       timestamp
//       relationshipFieldName
//       comment {
//         id
//         text
//         indent
//         createdAt
//         updatedAt
//       }
//       createdRelationship {
//         replyOfComment {
//           node {
//             id
//             text
//             indent
//             createdAt
//             updatedAt
//           }
//         }
//       }
//     }
//   }
// `);

// const commentLikeRelnSubs = graphql(/*graphql*/ `
//   subscription ReplyLikeCommentRelationshipDeleted($username: ID!) {
//     commentRelationshipCreated(
//       where: {
//         createdRelationship: { likes: { node: { username: $username } } }
//       }
//     ) {
//       event
//       timestamp
//       relationshipFieldName
//       comment {
//         id
//         text
//         indent
//         createdAt
//         updatedAt
//       }
//       createdRelationship {
//         likes {
//           node {
//             id
//           }
//         }
//       }
//     }
//   }
// `);
// const commentunLikeRelnSubs = graphql(/*graphql*/ `
//   subscription ReplyunLikeCommentRelationshipDeleted($username: ID!) {
//     commentRelationshipDeleted(
//       where: {
//         deletedRelationship: { likes: { node: { username: $username } } }
//       }
//     ) {
//       event
//       timestamp
//       relationshipFieldName
//       comment {
//         id
//         text
//         indent
//         createdAt
//         updatedAt
//       }
//       deletedRelationship {
//         likes {
//           node {
//             id
//           }
//         }
//       }
//     }
//   }
// `);
// const commentDeleteSub = graphql(`
//   subscription CommentDeleted {
//     commentDeleted {
//       event
//       timestamp
//       deletedComment {
//         id
//         text
//         indent
//         parentsOfComment
//         createdAt
//         updatedAt
//       }
//     }
//   }
// `);

const SingleCommentContext = createContext<
  SingleCommentContextProps | undefined
>(undefined);

export const useSingleCommentContext = () => {
  const context = useContext(SingleCommentContext);
  if (!context) {
    throw new Error(
      `${useSingleCommentContext.name} must be used within a SingleCommentProvider`
    );
  }
  return context;
};

const SingleCommentProvider: React.FC<SingleCommentProps> = ({
  children,
  id,
}) => {
  const nav = useNavigate();
  const commentRef = useRef(null);
  const { cid } = useParams();
  const { pointerRef, setReplier, inputRef } = useCommentInputContext();
  const { data } = useQuery(getSingleComment, {
    variables: {
      cid: id,
    },
  });
  const { data: replyList } = useQuery(
    getRepliesQuery,
    {
      variables: {
        cid: id,
      },
      pollInterval: 10000
    }
  );
  const [showReplies, setShowReplies] = useState(false);
  const [like, setLike] = useState(false);
  const [likesNo, setLikesNo] = useState(0);
  const [likeCommentFunc] = useMutation(likeComment, {
    refetchQueries: [
      getRepliesQuery,
      getSingleComment
    ]
  });
  const [unlikeCommentFunc] = useMutation(unlikeComment, {
    refetchQueries: [
      getRepliesQuery,
      getSingleComment
    ]
  });
  const [deleteCommentFunc] = useMutation(deleteComment, {
    refetchQueries: [
      getRepliesQuery,
      'PostComments'
    ]
  });
  const toggleReplies = () => {
    if (
      !showReplies &&
      data?.comments[0].indent &&
      data.comments[0].indent % 3 == 0
    ) {
      if (cid) {
        nav(`../${id}`, { relative: "path" });
      } else {
        nav(`./${id}`, { relative: "path" });
      }
    }
    setShowReplies(!showReplies);
  };

  useEffect(() => {
    // pointerRef.current?.focus({ preventScroll: true });
  });

  useEffect(() => {
    setLikesNo(data?.comments[0].likes.length ?? 0);
    if (!data) return;
    setLike(
      data.comments[0]?.likes?.filter(
        (like) => like.username == localStorage.getItem("username")
      ).length != 0
    );
  }, [data?.comments[0].likes]);

  const handleDeleteComment = async () => {
    deleteCommentFunc({
      variables: {
        cid: id,
      },
    });
  };
  const toggleCommentLike = async () => {
    if (like) setLikesNo(likesNo - 1);
    else setLikesNo(likesNo + 1);
    setLike(!like);
    if (!like) {
      likeCommentFunc({
        variables: {
          username: localStorage?.getItem("username") ?? "",
          cid: id,
        },
      });
    } else {
      unlikeCommentFunc({
        variables: {
          username: localStorage?.getItem("username") ?? "",
          cid: id,
        },
      });
    }
  };
  const handleReplies = () => {
    inputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    pointerRef.current?.focus({ preventScroll: true });

    setReplier({
      username: data!.comments[0].author.username,
      text: data!.comments[0].text,
      commentRef,
      cid: id,
      indent: data!.comments[0].indent + 1,
      parentsOfComment: [...data!.comments[0].parentsOfComment, id],
    });
  };

  if (!data) {
    return <CommentTileSkeleton />;
  }
  return (
    <SingleCommentContext.Provider
      value={{
        showReplies,
        comment: data.comments[0] as Comment,
        replyList: (replyList?.comments ?? null) as Comment[] | null,
        commentRef,
        toggleCommentLike,
        toggleReplies,
        handleReplies,
        handleDeleteComment,
        like,
        likesNo
      }}
      children={children}
    />
  );
};

export default SingleCommentProvider;
