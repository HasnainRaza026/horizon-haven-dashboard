import ButtonOutline from "../../ui/ButtonOutline";
import Table from "../../ui/Table";
import RoomFilter from "./RoomFilter";
import RoomRowBody from "./RoomRowBody";
import RoomRowHeader from "./RoomRowHeader";
import SortRoom from "./SortRoom";

function Rooms() {
  return (
    <div className="flex w-full flex-col gap-4.5">
      <div className="flex justify-between">
        <RoomFilter />
        <div className="flex gap-4">
          <SortRoom />
          <ButtonOutline style="!text-sm">Add New</ButtonOutline>
        </div>
      </div>
      <Table>
        <RoomRowHeader />
        <RoomRowBody />
        <RoomRowBody />
        <RoomRowBody />
        <RoomRowBody />
        <RoomRowBody />
        <RoomRowBody />
        <RoomRowBody />
        <RoomRowBody noBorder={true} />
      </Table>
    </div>
  );
}

export default Rooms;
