import FilterTab from "../../ui/FilterTab";
import { useSearchParams } from "react-router-dom";
import { modifySearchParam } from "../../utils/modifySearchParam";

function BookingFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (filter: string) => {
    searchParams.set("filter-bookings", filter);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <FilterTab
      initialState={modifySearchParam("filter-bookings", searchParams) || "All"}
    >
      <FilterTab.Tab title="All" onClickFn={() => handleFilter("all")} />
      <FilterTab.Tab
        title="Check Out"
        onClickFn={() => handleFilter("check-out")}
      />
      <FilterTab.Tab
        title="Check In"
        onClickFn={() => handleFilter("check-in")}
      />
      <FilterTab.Tab
        title="Unconfirmed"
        onClickFn={() => handleFilter("unconfirmed")}
      />
    </FilterTab>
  );
}

export default BookingFilter;
