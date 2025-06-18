import { useState } from "react";
import DropDown from "../../ui/DropDown";
import EllipsisIcon from "../../ui/EllipsisIcon";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmModal from "../../ui/ConfirmModal";
import RoomModal from "./EditRoomModal";

function RoomAction() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
            <DropDown.Item
              setIsOpen={setIsOpen}
              onClickFn={() => {
                setIsEditModalOpen(true);
              }}
            >
              <span className="flex items-center gap-2">
                <HiPencil className="size-4" /> Edit
              </span>
            </DropDown.Item>
            <DropDown.Item
              setIsOpen={setIsOpen}
              onClickFn={() => {
                setIsDeleteModalOpen(true);
              }}
            >
              <span className="flex items-center gap-2">
                <HiTrash className="size-4" /> Delete
              </span>
            </DropDown.Item>
          </DropDown>
        )}
      </div>
      {isDeleteModalOpen && (
        <ConfirmModal
          setIsConfirmModalOpen={setIsDeleteModalOpen}
          title="Delete Room"
          text="Are you sure you want to delete this room permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {}}
        />
      )}
      {isEditModalOpen && (
        <RoomModal
          title="Edit Room"
          btnTitle="Edit"
          setIsModalOpen={setIsEditModalOpen}
        />
      )}
    </>
  );
}

export default RoomAction;
