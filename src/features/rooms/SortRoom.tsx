import { useState } from "react";
import SortButton from "../../ui/SortButton";
import DropDown from "../../ui/DropDown";
import { useSearchParams } from "react-router-dom";

function SortRoom() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (sort: string) => {
    searchParams.set("sort-rooms", sort);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <div className="relative flex justify-end">
      <SortButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <DropDown setIsOpen={setIsOpen}>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("price-high")}
          >
            Price (high)
          </DropDown.Item>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("price-low")}
          >
            Price (low)
          </DropDown.Item>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("capacity-high")}
          >
            Capacity (high)
          </DropDown.Item>
          <DropDown.Item
            setIsOpen={setIsOpen}
            onClickFn={() => handleSort("capacity-low")}
          >
            Capacity (low)
          </DropDown.Item>
        </DropDown>
      )}
    </div>
  );
}

export default SortRoom;
