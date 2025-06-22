import { useQuery } from "@tanstack/react-query";
import { getGuestById } from "../../services/apiGuests";
import { useParams } from "react-router-dom";

function useFetchGuestById() {
  const { id } = useParams();

  const { data, isError, isPending } = useQuery({
    queryKey: ["guest", id],
    queryFn: () => getGuestById(Number(id)),
  });

  return {
    guest: data,
    isError,
    isPending,
  };
}

export default useFetchGuestById;
