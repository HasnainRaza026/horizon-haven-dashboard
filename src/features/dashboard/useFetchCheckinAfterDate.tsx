import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCheckinAfterDate } from "../../services/apiBookings";

function useFetchCheckinAfterDate() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("filter-dashboard")?.split("-")[0];
  const days = Number(filterValue) || 7;

  const {
    data: checkin,
    isError: isErrorCheckin,
    isPending: isPendingCheckin,
  } = useQuery({
    queryKey: ["checkin", days],
    queryFn: () => getCheckinAfterDate(days),
  });

  return {
    checkin: checkin,
    isErrorCheckin,
    isPendingCheckin,
  };
}

export default useFetchCheckinAfterDate;
