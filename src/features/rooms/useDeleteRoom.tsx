import { useMutation } from "@tanstack/react-query";
import { deleteRoom } from "../../services/apiRooms";
import { useQueryClient } from "@tanstack/react-query";
import type { RoomType } from "./roomTypes";
import { setDeleteRoomId } from "./roomSlice";
import { useDispatch } from "react-redux";

function useDeleteRoom() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    mutate: deleteRoomMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (room: RoomType) => deleteRoom(room),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      dispatch(setDeleteRoomId(null));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { deleteRoomMutation, isPending, isError };
}

export default useDeleteRoom;
