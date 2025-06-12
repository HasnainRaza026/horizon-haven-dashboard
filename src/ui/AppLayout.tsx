import { Outlet } from "react-router-dom";
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
              label={"Dashboard"}
              iconFun={(hover) => {
                return (
                  <BiSolidDashboard
                    className={`${hover ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
            <MenuItem
              label={"Bookings"}
              iconFun={(hover) => {
                return (
                  <HiOutlineCalendarDays
                    className={`${hover ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
            <MenuItem
              label={"Rooms"}
              iconFun={(hover) => {
                return (
                  <PiWarehouse
                    className={`${hover ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
            <MenuItem
              label={"Guests"}
              iconFun={(hover) => {
                return (
                  <HiOutlineUsers
                    className={`${hover ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
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
              label={"Settings"}
              iconFun={(hover) => {
                return (
                  <AiOutlineSetting
                    className={`${hover ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
                  />
                );
              }}
            />
            <MenuItem
              label={"Logout"}
              iconFun={(hover) => {
                return (
                  <HiOutlineLogout
                    className={`${hover ? "text-icon-hover" : "text-tx-dr-primary dark:text-tx-lt-secondary"} text-2xl duration-200`}
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
            Dashboard
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
