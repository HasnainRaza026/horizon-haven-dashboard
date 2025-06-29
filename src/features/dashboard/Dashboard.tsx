import WelcomeMessage from "./WelcomeMessage";
import DashboardFilter from "./DashboardFilter";
import AllStats from "./AllStats";
import BookingsToday from "./BookingsToday";
import RoomsChart from "./RoomsChart";
import StatsChart from "./StatsChart";

function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex items-center justify-between">
        <WelcomeMessage />
        <DashboardFilter />
      </div>
      <AllStats />
      <div className="flex justify-between gap-8">
        <StatsChart />
        <RoomsChart />
      </div>
      <BookingsToday />
    </div>
  );
}

export default Dashboard;
