import Badge from "../../ui/Badge";
import Row from "../../ui/Row";
import BookingActions from "./BookingActions";
import type { BookingType } from "./bookingTypes";
import formatDate from "../../utils/formatDate";

function BookingRowBody({ booking }: { booking: BookingType }) {
  return (
    <>
      <Row padding={"px-7.5 py-2.5"}>
        <Row.Cell style="max-w-[100px]">
          <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
            00{booking.room_number}
          </p>
        </Row.Cell>
        <Row.Cell>
          <Row.DualItem
            primary={`${booking.guests.first_name} ${booking.guests.last_name}`}
            secondary={booking.guests.email}
            style="text-sm"
          />
        </Row.Cell>
        <Row.Cell>
          <Row.DualItem
            primary={`${booking.stay} nights`}
            secondary={`${formatDate(booking.checkin_date)} - ${formatDate(booking.checkout_date)}`}
            style="text-xs font-medium"
          />
        </Row.Cell>
        <Row.Cell style="max-w-[100px] flex justify-center">
          <Badge
            color={
              booking.booking_status === "unconfirmed"
                ? "yellow"
                : booking.booking_status === "check-in"
                  ? "green"
                  : "black"
            }
          >
            {booking.booking_status}
          </Badge>
        </Row.Cell>
        <Row.Cell style="text-center">
          <p className="!text-tx-dr-secondary !font-secondary dark:!text-tx-lt-secondary text-center font-medium">
            ${booking.amount}
          </p>
        </Row.Cell>
        <Row.Cell style="!w-fit !h-fit">
          <BookingActions booking={booking} />
        </Row.Cell>
      </Row>
    </>
  );
}

export default BookingRowBody;
