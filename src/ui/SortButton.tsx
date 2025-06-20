import { GoSortDesc } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import { modifySearchParam } from "../utils/modifySearchParam";

function SortButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [searchParams] = useSearchParams();

  const sort =
    modifySearchParam("sort-bookings", searchParams) ||
    modifySearchParam("sort-rooms", searchParams) ||
    modifySearchParam("sort-guests", searchParams) ||
    "Sort by";

  return (
    <button
      className="bg-main hover:bg-main-hover text-bg-lt-primary flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}
    >
      <span>
        <GoSortDesc className="text-xl" />
      </span>
      <span>{sort}</span>
    </button>
  );
}

export default SortButton;
