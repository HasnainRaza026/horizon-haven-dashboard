import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setDeleteGuestId } from "./guestSlice";
import { deleteGuest } from "../../services/apiGuests";

function useDeleteGuest({ onSuccess }: { onSuccess?: () => void }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {
    mutate: deleteGuestMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (guestId: number) => deleteGuest(guestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      dispatch(setDeleteGuestId(null));
      onSuccess?.();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { deleteGuestMutation, isPending, isError };
}

export default useDeleteGuest;
