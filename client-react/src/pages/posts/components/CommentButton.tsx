import { Link } from "react-router-dom"
import CommentIcon from "../../../assets/Icons/CommentIcon"
import { Post, PostsQuery } from "../../../gql/graphql"


const CommentButton: React.FC<Post> = (props) => {
  return (
    <div className="flex items-center">
    <Link to={`post/${props.id}/comments`} className="p-1">
      <CommentIcon  width="28" height="28" />
    </Link>
    <div>{props.comments.length}</div>
  </div>
  )
}

export default CommentButton