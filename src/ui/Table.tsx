function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-lt-border dark:border-dr-border bg-bg-lt-primary dark:bg-bg-dr-primary rounded-xl border">
      {children}
    </div>
  );
}

export default Table;
