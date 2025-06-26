import WelcomeMessage from "./WelcomeMessage";
import DashboardFilter from "./DashboardFilter";
import AllStats from "./AllStats";
import BookingsToday from "./BookingsToday";

function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-10">
      <div className="flex items-center justify-between">
        <WelcomeMessage />
        <DashboardFilter />
      </div>
      <AllStats />
      <BookingsToday />
    </div>
  );
}

export default Dashboard;
