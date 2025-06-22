import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { updateBookingStatus } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useUpdateBookingStatus({ onSuccess }: { onSuccess?: () => void }) {
  const { id } = useParams<{ id: string }>();
  const paramId = id || null;
  const queryClient = useQueryClient();
  const {
    mutate: updateBookingStatusMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: ({
      bookingId,
      status,
    }: {
      bookingId: number;
      status: string;
    }) => updateBookingStatus(bookingId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      if (paramId) {
        queryClient.invalidateQueries({ queryKey: ["booking", paramId] });
      }

      onSuccess?.();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { updateBookingStatusMutation, isPending, isError };
}

export default useUpdateBookingStatus;
