import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import GuestInformation from "../../ui/GuestInformation";
import { useNavigate } from "react-router-dom";
import { setDeleteGuestId } from "./guestSlice";
import { useDispatch, useSelector } from "react-redux";
import ConfirmModal from "../../ui/ConfirmModal";
import type { RootState } from "../../store";
import useDeleteGuest from "./useDeleteGuest";
import PageSpinner from "../../ui/PageSpinner";
import useFetchGuestById from "./useFetchGuestById";
import NotFound from "../../ui/NotFound";

function GuestDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteGuestId = useSelector(
    (state: RootState) => state.guests.deleteGuestId,
  );
  const { deleteGuestMutation, isPending: isDeleteGuestPending } =
    useDeleteGuest({ onSuccess: () => navigate(-1) });

  const { guest, isPending: isGuestLoading } = useFetchGuestById();

  if (isGuestLoading) return <PageSpinner />;
  if (!guest) return <NotFound message="Guest not found" />;

  return (
    <>
      <div className="flex w-fit flex-col items-center gap-8">
        <GuestInformation guest={guest} />
        <div className="flex w-full justify-end px-2">
          <div className="flex gap-4">
            <ButtonFill
              color="red"
              onClickFn={() => {
                dispatch(setDeleteGuestId(guest.id));
              }}
            >
              Delete
            </ButtonFill>
            <ButtonOutline onClickFn={() => navigate(-1)}>Back</ButtonOutline>
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
