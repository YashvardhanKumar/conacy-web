import { Suspense, useEffect, useState } from "react";
import PostsList from "./posts/PostsList";
import LoadingLogo from "../components/LoadingLogo";
import PostProvider from "./posts/PostProvider/PostProvider";
import useTitle from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Home | Conacy");
  const tabs = ["Friends", "Global", "Family"];
  const [tabNo, setTabNo] = useState(0);
  const tabPages = [<PostProvider children={<PostsList />} />, <div />];
  return (
    <Suspense fallback={<LoadingLogo />}>
      <div className="flex flex-row w-screen items-center justify-center">
        <div className="flex flex-col md:my-20 items-center gap-10 w-full scroll-m-0 box-border m-auto pb-20">
          <div className="fixed w-full z-40 bg-base-100 p-3">
            <div
              role="tablist"
              className="tabs tabs-boxed flex justify-stretch max-w-96 w-full m-auto shadow-2xl"
            >
              {tabs.map((e, i) => (
                <a
                  role="tab"
                  className={`tab w-full ${i == tabNo ? "tab-active [--fallback-pc:white] dark:[--fallback-pc:black] [--fallback-p:black] dark:[--fallback-p:white]" : ""}`}
                  onClick={() => setTabNo(i)}
                  children={e}
                />
              ))}
            </div>
          </div>
          <div className="h-10"></div>
          {tabPages[tabNo]}
          {/* <PostProvider children={<PostsList />} /> */}
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;
