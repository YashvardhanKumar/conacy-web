import React, { FC, ReactNode, useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
import { useProfiletContext } from "./Provider/ProfileProvider";
import useTitle from "../../hooks/useTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import ToggleSettings from "../../assets/Icons/ToggleSettings";
import { motion } from "framer-motion";
import LogoutIcon from "../../assets/Icons/LogoutIcon";
import { handleLogout } from "../../apis/submitActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import DialogBox from "../../components/DialogBox";
import { RelationType } from "../../gql/graphql";

const Profile = () => {
  const { user } = useProfiletContext();
  const nav = useNavigate();
  const [tabNo, setTabNo] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") != "Yes") nav("/");
    document.title = user
      ? `${user?.name.split(" ")[0]} | @${user?.username}`
      : "Loading...";
  }, [user]);
  const tabs = ["Posts", "Replies"];
  const tabPages = [
    <UserPostGrid/>,
    <UserReplies />,
  ];
  return (
    <div className="md:ml-20 p-10 flex w-full lg:max-w-5xl flex-col justify-between items-center gap-5">
      <div className="flex sm:items-center gap-4 w-full justify-evenly max-w-5xl">
        <div className="avatar">
          <div className="sm:w-32 sm:h-32 h-20 w-20 rounded-full">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap max-sm:flex-col items-baseline sm:gap-2 gap-0.5 sm:text-2xl text-lg">
              <div className="">{user?.name}</div>
              <div className="text-gray-400">@{user?.username}</div>
              <div className=" text-base inline-flex items-center gap-2 bg-base-300 w-fit p-1 px-3 rounded-full shadow-sm shadow-base-300">
                <FontAwesomeIcon
                  icon={faBirthdayCake}
                  className="dark:text-white text-gray-600"
                />
                <div>{user?.dob}</div>
              </div>
            </div>
          </div>
          <UserDetailRow className="max-sm:hidden" />
        </div>
      </div>

      <UserDetailRow className="sm:hidden" />

      <div
        role="tablist"
        className="tabs tabs-boxed flex justify-stretch  w-full"
      >
        {tabs.map((e, i) => (
          <a
            role="tab"
            className={`tab w-1/2 ${i == tabNo ? "tab-active [--fallback-pc:white] dark:[--fallback-pc:black] [--fallback-p:black] dark:[--fallback-p:white]" : ""}`}
            onClick={() => setTabNo(i)}
            children={e}
          />
        ))}
      </div>
      {tabPages[tabNo]}
    </div>
  );
};

export default Profile;

