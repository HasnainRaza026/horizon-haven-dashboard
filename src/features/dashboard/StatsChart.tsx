import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import useFetchBookingsAfterDate from "./useFetchBookingsAfterDate";
import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";
import { format, parseISO } from "date-fns";
import downSampleData from "../../utils/downSampleData";

export default function StatsChart() {
  const { bookings, isError, isPending } = useFetchBookingsAfterDate();

  if (isPending) return <PageSpinner />;
  if (isError) return <NotFound />;

  const chartData = bookings.map((item) => {
    return {
      date: format(parseISO(item.checkin_date), "d MMM"),
      Sale: item.booking_status === "unconfirmed" ? 0 : item.amount,
    };
  });

  return (
    <div className="borde dark:border-dr-border h-[500px] w-full space-y-6 rounded-lg border border-black/18 px-6 py-5">
      <h3 className="dark:!text-tx-lt-primary text-2xl font-semibold">
        Revenue
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={downSampleData(chartData)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="Sale"
            stroke="#4e47d6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
