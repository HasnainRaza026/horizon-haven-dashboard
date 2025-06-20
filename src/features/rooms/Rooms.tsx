import ButtonOutline from "../../ui/ButtonOutline";
import Table from "../../ui/Table";
import RoomModal from "./RoomModal";
import RoomFilter from "./RoomFilter";
import RoomRowBody from "./RoomRowBody";
import RoomRowHeader from "./RoomRowHeader";
import SortRoom from "./SortRoom";
import useFetchRooms from "./useFetchRooms";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
  setEditRoomId,
  setIsAddModalOpen,
  setIsDeleteModalOpen,
  setIsEditModalOpen,
  setDeleteRoomId,
} from "./roomSlice";
import ConfirmModal from "../../ui/ConfirmModal";
import PageSpinner from "../../ui/PageSpinner";
import useDeleteRoom from "./useDeleteRoom";
import type { RoomType } from "./roomTypes";

function Rooms() {
  const dispatch = useDispatch();

  const { isAddModalOpen, isEditModalOpen, isDeleteModalOpen, deleteRoomId } =
    useSelector((state: RootState) => state.rooms);

  const { rooms, isError, isPending } = useFetchRooms();
  const { deleteRoomMutation, isPending: isDeletePending } = useDeleteRoom();

  const room = rooms?.find((room) => room.room_number === deleteRoomId);

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
                dispatch(setIsEditModalOpen(false));
                dispatch(setIsDeleteModalOpen(false));
                dispatch(setEditRoomId(null));
                dispatch(setDeleteRoomId(null));
                dispatch(setIsAddModalOpen(true));
              }}
            >
              Add New
            </ButtonOutline>
          </div>
        </div>
        <Table>
          <RoomRowHeader />
          {isPending ? (
            <PageSpinner />
          ) : isError ? (
            <div>Error!</div>
          ) : (
            <>
              {rooms?.map((room, index) =>
                index === rooms.length - 1 ? (
                  <RoomRowBody key={index} room={room} noBorder={true} />
                ) : (
                  <RoomRowBody key={index} room={room} />
                ),
              )}
            </>
          )}
        </Table>
      </div>
      {isAddModalOpen && <RoomModal title="Add New Room" />}
      {isEditModalOpen && <RoomModal title="Edit Room" />}
      {isDeleteModalOpen && (
        <ConfirmModal
          setIsConfirmModalOpen={() => {
            dispatch(setIsDeleteModalOpen(false));
          }}
          title="Delete Room"
          text="Are you sure you want to delete this room permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {
            deleteRoomMutation(room as RoomType);
          }}
          isActionBtnPending={isDeletePending}
        />
      )}
    </>
  );
}

export default Rooms;
