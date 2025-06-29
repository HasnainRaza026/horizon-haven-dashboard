import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const data = [
  { room_number: "Room 001", value: 400 },
  { room_number: "Room 002", value: 300 },
  { room_number: "Room 003", value: 300 },
  { room_number: "Room 004", value: 200 },
  { room_number: "Room 005", value: 500 },
  { room_number: "Room 006", value: 350 },
  { room_number: "Room 007", value: 250 },
  { room_number: "Room 008", value: 100 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#C23616",
  "#B381B3",
  "#7A00E6",
  "#0049e6",
];

function RoomsChart() {
  return (
    <div className="borde border-lt-border dark:border-dr-border h-[450px] w-[40%] rounded-lg border px-6 py-5">
      <h3 className="dark:!text-tx-lt-primary text-2xl font-semibold">
        Rooms Occupation
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="room_number"
            cornerRadius={4}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          {/* Adds custom tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Adds legend */}
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={12}
            height={36}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RoomsChart;
