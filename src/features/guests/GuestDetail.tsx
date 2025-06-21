import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import GuestInformation from "../../ui/GuestInformation";
import { useNavigate, useParams } from "react-router-dom";
import { setDeleteGuestId } from "./guestSlice";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../../ui/ConfirmModal";
import type { RootState } from "../../store";
import useDeleteGuest from "./useDeleteGuest";
import useFetchGuests from "./useFetchGuests";
import PageSpinner from "../../ui/PageSpinner";

function GuestDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteGuestId = useSelector(
    (state: RootState) => state.guests.deleteGuestId,
  );
  const { deleteGuestMutation, isPending: isDeleteGuestPending } =
    useDeleteGuest();

  const { guests, isPending: isGuestLoading } = useFetchGuests();
  const guest = guests?.find((guest) => guest.id === Number(id));

  if (isGuestLoading) return <PageSpinner />;
  if (!guest) return <div>Guest not found</div>;

  return (
    <>
      <div className="flex w-fit flex-col items-center gap-8">
        <GuestInformation guest={guest} />
        <div className="flex w-full justify-end px-2">
          <div className="flex gap-4">
            <ButtonFill
              color="red"
              onClickFn={() => {
                dispatch(setDeleteGuestId(Number(id)));
              }}
            >
              Delete
            </ButtonFill>
            <ButtonOutline onClickFn={() => navigate("/guests")}>
              Back
            </ButtonOutline>
          </div>
        </div>
      </div>
      {deleteGuestId && (
        <ConfirmModal
          cancelBtnFn={() => dispatch(setDeleteGuestId(null))}
          title="Delete Guest"
          isActionBtnPending={isDeleteGuestPending}
          text="Are you sure you want to delete this guest permanently? "
          actionBtnText="Delete"
          actionBtnFn={() => {
            deleteGuestMutation(deleteGuestId);
          }}
        />
      )}
    </>
  );
}

export default GuestDetail;
