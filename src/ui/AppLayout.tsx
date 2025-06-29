import { Outlet, useLocation } from "react-router-dom";
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
import Logo from "./Logo";
import useLogout from "../features/authentication/useLogout";
import useFetchUser from "../features/authentication/useFetchUser";
import PageSpinner from "./PageSpinner";
import NotFound from "./NotFound";
import { FaUserCircle } from "react-icons/fa";
import SmallScreen from "./SmallScreen";
// import Uploader from "../dev-data/Uploader";

function AppLayout() {
  const location = useLocation();
  const { logoutMutation, isPending } = useLogout();

  const { userData, isLoading, isError } = useFetchUser();

  if (isLoading) {
    return <PageSpinner />;
  }

  if (isError) {
    return <NotFound message="Something went wrong" />;
  }

  return (
    <>
      <div className="block xl:hidden">
        <SmallScreen />
      </div>
      <div className="hidden h-dvh w-full xl:flex">
        {/* SideBar */}
        <div className="bg-bg-lt-primary dark:bg-bg-dr-primary flex h-full flex-col justify-between border-r border-r-gray-100 !p-5 dark:border-0">
          <div className="!space-y-8">
            {/* Logo */}
            <div>
              <Link to={"/"}>
                <Logo />
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
                isPending={isPending}
                onClick={() => {
                  logoutMutation();
                }}
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
              {(() => {
                const pathSegments = location.pathname
                  .split("/")
                  .filter(Boolean);
                const [section, id] = pathSegments;

                if (!section) return "Dashboard";

                const formattedSection =
                  section.charAt(0).toUpperCase() + section.slice(1);

                if (section === "user" || pathSegments.length < 2) {
                  return formattedSection;
                }

                return `${formattedSection.slice(0, -1)} #${id}`;
              })()}
            </h2>
            <div className="flex gap-4.5">
              <div className="flex justify-center gap-2.5">
                <Link to={"/user/add"}>
                  <AddButton />
                </Link>
                <Link to={"/account"}>
                  {userData?.avatar ? (
                    <img
                      src={userData?.avatar}
                      alt="Avatar"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-tx-dr-primary dark:text-tx-lt-secondary text-4xl" />
                  )}
                </Link>
              </div>
              <ThemeButton />
            </div>
          </div>
          <div
            className={`${location.pathname === "/dashboard" ? "bg-bg-lt-primary" : "bg-bg-lt-secondary"} dark:bg-bg-dr-secondary no-scrollbar flex h-full w-full items-start justify-center overflow-scroll px-10 py-9`}
          >
            <Outlet />
          </div>
        </div>
        {/* <Uploader /> */}
      </div>
    </>
  );
}

export default AppLayout;
