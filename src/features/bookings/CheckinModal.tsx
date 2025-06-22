import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import Modal from "../../ui/Modal";
import BookingInformation from "./BookingInformation";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import useFetchBookings from "./useFetchBookings";
import NotFound from "../../ui/NotFound";
import useUpdateBookingStatus from "./useUpdateBookingStatus";

function CheckinModal({ cancelBtnFn }: { cancelBtnFn: () => void }) {
  const { bookingStatusId } = useSelector((state: RootState) => state.bookings);
  const { updateBookingStatusMutation, isPending } = useUpdateBookingStatus({
    onSuccess: () => {
      cancelBtnFn();
    },
  });
  const { bookings } = useFetchBookings();
  const booking = bookings.find((booking) => booking.id === bookingStatusId);

  if (!booking) return <NotFound message="Booking not found" />;

  return (
    <Modal style="w-[500px]">
      <Modal.Content
        title={
          booking.booking_status === "unconfirmed" ? "Check in" : "Check out"
        }
        content={<BookingInformation booking={booking} />}
      />
      <Modal.Button>
        <ButtonFill
          color="blue"
          style="text-sm"
          onClickFn={() => {
            updateBookingStatusMutation({
              bookingId: booking.id,
              status:
                booking.booking_status === "unconfirmed"
                  ? "check-in"
                  : "check-out",
            });
          }}
          isPending={isPending}
        >
          {booking.booking_status === "unconfirmed" ? "Check in" : "Check out"}
        </ButtonFill>
        <ButtonOutline
          style="text-sm"
          onClickFn={() => {
            cancelBtnFn();
          }}
        >
          Cancel
        </ButtonOutline>
      </Modal.Button>
    </Modal>
  );
}

export default CheckinModal;
