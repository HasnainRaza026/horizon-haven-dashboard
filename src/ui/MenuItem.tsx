import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";

interface PropType {
  label: string;
  iconFun: (hover: boolean, active: boolean) => React.ReactNode;
  to?: string;
  onClick?: () => void;
  isPending?: boolean;
}

function MenuItem({ label, iconFun, to, onClick, isPending }: PropType) {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to={to || ""}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={({ isActive }) =>
        `hover:bg-main-highlight flex w-full items-center justify-between rounded-sm !px-2.5 !py-2.5 duration-200 ${isActive ? "bg-main-highlight" : ""}`
      }
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3">
            {iconFun(hover, isActive)}
            <p
              className={`text-lg duration-200 ${hover || isActive ? "!text-sidebar-tx-hover dark:!text-tx-lt-primary" : "dark:!text-tx-lt-secondary"}`}
            >
              {label}
            </p>
          </div>
          {isPending && <Spinner />}
        </>
      )}
    </NavLink>
  );
}

export default MenuItem;
