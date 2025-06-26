import useFetchUser from "../authentication/useFetchUser";

function WelcomeMessage() {
  const { userData } = useFetchUser();

  return (
    <div className="flex flex-col gap-1">
      <h3 className="dark:!text-tx-lt-primary text-3xl">
        Welcome back, {userData?.first_name}! 👋
      </h3>
      <h4 className="dark:text-tx-lt-secondary pl-1 text-lg font-medium">
        Here’s what’s happening today
      </h4>
    </div>
  );
}

export default WelcomeMessage;
