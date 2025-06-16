import { useState } from "react";
import DropDown from "../../ui/DropDown";
import EllipsisIcon from "../../ui/EllipsisIcon";
import { HiPencil, HiTrash } from "react-icons/hi2";

function RoomAction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-end">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <EllipsisIcon />
      </button>

      {isOpen && (
        <DropDown setIsOpen={setIsOpen}>
          <DropDown.Item setIsOpen={setIsOpen}>
            <span className="flex items-center gap-2">
              <HiPencil className="size-4" /> Edit
            </span>
          </DropDown.Item>
          <DropDown.Item setIsOpen={setIsOpen}>
            <span className="flex items-center gap-2">
              <HiTrash className="size-4" /> Delete
            </span>
          </DropDown.Item>
        </DropDown>
      )}
    </div>
  );
}

export default RoomAction;
