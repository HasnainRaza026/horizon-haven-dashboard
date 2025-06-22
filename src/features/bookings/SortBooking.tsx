import { useState } from "react";
import SortButton from "../../ui/SortButton";
import DropDown from "../../ui/DropDown";
import { useSearchParams } from "react-router-dom";

function SortBooking() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (sort: string) => {
    searchParams.set("sort-bookings", sort);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="relative flex justify-end">
      <SortButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <DropDown setIsOpen={setIsOpen}>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("date-recent")}
          >
            Date (recent)
          </DropDown.Item>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("date-old")}
          >
            Date (old)
          </DropDown.Item>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("amount-low")}
          >
            Amount (low)
          </DropDown.Item>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("amount-high")}
          >
            Amount (high)
          </DropDown.Item>
        </DropDown>
      )}
    </div>
  );
}

export default SortBooking;
