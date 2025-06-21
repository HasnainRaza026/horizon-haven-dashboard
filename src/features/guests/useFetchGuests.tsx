import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuests";
import { useSearchParams } from "react-router-dom";

function useFetchGuests() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("filter-guests");
  const sortValue = searchParams.get("sort-guests");

  const filter = !filterValue || filterValue === "all" ? null : filterValue;
  const sort = sortValue ? sortValue : null;

  const {
    data: guests,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["guests", filter, sort],
    queryFn: () => getGuests(filter, sort),
  });

  return { guests, isError, isPending };
}

export default useFetchGuests;
