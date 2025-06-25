import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { updatePassword } from "../../services/apiAuthentication";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsUpdatePasswordModalOpen } from "./accountSlice";

function useUpdatePassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    mutate: updatePasswordMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (password: string) => updatePassword(password),
    onSuccess: async () => {
      dispatch(setIsUpdatePasswordModalOpen(false));
      queryClient.resetQueries();
      await supabase.auth.signOut();
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { updatePasswordMutation, isPending, isError };
}

export default useUpdatePassword;
