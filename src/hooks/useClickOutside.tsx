import { useEffect } from "react";

function useClickOutside(
  ref: React.RefObject<HTMLDivElement | null>,
  setIsOpen: (isOpen: boolean) => void,
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, setIsOpen]);
}

export default useClickOutside;
