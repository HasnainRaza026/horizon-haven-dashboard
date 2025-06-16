import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

function DropDown({
  children,
  setIsOpen,
}: {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const componentRef = useRef<HTMLDivElement>(null);

  useClickOutside(componentRef, setIsOpen);

  return (
    <div
      ref={componentRef}
      className="bg-bg-lt-primary dark:bg-bg-dr-primary border-lt-border dark:border-dr-border absolute top-full right-0 z-10 flex w-fit flex-col rounded-lg border"
    >
      {children}
    </div>
  );
}

function DropDownItem({
  children,
  setIsOpen,
  onClickFn,
}: {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  onClickFn?: () => void;
}) {
  return (
    <button
      className="hover:bg-main hover:text-tx-lt-primary dark:hover:bg-bg-dk-secondary text-tx-dr-primary dark:text-tx-lt-secondary w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-nowrap"
      onClick={() => {
        setIsOpen(false);
        onClickFn?.();
      }}
    >
      {children}
    </button>
  );
}

DropDown.Item = DropDownItem;

export default DropDown;
