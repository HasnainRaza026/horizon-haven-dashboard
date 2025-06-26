import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCheckoutAfterDate } from "../../services/apiBookings";

function useFetchCheckoutAfterDate() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("filter-dashboard")?.split("-")[0];
  const days = Number(filterValue) || 7;

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
