import { useSearchParams } from "react-router-dom";

function useGetDaysParams() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("filter-dashboard")?.split("-")[0];
  const days = Number(filterValue) || 7;

  return days;
}

export default useGetDaysParams;
