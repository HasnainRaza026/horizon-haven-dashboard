import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";

function useDeleteBooking({ onSuccess }: { onSuccess?: () => void }) {
  const queryClient = useQueryClient();
  const {
    mutate: deleteBookingMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (bookingId: number) => deleteBooking(bookingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      onSuccess?.();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { deleteBookingMutation, isPending, isError };
}

export default useDeleteBooking;
