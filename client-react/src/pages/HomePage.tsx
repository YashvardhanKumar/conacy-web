import { Suspense } from "react";
import PostsList from "./posts/PostsList";
import LoadingLogo from "../components/LoadingLogo";

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingLogo />}>
      <div className="flex flex-row w-screen items-center justify-center">
        <div className="flex flex-col md:ml-20 items-center gap-10 justify-center w-full p-10">
          <div className=""></div>
          <PostsList />
          <div className=""></div>
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;