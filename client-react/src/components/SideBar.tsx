import logo from "../assets/conacylogo.svg";
import DashboardIcon from "../assets/Icons/DashboardIcon";
import MessageIcon from "../assets/Icons/MessageIcon";
import GroupIcon from "../assets/Icons/GroupIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import NotificationIcon from "../assets/Icons/NotificationIcon";
import AddCircle from "../assets/Icons/AddCircle";
import ToggleSettings from "../assets/Icons/ToggleSettings";
import PersonIcon from "../assets/Icons/PersonIcon";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="border-b-[0.5px] z-50 dark:border-gray-500 border-opacity-30 top-0 items-center gap-1 flex fixed md:hidden bg-base-100 w-screen h-16 justify-between px-2">
        <Link to={"/"} className=" inline-flex items-center">
          <img src={logo} alt="" className="w-10 h-10" />
          <span className={"font-potta_one text-2xl"}>Conacy</span>
        </Link>
        <div className=" flex gap-1">
          <Link to={"/create"} className="btn btn-ghost w-12 p-0 group">
            <AddCircle />
          </Link>
          <Link to={"/usersettings"} className="btn btn-ghost w-12 p-0 group">
            <ToggleSettings />
          </Link>
          <Link
            to={`/profile/${localStorage.getItem('username')}`}
            className="btn btn-ghost w-12 p-0 group"
          >
            <PersonIcon />
          </Link>
        </div>
      </div>
      <div className="flex fixed z-50 max-md:bottom-0 bg-base-100 md:h-screen max-md:w-screen md:w-20 max-md:h-16 md:flex-col justify-between max-md:justify-center md:border-r-[0.5px] max-md:border-t-[0.5px] md:items-center md:py-7 max-md:px-7 dark:border-gray-500 border-opacity-30">
        <div className="flex md:flex-col items-center gap-1 w-full justify-between">
          <Link to={"/"} className="max-md:hidden">
            <img src={logo} alt="" className="w-12 h-12" />
          </Link>
          <div className="h-10 max-md:hidden"></div>
          <Link to={"/"} className="btn btn-ghost w-12 p-0">
            <DashboardIcon />
          </Link>
          <Link to={"/messages"} className="btn btn-ghost w-12 p-0">
            <MessageIcon />
          </Link>

          <Link to={"/server"} className="btn btn-ghost w-12 p-0 group">
            <GroupIcon />
          </Link>
          <Link to={"/search"} className="btn btn-ghost w-12 p-0 group">
            <SearchIcon />
          </Link>
          <Link to={"/notifications"} className="btn btn-ghost w-12 p-0 group">
            <NotificationIcon />
          </Link>
        </div>
        <div className="flex md:flex-col items-center gap-1 max-md:hidden">
          <Link to={"/create"} className="btn btn-ghost w-12 p-0 group">
            <AddCircle />
          </Link>
          <Link to={"/settings"} className="btn btn-ghost w-12 p-0 group">
            <ToggleSettings />
          </Link>
          <Link
            to={`/profile/${localStorage.getItem('username')}`}
            className="btn btn-ghost w-12 p-0 group"
          >
            <PersonIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
