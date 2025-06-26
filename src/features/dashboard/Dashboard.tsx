import WelcomeMessage from "./WelcomeMessage";
import DashboardFilter from "./DashboardFilter";
import AllStats from "./AllStats";
import BookingsToday from "./BookingsToday";
import StatsChart from "./StatsChart";

function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex items-center justify-between">
        <WelcomeMessage />
        <DashboardFilter />
      </div>
      <AllStats />
      <BookingsToday />
      <StatsChart />
    </div>
  );
}

export default Dashboard;
