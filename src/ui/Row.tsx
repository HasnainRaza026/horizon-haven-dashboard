function Row({
  children,
  padding,
  noBorder,
}: {
  children: React.ReactNode;
  padding: string;
  noBorder?: boolean;
}) {
  return (
    <div
      className={`border-b-lt-border dark:border-b-dr-border flex flex-1 items-center border-b ${padding} ${
        noBorder ? "!border-b-0" : ""
      }`}
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
  return (
    <Cell style="!w-fit !h-fit">
      <div className="!h-4.5 !w-7.5" />
    </Cell>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h4 className="font-bold">{children}</h4>;
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
