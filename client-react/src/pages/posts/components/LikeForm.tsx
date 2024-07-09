import  {useEffect, useState } from "react";
import { graphql } from "../../../gql";
import { useMutation } from "@apollo/client";

import Like from "../../../assets/Icons/Like";
import { Post } from "../../../gql/graphql";
import { motion } from "framer-motion";


const unLikeQuery = graphql(/* graphql */ `
  mutation UnLikeQuery($id: ID!, $username: ID!) {
    updatePosts(
      where: { id: $id }
      update: { likes: { disconnect: { where: { node: { username: $username } } } } }
    ) {
      posts {
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
`);

const likeQuery = graphql(/* graphql */ `
  mutation LikeQuery($username: ID!, $id: ID!) {
    updatePosts(
      update: { likes: { connect: { where: { node: { username: $username } } } } }
      where: { id: $id }
    ) {
      posts {
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
`);


const LikeForm: React.FC<Post> = ({ id, likes }) => {
  const [likeFunc] = useMutation(likeQuery);
  const [unlikeFunc] = useMutation(unLikeQuery);
  const [liked, setLiked] = useState(false);
  const [likesNo, setLikesNo] = useState(likes.length);
  async function handleChange() {
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
    setLikesNo(likes.length);
    setLiked(
      likes?.filter((like) => like.username == localStorage.getItem("username")).length !=
        0 ?? false
    );
  }, [likes]);
  return (
    <div className="inline-flex items-center">
      <motion.button
        className="p-1"
        name="likes"
        type="button"
        whileTap={{
          scale: [null, 0.7, 0.8]
        }}
        transition={{ duration: .1 }}
        onClick={async () => {

          handleChange();
        }}
      >
        <Like liked={liked} />
      </motion.button>
      <div>{likesNo}</div>
    </div>
  );
};
export default LikeForm;
