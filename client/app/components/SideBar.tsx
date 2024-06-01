import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/conacylogo.svg";
import DashboardIcon from "@/public/Icons/DashboardIcon";
import MessageIcon from "@/public/Icons/MessageIcon";
import GroupIcon from "@/public/Icons/GroupIcon";
import SearchIcon from "@/public/Icons/SearchIcon";
import NotificationIcon from "@/public/Icons/NotificationIcon";
import AddCircle from "@/public/Icons/AddCircle";
import ToggleSettings from "@/public/Icons/ToggleSettings";
import PersonIcon from "@/public/Icons/PersonIcon";

const SideBar = () => {
  return (
    <div className="flex fixed h-screen w-20 flex-col justify-between border-r-[0.5px] items-center py-7 dark:border-gray-500 border-opacity-30">
      <div className="flex flex-col items-center gap-1">
        <Link href={"/"}>
          <Image src={logo} alt="" className="w-12 h-12" />
        </Link>
        <div className="h-10"></div>
        <Link href={"/"} className="btn btn-ghost w-12 p-0">
          <DashboardIcon/>
        </Link>
        <Link href={"/messages"} className="btn btn-ghost w-12 p-0">
          <MessageIcon/>
        </Link>

        <Link href={"/server"} className="btn btn-ghost w-12 p-0 group">
          <GroupIcon/>
        </Link>
        <Link href={"/search"} className="btn btn-ghost w-12 p-0 group">
          <SearchIcon/>
        </Link>
        <Link href={"/notifications"} className="btn btn-ghost w-12 p-0 group">
          <NotificationIcon/>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Link href={"/create"} className="btn btn-ghost w-12 p-0 group">
          <AddCircle/>
        </Link>
        <Link href={"/usersettings"} className="btn btn-ghost w-12 p-0 group">
          <ToggleSettings/>
        </Link>
        <Link
          href={"/profile?uid=the_rock"}
          className="btn btn-ghost w-12 p-0 group"
        >
          <PersonIcon/>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
