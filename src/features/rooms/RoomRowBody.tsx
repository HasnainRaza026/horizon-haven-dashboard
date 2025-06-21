import type { RoomType } from "./roomTypes";
import Row from "../../ui/Row";
import RoomAction from "./RoomAction";

function RoomRowBody({
  noBorder,
  room,
}: {
  noBorder?: boolean;
  room: RoomType;
}) {
  return (
    <Row padding={"px-7.5 py-1.5"} noBorder={noBorder}>
      <Row.Cell style="max-w-[150px]">
        <img
          src={room.image as string}
          alt="room"
          className="h-[45px] w-[68px] rounded-sm object-cover"
        />
      </Row.Cell>
      <Row.Cell>
        <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
          00{room.room_number}
        </p>
      </Row.Cell>
      <Row.Cell>
        <p className="!text-tx-dr-secondary dark:!text-tx-lt-secondary font-semibold">
          {room.capacity} People
        </p>
      </Row.Cell>
      <Row.Cell style="text-center">
        <p className="!font-secondary !text-tx-dr-secondary dark:!text-tx-lt-secondary font-medium">
          ${room.price}
        </p>
      </Row.Cell>
      <Row.Cell style="max-w-[150px]">
        <p className="!font-secondary font-medium !text-[#5FB378]">
          {room.discount ? `$${room.discount}` : "-"}
        </p>
      </Row.Cell>
      <Row.Cell style="!w-fit !h-fit">
        <RoomAction roomId={room.room_number} />
      </Row.Cell>
    </Row>
  );
}

export default RoomRowBody;
