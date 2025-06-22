import DropDown from "../../ui/DropDown";
import EllipsisIcon from "../../ui/EllipsisIcon";
import { HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { setDeleteGuestId, setDropdownId } from "./guestSlice";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function GuestAction({ guestId }: { guestId: number }) {
  const dispatch = useDispatch();
  const DropdownId = useSelector((state: RootState) => state.guests.DropdownId);
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex justify-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setDropdownId(guestId));
          }}
        >
          <EllipsisIcon />
        </button>

        {DropdownId === guestId && (
          <DropDown setIsOpen={() => dispatch(setDropdownId(null))}>
            <DropDown.Item
              setIsOpen={() => dispatch(setDropdownId(null))}
              onClickFn={() => {
                navigate(`${guestId}`);
              }}
            >
              <span className="flex items-center gap-2">
                <HiEye className="size-4" /> View Detail
              </span>
            </DropDown.Item>
            <DropDown.Item
              setIsOpen={() => dispatch(setDropdownId(null))}
              onClickFn={() => {
                dispatch(setDeleteGuestId(guestId));
              }}
            >
              <span className="flex items-center gap-2">
                <HiTrash className="size-4" /> Delete Guest
              </span>
            </DropDown.Item>
          </DropDown>
        )}
      </div>
    </>
  );
}

export default GuestAction;
