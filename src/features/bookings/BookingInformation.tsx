import Badge from "../../ui/Badge";
import Container from "../../ui/Container";
import { formatDate } from "date-fns";
import type { BookingType } from "./bookingTypes";

function BookingInformation({ booking }: { booking: BookingType }) {
  return (
    <Container.Grid>
      <Container.Detail
        title="Room"
        information={`00${booking?.room_number}`}
      />
      <Container.Detail title="Stay" information={`${booking?.stay} nights`} />
      <Container.Detail
        title="Check In"
        information={formatDate(booking.checkin_date, "MMM d, yyyy")}
      />
      <Container.Detail
        title="Check Out"
        information={formatDate(booking.checkout_date, "MMM d, yyyy")}
      />
      <Container.Detail
        title="Total Guests"
        information={`${booking?.total_persons}`}
      />
      <Container.Detail
        title="Status"
        badge={
          <Badge
            color={
              booking?.booking_status === "unconfirmed"
                ? "yellow"
                : booking?.booking_status === "check-in"
                  ? "green"
                  : "black"
            }
          >
            {booking?.booking_status}
          </Badge>
        }
      />
      <Container.Detail
        title="Breakfast"
        badge={
          <Badge color={booking?.breakfast ? "green" : "red"}>
            {booking?.breakfast ? "Yes" : "No"}
          </Badge>
        }
      />
      <Container.Detail title="Amount" information={`$${booking?.amount}`} />
    </Container.Grid>
  );
}

export default BookingInformation;
