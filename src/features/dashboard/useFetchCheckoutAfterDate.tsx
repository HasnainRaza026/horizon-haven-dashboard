import { useQuery } from "@tanstack/react-query";
import { getCheckoutAfterDate } from "../../services/apiBookings";
import useGetDaysParams from "./useGetDaysParams";

function useFetchCheckoutAfterDate() {
  const days = useGetDaysParams();

  const {
    data: checkout,
    isError: isErrorCheckout,
    isPending: isPendingCheckout,
  } = useQuery({
    queryKey: ["checkout", days],
    queryFn: () => getCheckoutAfterDate(days),
  });

  return {
    checkout: checkout,
    isErrorCheckout,
    isPendingCheckout,
  };
}

export default useFetchCheckoutAfterDate;
