import { useQuery } from "@tanstack/react-query";
import { getBookingById } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useFetchBookingById() {
  const { id } = useParams<{ id: string }>();

  const { data, isError, isPending } = useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBookingById(Number(id)),
  });

  return {
    booking: data,
    isPending,
    isError,
  };
}

export default useFetchBookingById;
