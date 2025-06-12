import React, { useState } from "react";

interface PropType {
  label: string;
  iconFun: (hover: boolean) => React.ReactNode;
}

function MenuItem({ label, iconFun }: PropType) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="hover:bg-main-highlight flex w-full items-center gap-3 rounded-sm !px-2.5 !py-2.5 duration-200"
    >
      {iconFun(hover)}
      <p
        className={`text-lg duration-200 ${hover ? "!text-sidebar-tx-hover dark:!text-tx-lt-primary" : "dark:!text-tx-lt-secondary"}`}
      >
        {label}
      </p>
    </div>
  );
}

export default MenuItem;
