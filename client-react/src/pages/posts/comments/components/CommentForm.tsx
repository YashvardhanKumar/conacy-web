import React, { useState } from "react";
import { graphql } from "../../../../gql";
import { useMutation } from "@apollo/client";
import person from "../../../../assets/person.png";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import CircularLoader from "../../../../components/CircularLoader";

const createComment = graphql(/* GraphQL */ `
  mutation CreatePostComments($username: ID!, $comment: String!, $pid: ID!) {
    createComments(
      input: {
        text: $comment
        author: { connect: { where: { node: { username: $username } } } }
        commentOfPost: { connect: { where: { node: { id: $pid } } } }
      }
    ) {
      comments {
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
      }
    }
  }
`);

const commentReplyMutation = graphql(/*graphql*/ `
  mutation CreateComments(
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
        }
        replies {
          id
          text
          createdAt
          updatedAt
        }
      }
    }
  }
`);

type CommentFormProps = {
  replier: { username: string; cid: string; indent: number } | null;
  setReplier: React.Dispatch<
    React.SetStateAction<{
      username: string;
      cid: string;
      indent: number;
    } | null>
  >;
  pointerRef: React.MutableRefObject<HTMLInputElement | null>;
};

const CommentForm: React.FC<CommentFormProps> = ({
  replier,
  setReplier,
  pointerRef,
}) => {
  const params = useParams();

  const [createCom, { loading: addLoad }] = useMutation(createComment);
  const [createReplyCom, { loading: addReplyLoad }] =
    useMutation(commentReplyMutation);
  const [comment, setComment] = useState("");

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

        await createReplyCom({
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
        await createCom({
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

  // const [replier, setReplier] = useState<string | null>();
  // const [replyID, setReplyID] = useState<string | null>();
  return (
    <>
      <img
        src={person}
        alt=""
        height={36}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex max-_390:flex-col w-full _390:gap-2">
        {replier && replier?.username.length && (
          <div className="flex max-_390:inline-flex bg-base-200 p-1 rounded-md flex-col _390:max-w-[100px] w-fit">
            <div className="flex justify-between items-start">
              <div className=" text-xs text-gray-400">Reply to</div>
              <motion.button
                name="likes"
                type="button"
                whileTap={{
                  scale: [null, 0.2, 0.3],
                }}
                transition={{ duration: 1 }}
                onClick={() => {
                  if (replier?.username.length) {
                    setReplier(null);
                    // setReplyID(null);
                  }
                }}
                className="dark:bg-gray-700 bg-gray-200 p-0.5 text-xs -top-1.5 right-0 rounded-full"
                children={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={14}
                    viewBox="0 -960 960 960"
                    width={14}
                    className="*:fill-gray-400"
                    children={
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    }
                  />
                }
              />
            </div>

            <div className="text-xs overflow-clip overflow-ellipsis">
              @{replier.username}
            </div>
          </div>
        )}
        <div className="h-10 w-[1px] bg-slate-400 max-_390:hidden" />

        <input
          type="text"
          ref={pointerRef}
          value={comment}
          className="bg-transparent h-10 outline-none w-full"
          placeholder="Type Comments"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button
        className="text-web-color-2"
        onClick={handleClick}
        children={addLoad || addReplyLoad ? <CircularLoader /> : "Post"}
      />
    </>
  );
};

export default CommentForm;
