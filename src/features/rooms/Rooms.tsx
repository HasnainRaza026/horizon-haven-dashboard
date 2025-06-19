import { useState } from "react";
import ButtonOutline from "../../ui/ButtonOutline";
import Table from "../../ui/Table";
import RoomModal from "./RoomModal";
import RoomFilter from "./RoomFilter";
import RoomRowBody from "./RoomRowBody";
import RoomRowHeader from "./RoomRowHeader";
import SortRoom from "./SortRoom";
import useFetchRooms from "./useFetchRooms";

function Rooms() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { rooms, isError, isPending } = useFetchRooms();

  return (
    <>
      <div className="flex w-full flex-col gap-4.5">
        <div className="flex justify-between">
          <RoomFilter />
          <div className="flex gap-4">
            <SortRoom />
            <ButtonOutline
              style="!text-sm"
              onClickFn={() => {
                setIsAddModalOpen(true);
              }}
            >
              Add New
            </ButtonOutline>
          </div>
        </div>
        <Table>
          <RoomRowHeader />
          {isPending ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error!</div>
          ) : (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <RoomRowBody key={index} room={rooms?.[0]} />
              ))}
              <RoomRowBody noBorder={true} room={rooms?.[0]} />
            </>
          )}
        </Table>
      </div>
      {isAddModalOpen && (
        <RoomModal
          title="Add New Room"
          btnTitle="Add"
          setIsModalOpen={setIsAddModalOpen}
        />
      )}
    </>
  );
}

export default Rooms;
