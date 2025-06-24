import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { LoginType } from "./authTypes";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/apiAuthentication";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: loginMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: ({ email, password }: LoginType) => login(email, password),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { loginMutation, isPending, isError };
}

export default useLogin;
