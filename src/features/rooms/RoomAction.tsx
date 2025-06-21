import DropDown from "../../ui/DropDown";
import EllipsisIcon from "../../ui/EllipsisIcon";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  setDropdownId,
  setEditRoomId,
  setDeleteRoomId,
  setIsAddModalOpen,
} from "./roomSlice";
import type { RootState } from "../../store";

function RoomAction({ roomId }: { roomId: number }) {
  const dispatch = useDispatch();
  const dropdownId = useSelector((state: RootState) => state.rooms.dropdownId);

  return (
    <>
      <div className="relative flex justify-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setDropdownId(roomId));
          }}
        >
          <EllipsisIcon />
        </button>

        {dropdownId === roomId && (
          <DropDown setIsOpen={() => dispatch(setDropdownId(null))}>
            <DropDown.Item
              setIsOpen={() => dispatch(setDropdownId(null))}
              onClickFn={() => {
                dispatch(setIsAddModalOpen(false));
                dispatch(setDeleteRoomId(null));
                dispatch(setEditRoomId(roomId));
              }}
            >
              <span className="flex items-center gap-2">
                <HiPencil className="size-4" /> Edit
              </span>
            </DropDown.Item>
            <DropDown.Item
              setIsOpen={() => dispatch(setDropdownId(null))}
              onClickFn={() => {
                dispatch(setIsAddModalOpen(false));
                dispatch(setEditRoomId(null));
                dispatch(setDeleteRoomId(roomId));
              }}
            >
              <span className="flex items-center gap-2">
                <HiTrash className="size-4" /> Delete
              </span>
            </DropDown.Item>
          </DropDown>
        )}
      </div>
    </>
  );
}

export default RoomAction;
