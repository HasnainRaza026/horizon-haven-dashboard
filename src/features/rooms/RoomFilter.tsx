import FilterTab from "../../ui/FilterTab";

function RoomFilter() {
  return (
    <FilterTab initialState="All">
      <FilterTab.Tab title="All" />
      <FilterTab.Tab title="Discount" />
      <FilterTab.Tab title="No Discount" />
    </FilterTab>
  );
}

export default RoomFilter;
