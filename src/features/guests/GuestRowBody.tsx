import Badge from "../../ui/Badge";
import Row from "../../ui/Row";

function GuestRowBody() {
  return (
    <Row padding={"px-7.5 py-2.5"}>
      <Row.Cell>
        <Row.DualItem
          primary="Hassnain Raza"
          secondary="Pakistan 🇵🇰"
          style="text-sm"
        />
      </Row.Cell>
      <Row.Cell>
        <p className="!text-tx-dr-secondary dark:!text-tx-lt-secondary font-semibold">
          hasnainraza0026@gmail.com
        </p>
      </Row.Cell>
      <Row.Cell style="text-center">
        <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
          25
        </p>
      </Row.Cell>
      <Row.Cell style="flex justify-center">
        <Badge color="green">Active</Badge>
      </Row.Cell>
      <Row.Ellipsis />
    </Row>
  );
}

export default GuestRowBody;
