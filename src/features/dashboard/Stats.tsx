import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

function Stats({
  title,
  titleIcon,
  value,
  trend,
}: {
  title: string;
  titleIcon: React.ReactNode;
  value: string;
  trend: string;
}) {
  const isTrendPositive = trend.startsWith("+");

  return (
    <div className="dark:bg-bg-dr-primary dark:border-dr-border flex flex-col gap-3 rounded-lg border border-black/18 px-5 py-4">
      <div className="flex items-center gap-1.5">
        {titleIcon}
        <h4 className="font-medium">{title}</h4>
      </div>
      <div className="flex items-baseline gap-4">
        <p className="!font-secondary dark:!text-tx-lt-primary text-[28px]">
          {value}
        </p>
        <div className="flex gap-1.5">
          {isTrendPositive ? (
            <FaArrowTrendUp className="text-trend-green text-lg" />
          ) : (
            <FaArrowTrendDown className="text-trend-red text-lg" />
          )}
          <p
            className={`!font-secondary text-sm font-medium ${
              isTrendPositive ? "!text-trend-green" : "!text-trend-red"
            }`}
          >
            {trend}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
