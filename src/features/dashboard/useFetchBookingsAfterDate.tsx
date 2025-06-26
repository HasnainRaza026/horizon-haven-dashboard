import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

function useFetchBookingsAfterDate() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("filter-dashboard")?.split("-")[0];
  const days = Number(filterValue) || 7;

  const { data, isError, isPending } = useQuery({
    queryKey: ["bookings", days],
    queryFn: () => getBookingsAfterDate(days),
  });

  return {
    bookings: data || [],
    isError,
    isPending,
  };
}

export default useFetchBookingsAfterDate;
