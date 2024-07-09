import { createContext, useContext, useEffect } from "react";
import { graphql } from "../../../gql";
import { useSuspenseQuery } from "@apollo/client";

export const getPosts = graphql(/* GraphQL */ `
  query Posts {
    posts {
      id
      url
      description
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
          text
        }
      }
    }
  }
`);
export const subsPostCreate = graphql(/* graphql */ `
  subscription PostCreated {
    postCreated {
      event
      timestamp
      createdPost {
        id
        url
        description
        visibility
        createdAt
        updatedAt
      }
    }
  }
`);

export const subsPostUpdate = graphql(/* graphql */ `
  subscription PostUpdated {
    postUpdated {
      event
      timestamp
      updatedPost {
        id
        url
        description
        visibility
        createdAt
        updatedAt
      }
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
  const { data, subscribeToMore } = useSuspenseQuery(getPosts);
  useEffect(() => {
    subscribeToMore({
      document: subsPostCreate,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newFeedItem = subscriptionData.data.postCreated.createdPost;
        return Object.assign({}, prev, {
          posts: [newFeedItem],
        });
      },
    });
    subscribeToMore({
      document: subsPostUpdate,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newFeedItem = subscriptionData.data.postUpdated.updatedPost;
        return Object.assign({}, prev, {
          posts: [newFeedItem],
        });
      },
    });
  });
  return <PostContext.Provider value={{posts: data.posts}} children={children} />;
};

export default PostProvider;
