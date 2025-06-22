import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

function useFetchBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("filter-bookings");
  const sortValue = searchParams.get("sort-bookings");

  const filter = !filterValue || filterValue === "all" ? null : filterValue;
  const sort = sortValue ? sortValue : null;
  const page = Number(searchParams.get("page")) || 1;

  const { data, isError, isPending } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings(filter, sort, page),
  });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],
      queryFn: () => getBookings(filter, sort, page - 1),
    });
  }

  if (page < Math.ceil((data?.total || 0) / 10)) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],
      queryFn: () => getBookings(filter, sort, page + 1),
    });
  }

  return {
    bookings: data?.bookings || [],
    total: data?.total || 0,
    isError,
    isPending,
  };
}

export default useFetchBookings;
