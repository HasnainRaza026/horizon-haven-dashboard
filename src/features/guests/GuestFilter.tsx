import FilterTab from "../../ui/FilterTab";

function GuestFilter() {
  return (
    <FilterTab initialState="All">
      <FilterTab.Tab title="All" />
      <FilterTab.Tab title="Active" />
      <FilterTab.Tab title="In Active" />
    </FilterTab>
  );
}

export default GuestFilter;
