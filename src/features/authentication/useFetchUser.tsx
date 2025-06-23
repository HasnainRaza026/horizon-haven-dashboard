import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuthentication";

function useFetchUser() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(),
  });

  return {
    user,
    isLoading,
    isError,
    isAuthenticated: user?.user?.role === "authenticated",
  };
}

export default useFetchUser;
