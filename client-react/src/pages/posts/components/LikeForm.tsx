import { graphql } from "../../../gql";

import Like from "../../../assets/Icons/Like";

import { motion } from "framer-motion";
import { useSinglePostContext } from "../SinglePostProvider/SinglePostProvider";

const unLikeQuery = graphql(/* graphql */ `
  mutation UnLikeQuery($id: ID!, $username: ID!) {
    updatePosts(
      where: { id: $id }
      update: {
        likes: { disconnect: { where: { node: { username: $username } } } }
      }
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
      update: {
        likes: { connect: { where: { node: { username: $username } } } }
      }
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

const LikeForm = () => {
  const { liked, likesNo, handleLike } = useSinglePostContext();
  return (
    <div className="inline-flex items-center">
      <motion.button
        className="p-1"
        name="likes"
        type="button"
        whileTap={{
          scale: [null, 0.7, 0.8],
        }}
        transition={{ duration: 0.1 }}
        onClick={handleLike}
        children={<Like liked={liked} />}
      />
      <div children={likesNo} />
    </div>
  );
};
export default LikeForm;
