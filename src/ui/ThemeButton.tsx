import { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

function ThemeButton() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // First check localStorage, then fallback to system preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save theme to localStorage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      onClick={handleTheme}
      className="text-tx-dr-primary dark:text-tx-lt-secondary dark:hover:text-main dark:hover:border-main hover:text-icon-hover hover:bg-main-highlight flex h-9 w-9 items-center justify-center rounded-lg border-[rgba(0,0,0,0.14)] duration-200 hover:border"
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
