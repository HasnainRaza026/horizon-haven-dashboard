import { useQuery } from "@tanstack/react-query";
import { getCheckinAfterDate } from "../../services/apiBookings";
import useGetDaysParams from "./useGetDaysParams";

function useFetchCheckinAfterDate() {
  const days = useGetDaysParams();

  const {
    data: checkin,
    isError: isErrorCheckin,
    isPending: isPendingCheckin,
  } = useQuery({
    queryKey: ["checkin", days],
    queryFn: () => getCheckinAfterDate(days),
  });

  return {
    checkin,
    isErrorCheckin,
    isPendingCheckin,
  };
}

export default useFetchCheckinAfterDate;
