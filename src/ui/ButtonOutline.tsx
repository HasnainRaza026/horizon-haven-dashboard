function ButtonOutline({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-bg-lt-primary hover:bg-main-highlight border-main text-main-hover dark:text-tx-lt-secondary dark:border-tx-lt-secondary dark:hover:text-tx-lt-primary dark:hover:border-tx-lt-primary rounded-md border px-3 py-2 text-sm font-semibold dark:bg-transparent dark:hover:bg-transparent">
      {children}
    </button>
  );
}

export default ButtonOutline;
