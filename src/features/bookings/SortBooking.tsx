import { useState } from "react";
import SortButton from "../../ui/SortButton";
import DropDown from "../../ui/DropDown";

function SortBooking() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-end">
      <SortButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <DropDown setIsOpen={setIsOpen}>
          <DropDown.Item setIsOpen={setIsOpen}>Date (newest)</DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>Date (oldest)</DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>Amount (high)</DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>Amount (low)</DropDown.Item>
        </DropDown>
      )}
    </div>
  );
}

export default SortBooking;
