import { BiCalendarCheck, BiDownArrowCircle } from "react-icons/bi";
import Stats from "./Stats";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdCancel, MdOutlineBed } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import useFetchBookingsAfterDate from "./useFetchBookingsAfterDate";

import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";
import useFetchCheckinAfterDate from "./useFetchCheckinAfterDate";
import useFetchCheckoutAfterDate from "./useFetchCheckoutAfterDate";

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

  if (isPendingBookings || isPendingCheckin || isPendingCheckout)
    return <PageSpinner />;

  if (isErrorBookings || isErrorCheckin || isErrorCheckout)
    return <NotFound message="Bookings not found" />;

  return (
    <div className="flex gap-9">
      <Stats
        title="Bookings"
        titleIcon={<BiCalendarCheck className="text-tx-tertary text-lg" />}
        value={bookings.length.toString() || "37"}
        trend="+5%"
      />
      <Stats
        title="Occupancy Rate"
        titleIcon={<MdOutlineBed className="text-tx-tertary text-lg" />}
        value={"75%"}
        trend="-0.5%"
      />
      <Stats
        title="Revenue"
        titleIcon={
          <RiMoneyDollarCircleFill className="text-tx-tertary text-lg" />
        }
        value={"$2,930"}
        trend="+12%"
      />
      <Stats
        title="Checkin"
        titleIcon={<AiFillCheckCircle className="text-tx-tertary text-lg" />}
        value={checkin?.toString() || "12"}
        trend="+10%"
      />
      <Stats
        title="Checkout"
        titleIcon={<BiDownArrowCircle className="text-tx-tertary text-lg" />}
        value={checkout?.toString() || "8"}
        trend="-1.2%"
      />
      <Stats
        title="Cancelled"
        titleIcon={<MdCancel className="text-tx-tertary text-lg" />}
        value={"3"}
        trend="-0.2%"
      />
    </div>
  );
}

export default AllStats;
