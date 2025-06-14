import Row from "../../ui/Row";

function RoomRowBody({ noBorder }: { noBorder?: boolean }) {
  return (
    <Row padding={"px-7.5 py-1.5"} noBorder={noBorder}>
      <Row.Cell style="max-w-[150px]">
        <img
          src="/src/assets/room.jpg"
          alt="room"
          className="h-[45px] w-[68px] rounded-sm object-cover"
        />
      </Row.Cell>
      <Row.Cell>
        <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
          001
        </p>
      </Row.Cell>
      <Row.Cell>
        <p className="!text-tx-dr-secondary dark:!text-tx-lt-secondary font-semibold">
          5 People
        </p>
      </Row.Cell>
      <Row.Cell style="text-center">
        <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
          $400
        </p>
      </Row.Cell>
      <Row.Cell style="max-w-[150px]">
        <p className="!font-secondary font-medium !text-[#5FB378]">$25.00</p>
      </Row.Cell>
      <Row.Ellipsis />
    </Row>
  );
}

export default RoomRowBody;
