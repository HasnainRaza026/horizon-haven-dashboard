import { Outlet, useLocation } from "react-router";
import Pagination from "../../ui/Pagination";
import SortButton from "../../ui/SortButton";
import Table from "../../ui/Table";
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
        <SortButton />
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
