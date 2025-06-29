function ButtonOutline({
  children,
  style,
  onClickFn,
  type,
  disabled,
}: {
  children: React.ReactNode;
  style?: string;
  onClickFn?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <button
      className={`bg-bg-lt-primary hover:bg-main-highlight border-main text-main-hover dark:text-tx-lt-secondary dark:border-tx-lt-secondary dark:hover:text-tx-lt-primary dark:hover:border-tx-lt-primary rounded-md border px-3 py-2 font-semibold dark:bg-transparent dark:hover:bg-transparent ${style || ""}`}
      onClick={onClickFn}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonOutline;
