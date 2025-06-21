import { useState } from "react";
import DropDown from "../../ui/DropDown";
import EllipsisIcon from "../../ui/EllipsisIcon";
import { HiEye, HiMiniCheckCircle, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import CheckinModal from "./CheckinModal";
import ConfirmModal from "../../ui/ConfirmModal";

function BookingActions() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCheckinModalOpen, setIsCheckinModalOpen] = useState(false);
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
                navigate(`/bookings/1`);
              }}
            >
              <span className="flex items-center gap-2">
                <HiEye className="size-4" /> View Details
              </span>
            </DropDown.Item>
            <DropDown.Item
              setIsOpen={setIsOpen}
              onClickFn={() => {
                setIsCheckinModalOpen(true);
              }}
            >
              <span className="flex items-center gap-2">
                <HiMiniCheckCircle className="size-4" /> Check In
              </span>
            </DropDown.Item>
            <DropDown.Item
              setIsOpen={setIsOpen}
              onClickFn={() => {
                setIsDeleteModalOpen(true);
              }}
            >
              <span className="flex items-center gap-2">
                <HiTrash className="size-4" /> Delete Booking
              </span>
            </DropDown.Item>
          </DropDown>
        )}
      </div>
      {isDeleteModalOpen && (
        <ConfirmModal
          cancelBtnFn={() => setIsDeleteModalOpen(false)}
          title="Delete Booking"
          text="Are you sure you want to delete this booking permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {}}
        />
      )}
      {isCheckinModalOpen && (
        <CheckinModal setIsModalOpen={setIsCheckinModalOpen} />
      )}
    </>
  );
}

export default BookingActions;
