import PostCardImage from "./components/PostCardImage";
import { usePostContext } from "./PostProvider/PostProvider";
import SinglePostProvider from "./SinglePostProvider/SinglePostProvider";

const PostsList = () => {
  const {posts} = usePostContext();
  if (posts.length) {
    return posts.map((e) => (
      <SinglePostProvider id={e.id} key={e.id} children={<PostCardImage  />}/>
    ));
  }
  return <div className="content-center h-screen" children="No Posts Found" />;
};

export default PostsList;
