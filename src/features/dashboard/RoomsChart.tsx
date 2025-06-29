import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import useFetchBookingsAfterDate from "./useFetchBookingsAfterDate";
import PageSpinner from "../../ui/PageSpinner";
import NotFound from "../../ui/NotFound";

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
  const data = [
    { room_number: "Room 001", value: 0 },
    { room_number: "Room 002", value: 0 },
    { room_number: "Room 003", value: 0 },
    { room_number: "Room 004", value: 0 },
    { room_number: "Room 005", value: 0 },
    { room_number: "Room 006", value: 0 },
    { room_number: "Room 007", value: 0 },
    { room_number: "Room 008", value: 0 },
  ];
  const { bookings, isError, isPending } = useFetchBookingsAfterDate();

  if (isPending) return <PageSpinner />;
  if (isError) return <NotFound />;

  for (let i = 0; i < bookings.length; i++) {
    const roomNumber = bookings[i].room_number;
    for (let j = 0; j < data.length; j++) {
      const dataRoomNumber = Number(data[j].room_number.split(" ")[1][2]);
      if (dataRoomNumber === roomNumber) {
        data[j].value += 1;
      }
    }
  }

  return (
    <div className="borde dark:border-dr-border h-[500px] w-[40%] rounded-lg border border-black/18 px-6 py-5">
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
            {data.map((_, index) => (
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
