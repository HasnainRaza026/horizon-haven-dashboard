import { useQuery } from "@tanstack/react-query";
import { getTodayBookings } from "../../services/apiBookings";

function useFetchTodayBookings() {
  const { data, isError, isPending } = useQuery({
    queryKey: ["bookings", "today"],
    queryFn: () => getTodayBookings(),
  });

  return {
    bookings: data || [],
    isError,
    isPending,
  };
}

export default useFetchTodayBookings;
