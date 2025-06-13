function Badge({
  children,
  style,
}: {
  children: React.ReactNode;
  style: string;
}) {
  return (
    <div className={`rounded-full px-3.5 py-1.5 text-xs font-bold ${style}`}>
      {children}
    </div>
  );
}

export default Badge;
