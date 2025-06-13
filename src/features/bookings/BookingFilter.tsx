import FilterTab from "../../ui/FilterTab";

function BookingFilter() {
  return (
    <FilterTab initialState="All">
      <FilterTab.Tab title="All" />
      <FilterTab.Tab title="Check out" />
      <FilterTab.Tab title="Check in" />
      <FilterTab.Tab title="Unconfirmed" />
    </FilterTab>
  );
}

export default BookingFilter;
