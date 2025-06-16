import { useState } from "react";
import SortButton from "../../ui/SortButton";
import DropDown from "../../ui/DropDown";

function SortGuests() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-end">
      <SortButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <DropDown setIsOpen={setIsOpen}>
          <DropDown.Item setIsOpen={setIsOpen}>Booking (high)</DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>Booking (low)</DropDown.Item>
        </DropDown>
      )}
    </div>
  );
}

export default SortGuests;
