const styles = {
  yellow: "text-bdg-yellow-primary bg-bdg-yellow-secondary",
  green: "text-bdg-green-primary bg-bdg-green-secondary",
  red: "text-bdg-red-primary bg-bdg-red-secondary",
  black:
    "text-bdg-lt-black-primary bg-bdg-lt-black-secondary dark:text-bdg-dr-black-primary",
};

function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "yellow" | "green" | "red" | "black";
}) {
  return (
    <div
      className={`w-fit rounded-full px-3.5 py-1.5 text-xs font-bold ${styles[color]}`}
    >
      {children}
    </div>
  );
}

export default Badge;
