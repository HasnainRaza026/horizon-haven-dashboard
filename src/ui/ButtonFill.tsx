const colorStyles = {
  red: "bg-[#C32424] hover:bg-[#920000]",
  blue: "bg-main hover:bg-main-hover",
};

function ButtonFill({
  children,
  color,
  style,
  onClickFn,
}: {
  children: React.ReactNode;
  color: "red" | "blue";
  style?: string;
  onClickFn?: () => void;
}) {
  return (
    <button
      className={`text-tx-lt-primary rounded-md px-3 py-2 font-semibold duration-200 ${colorStyles[color]} ${style}`}
      onClick={onClickFn ? () => onClickFn() : undefined}
    >
      {children}
    </button>
  );
}

export default ButtonFill;
