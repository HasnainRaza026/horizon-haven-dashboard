import { useState } from "react";
import SortButton from "../../ui/SortButton";
import DropDown from "../../ui/DropDown";

function SortRoom() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-end">
      <SortButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <DropDown setIsOpen={setIsOpen}>
          <DropDown.Item setIsOpen={setIsOpen}>Price (high)</DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>Price (low)</DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>Capacity (high)</DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>Capacity (low)</DropDown.Item>
        </DropDown>
      )}
    </div>
  );
}

export default SortRoom;
