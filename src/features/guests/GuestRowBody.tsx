import Badge from "../../ui/Badge";
import Row from "../../ui/Row";
import GuestAction from "./GuestAction";
import type { GuestType } from "./guestTypes";

function GuestRowBody({ guest }: { guest: GuestType }) {
  return (
    <Row padding={"px-7.5 py-2.5"}>
      <Row.Cell>
        <Row.DualItem
          primary={`${guest.first_name} ${guest.last_name}`}
          secondary={guest.nationality}
          style="text-sm"
        />
      </Row.Cell>
      <Row.Cell>
        <p className="!text-tx-dr-secondary dark:!text-tx-lt-secondary font-semibold">
          {guest.email}
        </p>
      </Row.Cell>
      <Row.Cell style="text-center">
        <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
          {guest.booking_history ? guest.booking_history : 0}
        </p>
      </Row.Cell>
      <Row.Cell style="flex justify-center">
        <Badge color={guest.booking_status ? "green" : "red"}>
          {guest.booking_status ? "Active" : "Inactive"}
        </Badge>
      </Row.Cell>
      <Row.Cell style="!w-fit !h-fit">
        <GuestAction guestId={guest.id} />
      </Row.Cell>
    </Row>
  );
}

export default GuestRowBody;
