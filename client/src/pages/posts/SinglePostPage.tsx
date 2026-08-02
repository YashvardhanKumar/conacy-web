import SinglePostProvider from "@pages/posts/SinglePostProvider/SinglePostProvider";
import SinglePost from "@pages/posts/components/SinglePost";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const param = useParams();
  return (
    <SinglePostProvider
      id={param.pid ?? ""}
      children={
        <div className="flex md:ml-20 justify-center w-screen scroll-m-0 box-border p-2 pb-20">
          <div className="w-[640px] max-sm:w-[95vw] flex flex-col items-center content-center">
            <SinglePost />
          </div>
        </div>
      }
    />
  );
};
export default SinglePostPage;
