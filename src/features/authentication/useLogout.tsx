import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: logoutMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logoutMutation, isPending, isError };
}

export default useLogout;
