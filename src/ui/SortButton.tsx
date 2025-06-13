import { GoSortDesc } from "react-icons/go";

function SortButton() {
  return (
    <button className="bg-main hover:bg-main-hover text-bg-lt-primary flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold">
      <span>
        <GoSortDesc className="text-xl" />
      </span>
      <span>Sort by</span>
    </button>
  );
}

export default SortButton;
