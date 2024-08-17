import { Link } from "react-router-dom";
import CommentIcon from "../../../assets/Icons/CommentIcon";
import { Post } from "../../../gql/graphql";
import { useSinglePostContext } from "../SinglePostProvider/SinglePostProvider";

const CommentButton = () => {
  const {post} = useSinglePostContext();
  return (
    <div className="flex items-center select-none">
      <Link
        to={`post/${post.id}/comments`}
        className="p-1"
        children={<CommentIcon width={28} height={28} />}
      />
      <div children={post.comments.length} />
    </div>
  );
};

export default CommentButton;
