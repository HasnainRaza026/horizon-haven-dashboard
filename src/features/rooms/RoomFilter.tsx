import FilterTab from "../../ui/FilterTab";
import { useSearchParams } from "react-router-dom";
import { modifySearchParam } from "../../utils/modifySearchParam";

function RoomFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (filter: string) => {
    searchParams.set("filter-rooms", filter);
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <FilterTab
      initialState={modifySearchParam("filter-rooms", searchParams) || "All"}
    >
      <FilterTab.Tab title="All" onClickFn={() => handleFilter("all")} />
      <FilterTab.Tab
        title="Discount"
        onClickFn={() => handleFilter("discount")}
      />
      <FilterTab.Tab
        title="No Discount"
        onClickFn={() => handleFilter("no-discount")}
      />
    </FilterTab>
  );
}

export default RoomFilter;
