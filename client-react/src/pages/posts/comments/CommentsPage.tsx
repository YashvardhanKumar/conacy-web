import { useQuery } from "@apollo/client";
import { graphql } from "../../../gql";
import { Suspense, useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import person from "../../../assets/person.png";
import LoadingLogo from "../../../components/LoadingLogo";
import CommentForm from "./components/CommentForm";
import CommentTile, { CommentTileSkeleton } from "./components/CommentTile";
import { Comment } from "../../../gql/graphql";

export const getPostComments = graphql(/* GraphQL */ `
  query PostComments($username: ID!, $pid: ID!) {
    comments(
      where: {
        author: { username: $username }
        commentOfPost: { id: $pid }
        indent: 0
      }
      options: { sort: { createdAt: DESC, updatedAt: DESC } }
    ) {
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
      replies {
        id
        text
        indent
        createdAt
        updatedAt
      }
    }
  }
`);

export const getPostCount = graphql(/* GraphQL*/ `
  query CommentsConnection($username: ID!, $pid: ID!) {
    commentsConnection(
      where: { author: { username: $username }, commentOfPost: { id: $pid } }
    ) {
      totalCount
    }
  }
`);

const commentSubscription = graphql(/*graphql*/ `
  subscription PostCommentRelationshipCreated {
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

const getPostsForComment = graphql(`
  query PostsComment($pid: ID!) {
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

const CommentsPage = () => {
  const params = useParams();
  const inputRef = useRef<HTMLDivElement | null>(null);
  const pointerRef = useRef<HTMLInputElement | null>(null);
  const {
    data: comments,
    loading: postLoading,
    subscribeToMore,
  } = useQuery(getPostComments, {
    variables: {
      pid: params.pid as string,
      username: localStorage.getItem("username") ?? "",
    },
  });
  const { data: ccount, loading: cntLoading } = useQuery(getPostCount, {
    variables: {
      pid: params.pid as string,
      username: localStorage.getItem("username") ?? "",
    },
  });
  const { data, loading: commentLoading } = useQuery(getPostsForComment, {
    variables: {
      pid: params.pid as string,
    },
  });
  const [replier, setReplier] = useState<{
    username: string;
    cid: string;
    indent: number;
  } | null>(null);

  useEffect(() => {
    // console.log(comments?.comments);

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
  }, [comments]);
  if (localStorage?.getItem("isAuthenticated") != "Yes") {
    return <Navigate to={"/"} />;
  } else if (cntLoading || commentLoading || postLoading) {
    return <LoadingLogo />;
  }
  return (
    <div className="flex md:ml-20 max-md:my-16 justify-center w-screen scroll-m-0 box-border p-2">
      <div className="flex flex-col  w-full md:w-3/5 lg:w-2/5 max-_390:w-[95vw]">
        <div className="flex items-center gap-3 p-3 border-b-[0.5px] border-t-[0.5px] border-slate-400">
          <div className="sm:h-14 sm:w-14 w-10 h-10">
            <img
              src={person}
              alt=""
              className="rounded-full object-cover h-full w-full bg-white"
            />
          </div>
          <div className="flex flex-col sm:gap-1">
            <div className="sm:text-xl text-lg">
              {data!.posts[0].creatorOfPost.name}
            </div>
            <div className="sm:text-md text-sm text-gray-400">
              {"@" + data!.posts[0].creatorOfPost.username}
            </div>
          </div>
        </div>
        <img
          src={data?.posts[0].url}
          alt=""
          className="max-h-[520px] object-scale-down"
        />
        <div
          ref={inputRef}
          className="bg-transparent border-b-[0.5px] border-t-[0.5px] border-slate-400 flex items-center p-3 gap-3"
        >
          <CommentForm
            pointerRef={pointerRef}
            replier={replier}
            setReplier={setReplier}
          />
        </div>
        <div className="p-4 text-xl ">
          Comments ({ccount!.commentsConnection.totalCount})
        </div>
        <Suspense
          fallback={<CommentTileSkeleton />}
          children={comments?.comments.map((comment) => (
            <CommentTile
              key={comment.id}
              comment={comment as Comment}
              setReplier={setReplier}
              inputRef={inputRef}
              pointerRef={pointerRef}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default CommentsPage;
