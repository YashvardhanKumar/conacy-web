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

const Profile = () => {
  const { username } = useParams();
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
    <div className="grid grid-cols-3 grid-rows-[1fr_1fr_1fr] gap-2">
      {user?.posts.map((e) => (
        <Link
          to={`../post/${e.id}`}
          children={<img src={e.url} className="aspect-square object-cover" />}
        />
      ))}
    </div>,
    <div className="w-full flex flex-col items-stretch">
      {user?.authorOfComments.map((e) => (
        <div
          key={e.id}
          className="flex flex-col justify-between items-start w-full"
          children={
            <div className="flex justify-stretch">
              <img
                src={avatar}
                alt=""
                height={36}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="flex flex-col text-sm text-start justify-self-start">
                <div
                  className="px-2 text-web-color"
                  children={`@${user.username}`}
                />
                <div className="px-2" children={e.text} />
              </span>
            </div>
          }
        />
      ))}
    </div>,
  ];
  return (
    <div className="md:ml-20 max-md:my-16 p-10 flex w-full max-w-3xl flex-col justify-between items-stretch gap-5">
      <div className="flex sm:items-center gap-4">
        <div className="avatar">
          <div className="sm:w-32 sm:h-32 h-20 w-20 rounded-full">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
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

          <div className="flex gap-3 max-sm:hidden">
            {localStorage.getItem("username") != username && (
              <>
                <span className="btn min-h-fit h-fit p-3 bg-black hover:bg-gray-400 text-base-100 dark:bg-white dark:border-white">
                  Add Relation
                </span>
                <span className="btn min-h-fit h-fit p-3 bg-transparent dark:border-white">
                  Message
                </span>
              </>
            )}
            {localStorage.getItem("username") == username && (
              <span className="btn min-h-fit h-fit p-3 bg-black hover:bg-gray-400 text-base-100 dark:bg-white dark:border-white">
                Edit Profile
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-3 sm:hidden">
        {localStorage.getItem("username") != username && (
          <>
            <span className="btn min-h-fit h-fit p-3 bg-black hover:bg-gray-400 text-base-100 dark:bg-white dark:border-white">
              Add Relation
            </span>
            <span className="btn min-h-fit h-fit p-3 bg-transparent dark:border-white">
              Message
            </span>
          </>
        )}
        {localStorage.getItem("username") == username && (
          <span className="btn min-h-fit h-fit p-3 bg-black hover:bg-gray-400 text-base-100 dark:bg-white dark:border-white">
            Edit Profile
          </span>
        )}
      </div>
      <div className="flex w-full justify-between  items-center gap-3">
        <div className="flex gap-3 text-lg max-md:justify-stretch max-md:w-full">
          <div className="border border-gray-400 w-fit sm:p-2 sm:px-3 p-1 text-center rounded-md shadow-sm shadow-base-300 ">{`${user?.posts.length} Posts`}</div>
          <div className="border border-gray-400 w-fit sm:p-2 sm:px-3 p-1 text-center rounded-md shadow-sm shadow-base-300">{`${user?.relations.length} Relations`}</div>
        </div>
        <div className="flex gap-2">
          {localStorage.getItem("username") == username && (
            <motion.button
              whileTap={{
                scale: [null, 0.7, 0.8],
              }}
              transition={{ duration: 0.1 }}
              className="max-md:hidden cursor-pointer inline-flex items-center gap-2 text-white dark:text-black hover:bg-gray-400 btn bg-black dark:bg-white min-h-fit h-fit px-3 p-1 justify-between"
              onClick={() => {
                (
                  document.getElementById("logout_modal") as HTMLDialogElement
                ).showModal();
              }}
            >
              <LogoutIcon className="h-5 w-5" />
              <span>Logout</span>
            </motion.button>
          )}
          <DialogBox
            uid="logout_modal"
            title="About to Logout"
            description="Are you sure you want to logout?"
          >
            <button
              className="btn btn-error text-white"
              onClick={async () => {
                await handleLogout();
                nav("/");
              }}
            >
              Logout
            </button>
          </DialogBox>
        </div>
      </div>

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
