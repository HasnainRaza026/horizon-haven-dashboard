import { Outlet, useLocation } from "react-router";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import SortGuests from "./SortGuests";
import GuestFilter from "./GuestFilter";
import GuestRowBody from "./GuestRowBody";
import GuestRowHeader from "./GuestRowHeader";

function Guests() {
  const location = useLocation();
  const isGuestDetailPage = location.pathname.split("/").length > 2;

  if (isGuestDetailPage) {
    return <Outlet />;
  }

  return (
    <div className="flex w-full flex-col gap-4.5">
      <div className="flex justify-between">
        <GuestFilter />
        <SortGuests />
      </div>
      <Table>
        <GuestRowHeader />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <GuestRowBody />
        <Pagination />
      </Table>
    </div>
  );
}

export default Guests;
