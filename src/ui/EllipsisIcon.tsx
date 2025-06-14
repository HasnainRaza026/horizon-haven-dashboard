import { HiEllipsisVertical } from "react-icons/hi2";

function EllipsisIcon() {
  return (
    <div className="dark:text-bg-lt-primary flex h-[35px] w-7.5 cursor-pointer items-center justify-center rounded-md hover:border hover:border-black/60 dark:hover:border-white/60">
      <HiEllipsisVertical className="text-2xl" />
    </div>
  );
}

export default EllipsisIcon;
