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
      <div className="bg-bg-lt-primary dark:bg-bg-dr-primary border-lt-border dark:border-dr-border flex gap-1 rounded-md border p-1">
        {children}
      </div>
    </FilterTabContext.Provider>
  );
}

function Tab({ title, onClickFn }: { title: string; onClickFn: () => void }) {
  const { handleActive, active } = useContext(FilterTabContext);

  return (
    <button
      className={`font-primary text-tx-dr-primary dark:text-bg-lt-primary rounded-md px-2.5 py-1.5 text-sm font-semibold ${
        active === title ? "bg-main text-tx-lt-primary" : ""
      }`}
      onClick={() => {
        handleActive(title);
        onClickFn();
      }}
    >
      {title}
    </button>
  );
}

FilterTab.Tab = Tab;

export default FilterTab;
