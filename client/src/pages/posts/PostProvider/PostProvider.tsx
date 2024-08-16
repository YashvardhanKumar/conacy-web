import { createContext, Suspense, useContext, useEffect } from "react";
import { graphql } from "../../../gql";
import { useSuspenseQuery } from "@apollo/client";
import { PostContextProps, PostProps } from "./types";
import { Post } from "../../../gql/graphql";
import LoadingSpinner from "../../../components/LoadingSpinner";

export const getPosts = graphql(/* GraphQL */ `
  query Posts2 {
    posts(options: { sort: {createdAt: DESC}}) {
        id
        createdAt
    }
  }
`);

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error(
      `${usePostContext.name} must be used within a ${PostProvider.name}`
    );
  }
  return context;
};

const PostProvider: React.FC<PostProps> = ({ children }) => {

  const { data } = useSuspenseQuery(getPosts);
  return (
    <Suspense
      fallback={<LoadingSpinner />}
      children={
        <PostContext.Provider
          value={{ posts: data.posts as Post[] }}
          children={children}
        />
      }
    />
  );
};

export default PostProvider;
