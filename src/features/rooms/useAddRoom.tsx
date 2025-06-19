import { useMutation } from "@tanstack/react-query";
import { addRoom } from "../../services/apiRoom";
import { useQueryClient } from "@tanstack/react-query";
import type { RoomType } from "./roomTypes";

function useAddRoom(roomData: RoomType) {
  const queryClient = useQueryClient();
  const {
    mutate: addRoomMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: () => addRoom(roomData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      //   successToast("Room Added Successfully");
    },
    onError: () => {
      //   errorToast(err.message);
    },
  });

  return { addRoomMutation, isPending, isError };
}

export default useAddRoom;
