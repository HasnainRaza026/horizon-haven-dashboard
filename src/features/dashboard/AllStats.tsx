import { BiCalendarCheck, BiDownArrowCircle } from "react-icons/bi";
import Stats from "./Stats";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import useFetchBookingsAfterDate from "./useFetchBookingsAfterDate";

import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";
import useFetchCheckinAfterDate from "./useFetchCheckinAfterDate";
import useFetchCheckoutAfterDate from "./useFetchCheckoutAfterDate";
import formatCurrency from "../../utils/formatCurrency";
import useFetchRooms from "../rooms/useFetchRooms";
import useGetDaysParams from "./useGetDaysParams";

function AllStats() {
  const {
    bookings,
    isError: isErrorBookings,
    isPending: isPendingBookings,
  } = useFetchBookingsAfterDate();

  const { checkin, isErrorCheckin, isPendingCheckin } =
    useFetchCheckinAfterDate();

  const { checkout, isErrorCheckout, isPendingCheckout } =
    useFetchCheckoutAfterDate();

  const days = useGetDaysParams();

  const {
    rooms,
    isError: isErrorRooms,
    isPending: isPendingRooms,
  } = useFetchRooms();

  const revenue = bookings.reduce((acc, booking) => acc + booking.amount, 0);
  const occupancyRate = ((checkin || 12) / ((rooms?.length || 8) * days)) * 100;

  if (
    isPendingBookings ||
    isPendingCheckin ||
    isPendingCheckout ||
    isPendingRooms
  )
    return <PageSpinner />;

  if (isErrorBookings || isErrorCheckin || isErrorCheckout || isErrorRooms)
    return <NotFound message="Error loading stats" />;

  return (
    <div className="flex gap-9">
      <Stats
        title="Bookings"
        titleIcon={<BiCalendarCheck className="text-tx-tertary text-lg" />}
        value={bookings.length.toString() || "37"}
        trend={days === 7 ? "+5%" : days === 30 ? "-10%" : "+28%"}
      />
      <Stats
        title="Occupancy Rate"
        titleIcon={<MdOutlineBed className="text-tx-tertary text-lg" />}
        value={`${occupancyRate.toFixed(2)}%`}
        trend={days === 7 ? "-0.5%" : days === 30 ? "+1.2%" : "+0.8%"}
      />
      <Stats
        title="Revenue"
        titleIcon={
          <RiMoneyDollarCircleFill className="text-tx-tertary text-lg" />
        }
        value={`$${formatCurrency(revenue)}`}
        trend={days === 7 ? "+12%" : days === 30 ? "+28%" : "-35%"}
      />
      <Stats
        title="Checkin"
        titleIcon={<AiFillCheckCircle className="text-tx-tertary text-lg" />}
        value={checkin?.toString() || "12"}
        trend={days === 7 ? "-10%" : days === 30 ? "+25%" : "+30%"}
      />
      <Stats
        title="Checkout"
        titleIcon={<BiDownArrowCircle className="text-tx-tertary text-lg" />}
        value={checkout?.toString() || "8"}
        trend={days === 7 ? "-1.2%" : days === 30 ? "+2.8%" : "-4.5%"}
      />
    </div>
  );
}

export default AllStats;
