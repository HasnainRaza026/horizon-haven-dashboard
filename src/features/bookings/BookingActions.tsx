import DropDown from "../../ui/DropDown";
import EllipsisIcon from "../../ui/EllipsisIcon";
import { HiEye, HiMiniCheckCircle, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import {
  setBookingStatusId,
  setDeleteBookingId,
  setDropdownId,
} from "./bookingSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import type { BookingType } from "./bookingTypes";

function BookingActions({ booking }: { booking: BookingType }) {
  const dispatch = useDispatch();
  const { DropdownId } = useSelector((state: RootState) => state.bookings);
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex justify-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setDropdownId(booking.id));
          }}
        >
          <EllipsisIcon />
        </button>

        {DropdownId === booking.id && (
          <DropDown setIsOpen={() => dispatch(setDropdownId(null))}>
            <DropDown.Item
              setIsOpen={() => dispatch(setDropdownId(null))}
              onClickFn={() => {
                navigate(`/bookings/${booking.id}`);
              }}
            >
              <span className="flex items-center gap-2">
                <HiEye className="size-4" /> View Details
              </span>
            </DropDown.Item>
            {booking.booking_status !== "check-out" && (
              <DropDown.Item
                setIsOpen={() => dispatch(setDropdownId(null))}
                onClickFn={() => {
                  dispatch(setBookingStatusId(booking.id));
                }}
              >
                <span className="flex items-center gap-2">
                  <HiMiniCheckCircle className="size-4" />{" "}
                  {booking.booking_status === "unconfirmed"
                    ? "Check In"
                    : "Check Out"}
                </span>
              </DropDown.Item>
            )}
            <DropDown.Item
              setIsOpen={() => dispatch(setDropdownId(null))}
              onClickFn={() => {
                dispatch(setDeleteBookingId(booking.id));
              }}
            >
              <span className="flex items-center gap-2">
                <HiTrash className="size-4" /> Delete Booking
              </span>
            </DropDown.Item>
          </DropDown>
        )}
      </div>
    </>
  );
}

export default BookingActions;
