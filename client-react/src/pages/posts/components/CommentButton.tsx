import { Link } from "react-router-dom";
import CommentIcon from "../../../assets/Icons/CommentIcon";
import { Post } from "../../../gql/graphql";

const CommentButton: React.FC<Post> = (props) => {
  return (
    <div className="flex items-center">
      <Link
        to={`post/${props.id}/comments`}
        className="p-1"
        children={<CommentIcon width={28} height={28} />}
      />
      <div children={props.comments.length} />
    </div>
  );
};

export default CommentButton;
