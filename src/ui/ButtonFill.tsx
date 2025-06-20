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
}: {
  children: React.ReactNode;
  color: "red" | "blue";
  style?: string;
  onClickFn?: () => void;
  type?: "button" | "submit" | "reset";
  isPending?: boolean;
}) {
  return (
    <button
      className={`text-tx-lt-primary flex items-center justify-center gap-2 rounded-md px-3 py-2 font-semibold duration-200 ${colorStyles[color]} ${style}`}
      onClick={onClickFn ? () => onClickFn() : undefined}
      type={type}
      disabled={isPending}
    >
      {isPending && <Spinner />}
      {children}
    </button>
  );
}

export default ButtonFill;
