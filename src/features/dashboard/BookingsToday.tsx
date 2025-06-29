import BookingRowBody from "../bookings/BookingRowBody";
import BookingRowHeader from "../bookings/BookingRowHeader";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";
import useFetchTodayBookings from "./useFetchTodayBookings";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import ConfirmModal from "../../ui/ConfirmModal";
import { setDeleteBookingId } from "../bookings/bookingSlice";
import useDeleteBooking from "../bookings/useDeleteBooking";

function BookingsToday() {
  const { bookings, isError, isPending } = useFetchTodayBookings();
  const { deleteBookingId } = useSelector((state: RootState) => state.bookings);
  const dispatch = useDispatch();
  const { deleteBookingMutation, isPending: isDeleteBookingPending } =
    useDeleteBooking({
      onSuccess: () => {
        dispatch(setDeleteBookingId(null));
      },
    });

  if (isPending) return <PageSpinner />;

  if (isError || !bookings.length)
    return <NotFound message="Bookings not found" />;

  return (
    <>
      <div className="flex flex-col gap-5">
        <h3 className="dark:!text-tx-lt-primary text-2xl font-semibold">
          Bookings Today
        </h3>
        <Table>
          <BookingRowHeader />
          {bookings.map((booking) => (
            <BookingRowBody key={booking.id} booking={booking} />
          ))}
          <Pagination totalRows={bookings.length} />
        </Table>
      </div>
      {deleteBookingId && (
        <ConfirmModal
          cancelBtnFn={() => {
            dispatch(setDeleteBookingId(null));
          }}
          title="Delete Booking"
          text="Are you sure you want to delete this booking permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {
            deleteBookingMutation(deleteBookingId);
          }}
          isActionBtnPending={isDeleteBookingPending}
        />
      )}
    </>
  );
}

export default BookingsToday;
