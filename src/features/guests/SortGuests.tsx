import { useState } from "react";
import SortButton from "../../ui/SortButton";
import DropDown from "../../ui/DropDown";
import { useSearchParams } from "react-router-dom";

function SortGuests() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (sort: string) => {
    searchParams.set("sort-guests", sort);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="relative flex justify-end">
      <SortButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <DropDown setIsOpen={setIsOpen}>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("booking-high")}
          >
            Booking (high)
          </DropDown.Item>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("booking-low")}
          >
            Booking (low)
          </DropDown.Item>
        </DropDown>
      )}
    </div>
  );
}

export default SortGuests;
