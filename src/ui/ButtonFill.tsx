const styles = {
  red: "bg-[#C32424] hover:bg-[#920000]",
  blue: "bg-main hover:bg-main-hover",
};

function ButtonFill({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "red" | "blue";
}) {
  return (
    <button
      className={`text-tx-lt-primary rounded-md px-3 py-2 font-semibold ${styles[color]}`}
    >
      {children}
    </button>
  );
}

export default ButtonFill;
