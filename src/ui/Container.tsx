function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg-lt-primary border-lt-border dark:border-dr-border dark:bg-bg-dr-primary w-[568px] space-y-7 rounded-2xl border px-12 py-7">
      {children}
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="dark:!text-tx-lt-primary text-xl font-semibold">
      {children}
    </h3>
  );
}

function Details({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-x-[60px] gap-y-7">{children}</div>
  );
}

function Detail({
  title,
  information,
  badge,
}: {
  title: string;
  information?: string;
  badge?: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h4>{title}</h4>
      {information ? (
        <p className="dark:!text-tx-lt-primary">{information}</p>
      ) : (
        badge
      )}
    </div>
  );
}

Container.Heading = Heading;
Container.Details = Details;
Container.Detail = Detail;

export default Container;
