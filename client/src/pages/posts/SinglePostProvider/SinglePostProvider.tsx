import { useMutation, useQuery, useSuspenseQuery } from "@apollo/client";
import {
  createContext,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";
import { graphql } from "../../../gql";
import { SinglePostContextProps, SinglePostProps } from "./types";
import { Post } from "../../../gql/graphql";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { PostSkeleton } from "../components/Skeleton";

const singlePostQuery = graphql(/* graphql */ `
  query SinglePosts($pid: ID!) {
    posts(where: { id: $pid }) {
      id
      url
      description
      visibility
      creatorOfPost {
        id
        name
        email
        username
        dob
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
      comments {
        id
        text
        author {
          id
          name
          email
          username
          dob
        }
        replies {
          id
        }
      }
    }
  }
`);

const unLikeQuery = graphql(/* graphql */ `
  mutation UnLikeQuery($id: ID!, $username: ID!) {
    updateUsers(
      where: { username: $username }
      disconnect: { likedPosts: { where: { node: { id: $id } } } }
    ) {
      users {
        likedPosts {
          id
          url
          description
          visibility
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
    }
  }
`);

const likeQuery = graphql(/* graphql */ `
  mutation LikeQuery($id: ID!, $username: ID!) {
    updateUsers(
      where: { username: $username }
      connect: { likedPosts: { where: { node: { id: $id } } } }
    ) {
      users {
        likedPosts {
          id
          url
          description
          visibility
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
    }
  }
`);

const SinglePostContext = createContext<SinglePostContextProps | undefined>(
  undefined
);

export const useSinglePostContext = () => {
  const context = useContext(SinglePostContext);
  if (!context) {
    throw new Error(
      `${useSinglePostContext.name} must be used within a ${SinglePostProvider.name}`
    );
  }
  return context;
};

const SinglePostProvider: React.FC<SinglePostProps> = ({ children, id }) => {
  const [likeFunc] = useMutation(likeQuery);
  const [unlikeFunc] = useMutation(unLikeQuery);
  const spq = useQuery(singlePostQuery, {
    variables: {
      pid: id,
    },
  });
  const [liked, setLiked] = useState(false);
  const [likesNo, setLikesNo] = useState(0);
  async function handleLike() {
    if (liked) setLikesNo(likesNo - 1);
    else setLikesNo(likesNo + 1);
    setLiked(!liked);
    // console.log(liked);
    if (!liked) {
      await likeFunc({
        variables: {
          id: id,
          username: localStorage.getItem("username") ?? "",
        },
      });
    } else {
      await unlikeFunc({
        variables: {
          id: id,
          username: localStorage.getItem("username") ?? "",
        },
      });
    }
  }
  useEffect(() => {
    setLikesNo(spq.data?.posts[0].likes.length ?? 0);
    setLiked(
      spq.data?.posts[0].likes?.filter(
        (like) => like.username == localStorage.getItem("username")
      ).length != 0
    );
  }, [spq.data?.posts[0].likes]);
  if (spq.loading) return <LoadingSpinner />;
  return (
    <SinglePostContext.Provider
      value={{
        post: spq.data!.posts[0] as Post,
        likeFunc,
        unlikeFunc,
        liked,
        likesNo,
        handleLike,
      }}
      children={children}
    />
  );
};

export default SinglePostProvider;
