import { Suspense, useEffect } from "react";
import PostsList from "./posts/PostsList";
import LoadingLogo from "../components/LoadingLogo";
import PostProvider from "./posts/PostProvider/PostProvider";
import useTitle from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Home | Conacy");

  return (
    <Suspense fallback={<LoadingLogo />}>
      <div className="flex flex-row w-screen items-center justify-center">
        <div className="flex flex-col md:ml-20 items-center gap-10 justify-center w-full p-10">
          <div className=""></div>
          <PostProvider children={<PostsList />} />
          <div className=""></div>
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;
