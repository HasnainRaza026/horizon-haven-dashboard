import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { month: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { month: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { month: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { month: "May", uv: 1890, pv: 4800, amt: 2181 },
  { month: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { month: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

export default function StatsChart() {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#4e47d6"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
