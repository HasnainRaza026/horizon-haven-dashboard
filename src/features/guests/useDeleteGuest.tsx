import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setDeleteGuestId } from "./guestSlice";
import { useNavigate } from "react-router-dom";
import { deleteGuest } from "../../services/apiGuests";

function useDeleteGuest() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: deleteGuestMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (guestId: number) => deleteGuest(guestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      dispatch(setDeleteGuestId(null));
      navigate("/guests");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { deleteGuestMutation, isPending, isError };
}

export default useDeleteGuest;
