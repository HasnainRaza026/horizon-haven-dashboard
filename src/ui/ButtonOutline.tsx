function ButtonOutline({
  children,
  style,
  onClickFn,
}: {
  children: React.ReactNode;
  style?: string;
  onClickFn?: () => void;
}) {
  return (
    <button
      className={`bg-bg-lt-primary hover:bg-main-highlight border-main text-main-hover dark:text-tx-lt-secondary dark:border-tx-lt-secondary dark:hover:text-tx-lt-primary dark:hover:border-tx-lt-primary rounded-md border px-3 py-2 font-semibold dark:bg-transparent dark:hover:bg-transparent ${style || ""}`}
      onClick={onClickFn}
    >
      {children}
    </button>
  );
}

export default ButtonOutline;
