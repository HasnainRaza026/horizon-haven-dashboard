import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import { useSearchParams } from "react-router-dom";

function useFetchRooms() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("filter-rooms");
  const sortValue = searchParams.get("sort-rooms");

  const filter = !filterValue || filterValue === "all" ? null : filterValue;
  const sort = sortValue ? sortValue : null;

  const {
    data: rooms,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["rooms", filter, sort],
    queryFn: () => getRooms(filter, sort),
  });

  return { rooms, isError, isPending };
}

export default useFetchRooms;
