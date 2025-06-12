import { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function ThemeButton() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    if (theme === "light") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div
      onClick={handleTheme}
      className="text-tx-dr-primary dark:text-tx-lt-secondary hover:text-icon-hover hover:bg-main-highlight flex h-9 w-9 items-center justify-center rounded-lg border-[rgba(0,0,0,0.14)] hover:border"
    >
      {theme === "light" ? (
        <HiOutlineMoon className="text-xl" />
      ) : (
        <HiOutlineSun className="text-xl" />
      )}
    </div>
  );
}

export default ThemeButton;
