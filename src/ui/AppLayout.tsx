import { Outlet, useLocation } from "react-router-dom";
import { BsHouses } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineCalendarDays, HiOutlineUsers } from "react-icons/hi2";
import { PiWarehouse } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import Profile from "./Profile";
import ThemeButton from "./ThemeButton";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";

function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex h-dvh w-full">
      {/* SideBar */}
      <div className="bg-bg-lt-primary dark:bg-bg-dr-primary flex h-full flex-col justify-between border-r border-r-gray-100 !p-5 dark:border-0">
        <div className="!space-y-6">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <div className="flex gap-3.5">
                <BsHouses className="logo-icon" />
                <h1 className="font-logo dark:text-tx-lt-primary text-2xl text-nowrap">
                  <span className="font-bold">Horizon</span> <span>Haven</span>
                </h1>
              </div>
            </Link>
          </div>
          {/* Menu Items */}
          <div>
            <MenuItem
              to={"/dashboard"}
              label={"Dashboard"}
              iconFun={(hover, active) => {
                return (
                  <BiSolidDashboard
                    className={`${hover || active ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
            <MenuItem
              to={"/bookings"}
              label={"Bookings"}
              iconFun={(hover, active) => {
                return (
                  <HiOutlineCalendarDays
                    className={`${hover || active ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
            <MenuItem
              to={"/rooms"}
              label={"Rooms"}
              iconFun={(hover, active) => {
                return (
                  <PiWarehouse
                    className={`${hover || active ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
            <MenuItem
              to={"/guests"}
              label={"Guests"}
              iconFun={(hover, active) => {
                return (
                  <HiOutlineUsers
                    className={`${hover || active ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="space-y-3">
          {/* Profile */}
          <div>
            <Link to={"/account"}>
              <Profile />
            </Link>
          </div>
          <div>
            {/* Menu Items */}

            <MenuItem
              to={"/settings"}
              label={"Settings"}
              iconFun={(hover, active) => {
                return (
                  <AiOutlineSetting
                    className={`${hover || active ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />

            <MenuItem
              to={"/logout"}
              label={"Logout"}
              iconFun={(hover, active) => {
                return (
                  <HiOutlineLogout
                    className={`${hover || active ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="bg-bg-lt-primary dark:bg-bg-dr-primary flex justify-between border-b border-b-gray-100 py-4 pr-5 pl-10 dark:border-0">
          <h2 className="dark:!text-tx-lt-primary text-[28px] font-bold">
            {location.pathname.split("/")[1]
              ? location.pathname.split("/")[1].charAt(0).toUpperCase() +
                location.pathname.split("/")[1].slice(1)
              : "Dashboard"}
          </h2>
          <div className="flex gap-4.5">
            <div className="flex justify-center gap-2.5">
              <Link to={"/user/add"}>
                <AddButton />
              </Link>
              <Link to={"/account"}>
                <img
                  src="/src/assets/img.jpg"
                  alt="Avatar"
                  className="h-10 w-10 rounded-full"
                />
              </Link>
            </div>
            <ThemeButton />
          </div>
        </div>
        <div className="bg-bg-lt-secondary dark:bg-bg-dr-secondary h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