const UserDetailRow = (props: any) => {
  const { username } = useParams();
  const { user, handleRelation } = useProfiletContext();
  let curUser = localStorage.getItem("username");
  const [curRel, setCurRel] = useState(
    user?.relationWith.find((e) => e.username == curUser)
  );
  useEffect(() => {
    setCurRel(user?.relationWith.find((e) => e.username == curUser));
  }, [user]);
  return (
    <div className={"flex gap-3 w-full " + props.className}>
      <div className="flex flex-wrap w-full justify-between items-stretch gap-3 flex-1">
        <div className="flex gap-3 max-md:justify-stretch">
          <div className="dark:bg-gray-700 bg-gray-100 p-3 text-center h-fit rounded-md shadow-base-300 text-xs">{`${user?.posts.length} Posts`}</div>
          <div className="dark:bg-gray-700 bg-gray-100 p-3 text-center h-fit rounded-md shadow-base-300 text-xs">{`${user?.relations.length} Relations`}</div>
        </div>

        {localStorage.getItem("username") != username && (
          <div className="flex gap-2">
            <button
              className={
                "cursor-pointer inline-flex items-center gap-2  hover:bg-gray-400 btn min-h-fit h-fit p-3 px-3 justify-between " +
                (curRel
                  ? "text-black dark:text-white bg-gray-100 dark:bg-gray-700"
                  : "text-white dark:text-black bg-black dark:bg-white")
              }
              onClick={() => handleRelation(curRel)}
            >
              {curRel ? "Unadd" : "Add Relation"}
            </button>
            <button className="cursor-pointer inline-flex items-center gap-2 text-black dark:text-white hover:bg-gray-400 btn bg-base-100 border-black dark:border-white min-h-fit h-fit p-3 px-3 justify-between">
              Message
            </button>
          </div>
        )}
        {localStorage.getItem("username") == username && (
          <div className="flex gap-2">
            <motion.button
              whileTap={{
                scale: [null, 0.7, 0.8],
              }}
              transition={{ duration: 0.1 }}
              className="max-md:hidden cursor-pointer inline-flex items-center gap-2 text-white dark:text-black hover:bg-gray-400 btn bg-red-500 dark:bg-red-300 min-h-fit h-fit p-1 px-3 justify-between"
              onClick={() => {
                (
                  document.getElementById("logout_modal") as HTMLDialogElement
                ).showModal();
                localStorage.setItem("redirectUrl", "");
              }}
            >
              <LogoutIcon className="h-5 w-5" />
              <span>Logout</span>
            </motion.button>

            <span className=" cursor-pointer text-white dark:text-black hover:bg-gray-400 btn bg-black dark:bg-white min-h-fit h-fit p-3 px-3 dark:border-white">
              Edit Profile
            </span>

            <DialogBox
              uid="logout_modal"
              title="About to Logout"
              description="Are you sure you want to logout?"
            >
              <button
                className="btn btn-error text-white"
                onClick={async () => {
                  await handleLogout();
                  const nav = useNavigate();
                }}
              >
                Logout
              </button>
            </DialogBox>
          </div>
        )}
      </div>
    </div>
  );
};

const UserReplies = () => {
  const { user } = useProfiletContext();

  return (
    <div className="w-full flex flex-col items-stretch">
      {user?.authorOfComments.map((e) => (
        <div
          key={e.id}
          className="flex flex-col justify-between items-center w-full "
          children={
            <div className="py-3 flex flex-col gap-1 w-full">
              <div className="flex justify-stretch items-center gap-1">
                <img
                  src={avatar}
                  alt=""
                  height={36}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="flex flex-col gap-1 text-sm text-start justify-self-start">
                  <div
                    className="px-2 dark:text-web-color"
                    children={`@${user.username}`}
                  />
                  <div className="px-2" children={e.text} />
                </span>
              </div>
              <div className="text-sm text-gray-400">Replying To..</div>
              <Link
                to={`../post/${e.commentOfPost.id}`}
                className="bg-gray-50 dark:bg-gray-800 p-3 flex flex-col gap-3 rounded-lg"
              >
                <div className="flex justify-stretch items-center gap-1">
                  <img
                    src={avatar}
                    alt=""
                    height={36}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="flex flex-col gap-0 text-sm text-start justify-self-start">
                    <div
                      className="px-2 dark:text-web-color"
                      children={`@${e.commentOfPost.creatorOfPost.username}`}
                    />
                    {/* <div
                  className="px-2"
                  children={e.commentOfPost.creatorOfPost.name}
                /> */}
                  </span>
                </div>
                <div className="flex">
                  <img
                    src={e.commentOfPost.url}
                    className="max-w-32 bg-white rounded-lg"
                  />
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-50">
                  {e.commentOfPost.description}
                </div>
              </Link>
            </div>
          }
        />
      ))}
    </div>
  );
};

const UserPostGrid = () => {
  const { user } = useProfiletContext();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-[1fr_1fr_1fr] gap-2">
      {user?.posts.map((e) => (
        <Link
          to={`../post/${e.id}`}
          children={<img src={e.url} className="aspect-square object-cover bg-gray-50 dark:bg-gray-800" />}
        />
      ))}
    </div>
  );
};
