import ButtonOutline from "../../ui/ButtonOutline";
import SortButton from "../../ui/SortButton";
import Table from "../../ui/Table";
import RoomFilter from "./RoomFilter";
import RoomRowBody from "./RoomRowBody";
import RoomRowHeader from "./RoomRowHeader";

function Rooms() {
  return (
    <div className="flex w-full flex-col gap-4.5">
      <div className="flex justify-between">
        <RoomFilter />
        <div className="flex gap-4">
          <SortButton />
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
