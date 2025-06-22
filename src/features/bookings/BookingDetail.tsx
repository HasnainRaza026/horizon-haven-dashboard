import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import Container from "../../ui/Container";
import GuestInformation from "../../ui/GuestInformation";
import { useNavigate } from "react-router-dom";
import BookingInformation from "./BookingInformation";
import ConfirmModal from "../../ui/ConfirmModal";
import NotFound from "../../ui/NotFound";
import useFetchBookingById from "./useFetchBookingById";
import PageSpinner from "../../ui/PageSpinner";
import { useDispatch, useSelector } from "react-redux";
import { setBookingStatusId, setDeleteBookingId } from "./bookingSlice";
import type { RootState } from "../../store";
import useUpdateBookingStatus from "./useUpdateBookingStatus";
import useDeleteBooking from "./useDeleteBooking";

function BookingDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookingStatusId, deleteBookingId } = useSelector(
    (state: RootState) => state.bookings,
  );
  const {
    updateBookingStatusMutation,
    isPending: isUpdateBookingStatusPending,
  } = useUpdateBookingStatus({
    onSuccess: () => {
      dispatch(setBookingStatusId(null));
    },
  });
  const { deleteBookingMutation, isPending: isDeleteBookingPending } =
    useDeleteBooking({
      onSuccess: () => {
        dispatch(setDeleteBookingId(null));
        navigate(-1);
      },
    });
  const { booking, isPending, isError } = useFetchBookingById();

  if (isPending) return <PageSpinner />;
  if (isError) return <NotFound message="Booking not found" />;

  return (
    <>
      <div className="flex w-fit flex-col items-center gap-4">
        <GuestInformation guest={booking.guests} />
        <Container>
          <Container.Heading>Booking Information</Container.Heading>
          <BookingInformation booking={booking} />
        </Container>
        <div className="flex w-full justify-between gap-4 px-2 py-4">
          <div className="flex gap-4">
            {booking.booking_status !== "check-out" && (
              <ButtonFill
                color="blue"
                onClickFn={() => dispatch(setBookingStatusId(booking.id))}
              >
                {booking.booking_status === "unconfirmed"
                  ? "Check in"
                  : "Check out"}
              </ButtonFill>
            )}
            <ButtonFill
              color="red"
              onClickFn={() => dispatch(setDeleteBookingId(booking.id))}
            >
              Delete
            </ButtonFill>
          </div>
          <ButtonOutline onClickFn={() => navigate(-1)}>Back</ButtonOutline>
        </div>
      </div>
      {bookingStatusId && (
        <ConfirmModal
          cancelBtnFn={() => dispatch(setBookingStatusId(null))}
          title={
            booking.booking_status === "unconfirmed" ? "Check in" : "Check out"
          }
          text={`Confirm this booking of room 00${booking.room_number}?`}
          actionBtnText="Confirm"
          actionBtnColor="blue"
          isActionBtnPending={isUpdateBookingStatusPending}
          actionBtnFn={() => {
            updateBookingStatusMutation({
              bookingId: booking.id,
              status:
                booking.booking_status === "unconfirmed"
                  ? "check-in"
                  : "check-out",
            });
          }}
        />
      )}
      {deleteBookingId && (
        <ConfirmModal
          cancelBtnFn={() => dispatch(setDeleteBookingId(null))}
          title="Delete Booking"
          text="Are you sure you want to delete this booking permanently? "
          actionBtnText="Delete"
          isActionBtnPending={isDeleteBookingPending}
          actionBtnFn={() => {
            deleteBookingMutation(booking.id);
          }}
        />
      )}
    </>
  );
}

export default BookingDetail;
