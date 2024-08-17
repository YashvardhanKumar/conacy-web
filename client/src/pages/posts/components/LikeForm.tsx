import { graphql } from "../../../gql";

import Like from "../../../assets/Icons/Like";

import { motion } from "framer-motion";
import { useSinglePostContext } from "../SinglePostProvider/SinglePostProvider";

const LikeForm = () => {
  const { liked, likesNo, handleLike } = useSinglePostContext();
  return (
    <div className="inline-flex items-center select-none">
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
