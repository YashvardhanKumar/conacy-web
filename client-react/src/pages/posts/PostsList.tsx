import { useEffect } from "react";
import { Post } from "../../gql/graphql";
import PostCardImage from "./components/PostCardImage";
import { useSuspenseQuery } from "@apollo/client";
import { graphql } from "../../gql";

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

const PostsList = () => {
  const { data, subscribeToMore } = useSuspenseQuery(getPosts);
  useEffect(() => {
    subscribeToMore({
      document: subsPostCreate,
      updateQuery: (prev, { subscriptionData }) => {
        // console.log(subscriptionData.data.postCreated);
        
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
  return (
    <>
      {data?.posts.length ? (
        data?.posts.map(
          (e, i) => e && <PostCardImage {...(e as Post)} key={`posts-${i}`} />
        )
      ) : (
        <div className="content-center">No Posts Found</div>
      )}
    </>
  );
};

export default PostsList;
