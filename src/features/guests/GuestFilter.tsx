import FilterTab from "../../ui/FilterTab";
import { useSearchParams } from "react-router-dom";
import { modifySearchParam } from "../../utils/modifySearchParam";

function GuestFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (filter: string) => {
    searchParams.set("filter-guests", filter);
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <FilterTab
      initialState={modifySearchParam("filter-guests", searchParams) || "All"}
    >
      <FilterTab.Tab title="All" onClickFn={() => handleFilter("all")} />
      <FilterTab.Tab title="Active" onClickFn={() => handleFilter("active")} />
      <FilterTab.Tab
        title="In Active"
        onClickFn={() => handleFilter("in-active")}
      />
    </FilterTab>
  );
}

export default GuestFilter;
