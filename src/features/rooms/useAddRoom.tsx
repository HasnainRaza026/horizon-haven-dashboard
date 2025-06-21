import { useMutation } from "@tanstack/react-query";
import { addRoom } from "../../services/apiRooms";
import { useQueryClient } from "@tanstack/react-query";
import type { RoomType } from "./roomTypes";
import { useDispatch } from "react-redux";
import { setIsAddModalOpen } from "./roomSlice";

function useAddRoom() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const {
    mutate: addRoomMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (roomData: RoomType) => addRoom(roomData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      dispatch(setIsAddModalOpen(false));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { addRoomMutation, isPending, isError };
}

export default useAddRoom;
