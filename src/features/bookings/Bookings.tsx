import { Outlet, useLocation } from "react-router";
import Pagination from "../../ui/Pagination";
import SortButton from "../../ui/SortButton";
import Table from "../../ui/Table";
import BookingFilter from "./BookingFilter";
import BookingRowBody from "./BookingRowBody";
import BookingRowHeader from "./BookingRowHeader";

function Bookings() {
  const location = useLocation();
  const isBookingDetailPage = location.pathname.split("/").length > 2;

  if (isBookingDetailPage) {
    return <Outlet />;
  }

  return (
    <>
      <div className="flex w-full flex-col gap-4.5">
        <div className="flex justify-between">
          <BookingFilter />
          <SortButton />
        </div>
        <Table>
          <BookingRowHeader />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <BookingRowBody />
          <Pagination />
        </Table>
      </div>
    </>
  );
}

export default Bookings;
