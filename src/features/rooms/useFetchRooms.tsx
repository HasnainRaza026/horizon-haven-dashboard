import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRoom";

function useFetchRooms() {
  const {
    data: rooms,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return { rooms, isError, isPending };
}

export default useFetchRooms;
