import { Outlet, useLocation } from "react-router";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import SortGuests from "./SortGuests";
import GuestFilter from "./GuestFilter";
import GuestRowBody from "./GuestRowBody";
import GuestRowHeader from "./GuestRowHeader";
import useFetchGuests from "./useFetchGuests";
import PageSpinner from "../../ui/PageSpinner";
import ConfirmModal from "../../ui/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setDeleteGuestId } from "./guestSlice";
import useDeleteGuest from "./useDeleteGuest";

function Guests() {
  const { guests, isError, isPending } = useFetchGuests();
  const { deleteGuestMutation, isPending: isDeleteGuestPending } =
    useDeleteGuest();
  const deleteGuestId = useSelector(
    (state: RootState) => state.guests.deleteGuestId,
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const isGuestDetailPage = location.pathname.split("/").length > 2;

  if (isGuestDetailPage) {
    return <Outlet />;
  }

  if (isPending) {
    return <PageSpinner />;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <>
      <div className="flex w-full flex-col gap-4.5">
        <div className="flex justify-between">
          <GuestFilter />
          <SortGuests />
        </div>
        <Table>
          <GuestRowHeader />
          {guests?.map((guest) => (
            <GuestRowBody key={guest.id} guest={guest} />
          ))}
          <Pagination />
        </Table>
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

export default Guests;
