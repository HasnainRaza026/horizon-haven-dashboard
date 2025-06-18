import { useState } from "react";
import DropDown from "../../ui/DropDown";
import EllipsisIcon from "../../ui/EllipsisIcon";
import { HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../ui/ConfirmModal";

function GuestAction() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
                navigate(`/guests/1`);
              }}
            >
              <span className="flex items-center gap-2">
                <HiEye className="size-4" /> View Detail
              </span>
            </DropDown.Item>
            <DropDown.Item
              setIsOpen={setIsOpen}
              onClickFn={() => {
                setIsDeleteModalOpen(true);
              }}
            >
              <span className="flex items-center gap-2">
                <HiTrash className="size-4" /> Delete Guest
              </span>
            </DropDown.Item>
          </DropDown>
        )}
      </div>
      {isDeleteModalOpen && (
        <ConfirmModal
          setIsConfirmModalOpen={setIsDeleteModalOpen}
          title="Delete Guest"
          text="Are you sure you want to delete this guest permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {}}
        />
      )}
    </>
  );
}

export default GuestAction;
