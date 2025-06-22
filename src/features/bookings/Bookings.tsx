import { Outlet, useLocation } from "react-router";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import BookingFilter from "./BookingFilter";
import BookingRowBody from "./BookingRowBody";
import BookingRowHeader from "./BookingRowHeader";
import SortBooking from "./SortBooking";
import useFetchBookings from "./useFetchBookings";
import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";
import ConfirmModal from "../../ui/ConfirmModal";
import { setDeleteBookingId } from "./bookingSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setBookingStatusId } from "./bookingSlice";
import CheckinModal from "./CheckinModal";
import useDeleteBooking from "./useDeleteBooking";

function Bookings() {
  const location = useLocation();
  const isBookingDetailPage = location.pathname.split("/").length > 2;
  const dispatch = useDispatch();
  const { deleteBookingId, bookingStatusId } = useSelector(
    (state: RootState) => state.bookings,
  );
  const { bookings, total, isError, isPending } = useFetchBookings();
  const { deleteBookingMutation, isPending: isDeleteBookingPending } =
    useDeleteBooking({
      onSuccess: () => {
        dispatch(setDeleteBookingId(null));
      },
    });

  if (isBookingDetailPage) return <Outlet />;

  if (isPending) return <PageSpinner />;

  if (isError || !bookings.length)
    return <NotFound message="Bookings not found" />;

  return (
    <>
      <div className="flex w-full flex-col gap-4.5">
        <div className="flex justify-between">
          <BookingFilter />
          <SortBooking />
        </div>
        <Table>
          <BookingRowHeader />
          {bookings.map((booking) => (
            <BookingRowBody key={booking.id} booking={booking} />
          ))}
          <Pagination totalRows={total} />
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
      {bookingStatusId && (
        <CheckinModal cancelBtnFn={() => dispatch(setBookingStatusId(null))} />
      )}
    </>
  );
}

export default Bookings;
