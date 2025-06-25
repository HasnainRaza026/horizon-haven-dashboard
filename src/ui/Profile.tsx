import { FaUserCircle } from "react-icons/fa";
import useFetchUser from "../features/authentication/useFetchUser";
import PageSpinner from "./PageSpinner";
import NotFound from "./NotFound";

function Profile() {
  const { userData, isLoading, isError } = useFetchUser();

  if (isLoading) {
    return <PageSpinner />;
  }

  if (isError) {
    return <NotFound message="Something went wrong" />;
  }

  return (
    <div className="flex items-center gap-4">
      {userData?.avatar ? (
        <img
          src={userData?.avatar}
          alt="Avatar"
          className="h-12 w-12 rounded-full object-cover"
        />
      ) : (
        <FaUserCircle className="text-tx-dr-primary dark:text-tx-lt-secondary text-5xl" />
      )}
      <div className="space-y-0.5">
        <p className="dark:!text-tx-lt-primary text-lg font-semibold">
          {userData?.first_name} {userData?.last_name}
        </p>
        <p className="!text-tx-tertary text-sm font-medium">{userData?.role}</p>
      </div>
    </div>
  );
}

export default Profile;
