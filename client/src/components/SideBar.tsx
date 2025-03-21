import logo from "../assets/conacylogo.svg";
import DashboardIcon from "../assets/Icons/DashboardIcon";
import MessageIcon from "../assets/Icons/MessageIcon";
import GroupIcon from "../assets/Icons/GroupIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import NotificationIcon from "../assets/Icons/NotificationIcon";
import AddCircle from "../assets/Icons/AddCircle";
import ToggleSettings from "../assets/Icons/ToggleSettings";
import PersonIcon from "../assets/Icons/PersonIcon";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LogoutIcon from "../assets/Icons/LogoutIcon";
import DialogBox from "./DialogBox";
import { handleLogout } from "../apis/submitActions";
import person from "../assets/avatar.png";

const NavBar = () => {
  const nav = useNavigate();

  return (
    <>
      <Link
        to={"/create"}
        className=" btn dark:bg-white bg-black w-12 p-0  my-20 mx-5 md:m-10 md:w-16 hover:bg-gray-400 rounded-full shadow-lg border-none md:h-16 group fixed bottom-0 right-0 z-50"
      >
        <AddCircle className="dark:*:fill-black" />
      </Link>
      <div className="flex fixed z-50 max-md:bottom-0 bg-base-100 md:h-screen max-md:w-screen md:w-20 max-md:h-16 md:flex-col justify-between max-md:justify-center md:border-r-[0.5px] max-md:border-t-[0.5px] md:items-center md:py-7 max-md:px-7 dark:border-gray-500 border-opacity-30">
        <Link to={"/"} className="max-md:hidden">
          <img src={logo} alt="" className="w-12 h-12" />
        </Link>
        <div className="flex md:flex-col items-center gap-1 w-full md:justify-center justify-between md:h-full">
          <div className="h-10 max-md:hidden"></div>
          <Link to={"/"} className="btn btn-ghost w-12 p-0">
            <DashboardIcon />
          </Link>
          <Link to={"/messages"} className="btn btn-ghost w-12 p-0">
            <MessageIcon />
          </Link>
          <Link to={"/search"} className="btn btn-ghost w-12 p-0 group">
            <SearchIcon />
          </Link>
          <Link to={"/notifications"} className="btn btn-ghost w-12 p-0 group">
            <NotificationIcon />
          </Link>
          <Link
            to={`/u/${localStorage.getItem("username")}`}
            className="btn btn-ghost w-12 p-0 group"
          >
            <div
              className="avatar"
              children={
                <div
                  className="h-8 w-8 rounded-full"
                  children={<img src={person} alt="" height={36} />}
                />
              }
            />
          </Link>
        </div>
      </div>
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
    </>
  );
};

export default NavBar;
