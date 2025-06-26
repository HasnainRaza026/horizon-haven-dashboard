import FilterTab from "../../ui/FilterTab";
import { useSearchParams } from "react-router-dom";
import { modifySearchParam } from "../../utils/modifySearchParam";

function DashboardFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (filter: string) => {
    searchParams.set("filter-dashboard", filter);
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <FilterTab
      initialState={
        modifySearchParam("filter-dashboard", searchParams, false) || "7 days"
      }
    >
      <FilterTab.Tab title="7 days" onClickFn={() => handleFilter("7-days")} />
      <FilterTab.Tab
        title="30 days"
        onClickFn={() => handleFilter("30-days")}
      />
      <FilterTab.Tab
        title="90 days"
        onClickFn={() => handleFilter("90-days")}
      />
    </FilterTab>
  );
}

export default DashboardFilter;
