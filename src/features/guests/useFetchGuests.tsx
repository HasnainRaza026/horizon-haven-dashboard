import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function useFetchGuests() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("filter-guests");
  const sortValue = searchParams.get("sort-guests");

  const filter = !filterValue || filterValue === "all" ? null : filterValue;
  const sort = sortValue ? sortValue : null;
  const page = Number(searchParams.get("page")) || 1;

  const { data, isError, isPending } = useQuery({
    queryKey: ["guests", filter, sort, page],
    queryFn: () => getGuests(filter, sort, page),
  });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["guests", filter, sort, page - 1],
      queryFn: () => getGuests(filter, sort, page - 1),
    });
  }

  if (page < Math.ceil((data?.total || 0) / 10)) {
    queryClient.prefetchQuery({
      queryKey: ["guests", filter, sort, page + 1],
      queryFn: () => getGuests(filter, sort, page + 1),
    });
  }

  return {
    guests: data?.guests || [],
    total: data?.total || 0,
    isError,
    isPending,
  };
}

export default useFetchGuests;
