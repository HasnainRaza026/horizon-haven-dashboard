import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuthentication";
import type { SignupType } from "./authTypes";

function useSignup() {
  const {
    mutate: createUserMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (data: SignupType) => signup(data),
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });

  return { createUserMutation, isPending, isError };
}

export default useSignup;
