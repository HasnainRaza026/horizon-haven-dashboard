import { createContext, useContext, useState } from "react";

const FilterTabContext = createContext<{
  active: string;
  setActive: (active: string) => void;
  handleActive: (val: string) => void;
}>({
  active: "",
  setActive: () => {},
  handleActive: () => {},
});

function FilterTab({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: string;
}) {
  const [active, setActive] = useState(initialState);

  const handleActive = (val: string) => {
    setActive(val);
  };

  return (
    <FilterTabContext.Provider value={{ active, setActive, handleActive }}>
      <div className="bg-bg-lt-primary dark:bg-bg-dr-primary flex gap-1 rounded-md p-1 shadow">
        {children}
      </div>
    </FilterTabContext.Provider>
  );
}

function Tab({ title }: { title: string }) {
  const { handleActive, active } = useContext(FilterTabContext);

  return (
    <button
      className={`font-primary text-tx-dr-primary dark:text-bg-lt-primary rounded-md px-2.5 py-1.5 text-sm font-semibold ${
        active === title ? "bg-main text-tx-lt-primary" : ""
      }`}
      onClick={() => handleActive(title)}
    >
      {title}
    </button>
  );
}

FilterTab.Tab = Tab;

export default FilterTab;
