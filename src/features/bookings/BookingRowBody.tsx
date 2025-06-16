import Badge from "../../ui/Badge";
import Row from "../../ui/Row";
import BookingActions from "./BookingActions";

function BookingRowBody() {
  return (
    <Row padding={"px-7.5 py-2.5"}>
      <Row.Cell style="max-w-[100px]">
        <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
          008
        </p>
      </Row.Cell>
      <Row.Cell>
        <Row.DualItem
          primary="Hassnain Raza"
          secondary="hasnainraza@gmail.com"
          style="text-sm"
        />
      </Row.Cell>
      <Row.Cell>
        <Row.DualItem
          primary="4 nights"
          secondary="Nov 22, 2025 — Nov 26, 2025"
          style="text-xs font-medium"
        />
      </Row.Cell>
      <Row.Cell style="max-w-[100px] text-center">
        <Badge color="yellow">Unconfirmed</Badge>
      </Row.Cell>
      <Row.Cell style="text-center">
        <p className="!text-tx-dr-secondary !font-secondary dark:!text-tx-lt-secondary text-center font-medium">
          $4,200.00
        </p>
      </Row.Cell>
      <Row.Cell style="!w-fit !h-fit">
        <BookingActions />
      </Row.Cell>
    </Row>
  );
}

export default BookingRowBody;
