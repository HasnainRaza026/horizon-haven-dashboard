import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/apiAuthentication";
import type { UserType } from "./accountTypes";
import useFetchUser from "../authentication/useFetchUser";

function useUpdateAccount() {
  const queryClient = useQueryClient();
  const { user } = useFetchUser();

  const {
    mutate: updateAccountMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (userData: UserType) =>
      updateUser(
        userData,
        user?.user?.id || null,
        user?.user?.user_metadata.avatar || null,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { updateAccountMutation, isPending, isError };
}

export default useUpdateAccount;
