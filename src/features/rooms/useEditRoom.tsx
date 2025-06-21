import { useMutation } from "@tanstack/react-query";
import { editRoom } from "../../services/apiRooms";
import { useQueryClient } from "@tanstack/react-query";
import type { RoomType } from "./roomTypes";
import { setEditRoomId } from "./roomSlice";
import { useDispatch } from "react-redux";

function useEditRoom() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    mutate: editRoomMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (room: RoomType) => editRoom(room),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
      dispatch(setEditRoomId(null));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { editRoomMutation, isPending, isError };
}

export default useEditRoom;
