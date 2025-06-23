import Spinner from "./Spinner";

const colorStyles = {
  red: "bg-[#C32424] hover:bg-[#920000]",
  blue: "bg-main hover:bg-main-hover",
};

function ButtonFill({
  children,
  color,
  style,
  onClickFn,
  type,
  isPending,
  isDisabled,
}: {
  children: React.ReactNode;
  color: "red" | "blue";
  style?: string;
  onClickFn?: () => void;
  type?: "button" | "submit" | "reset";
  isPending?: boolean;
  isDisabled?: boolean;
}) {
  return (
    <button
      className={`text-tx-lt-primary flex items-center justify-center gap-2 rounded-md px-3 py-2 font-semibold duration-200 ${colorStyles[color]} ${style} ${isDisabled ? "opacity-50" : ""}`}
      onClick={onClickFn ? () => onClickFn() : undefined}
      type={type}
      disabled={isPending || isDisabled}
    >
      {isPending && <Spinner />}
      {children}
    </button>
  );
}

export default ButtonFill;
