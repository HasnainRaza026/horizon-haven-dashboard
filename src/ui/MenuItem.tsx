import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface PropType {
  label: string;
  iconFun: (hover: boolean, active: boolean) => React.ReactNode;
  to: string;
}

function MenuItem({ label, iconFun, to }: PropType) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <NavLink
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={({ isActive }) =>
        `hover:bg-main-highlight flex w-full items-center gap-3 rounded-sm !px-2.5 !py-2.5 duration-200 ${isActive ? setActive(true) : setActive(false)} ${isActive ? "bg-main-highlight" : ""}`
      }
    >
      {iconFun(hover, active)}
      <p
        className={`text-lg duration-200 ${hover || active ? "!text-sidebar-tx-hover dark:!text-tx-lt-primary" : "dark:!text-tx-lt-secondary"}`}
      >
        {label}
      </p>
    </NavLink>
  );
}

export default MenuItem;
