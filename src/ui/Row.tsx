function Row({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding: string;
}) {
  return (
    <div
      className={`border-b-lt-border dark:border-b-dr-border flex flex-1 items-center border-b ${padding}`}
    >
      {children}
    </div>
  );
}

function Cell({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return <div className={`w-full ${style ?? ""}`}>{children}</div>;
}

function EmptyCell() {
  return <div className="!h-4.5 !w-7.5" />;
}

function Title({ children }: { children: React.ReactNode }) {
  return <p className="!text-tx-tertary font-bold">{children}</p>;
}

function DualItem({
  primary,
  secondary,
  style,
}: {
  primary: string;
  secondary: string;
  style: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="!text-tx-dr-secondary dark:!text-tx-lt-secondary font-semibold">
        {primary}
      </p>
      <p className={`!text-tx-tertary ${style}`}>{secondary}</p>
    </div>
  );
}

Row.Cell = Cell;
Row.EmptyCell = EmptyCell;
Row.Title = Title;
Row.DualItem = DualItem;

export default Row;
