import { useForm } from "react-hook-form";
import Container from "../../ui/Container";
import InputField from "../../ui/InputField";
import type { RoomType } from "./roomTypes";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import ButtonFill from "../../ui/ButtonFill";
import ButtonOutline from "../../ui/ButtonOutline";
import { setDeleteRoomId, setEditRoomId, setIsAddModalOpen } from "./roomSlice";
import useFetchRooms from "./useFetchRooms";
import useAddRoom from "./useAddRoom";
import useEditRoom from "./useEditRoom";

function RoomForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RoomType>();

  const { isAddModalOpen, editRoomId } = useSelector(
    (state: RootState) => state.rooms,
  );

  const { rooms } = useFetchRooms();
  const { addRoomMutation, isPending: isAddPending } = useAddRoom();
  const { editRoomMutation, isPending: isEditPending } = useEditRoom();

  const room = rooms?.find((room) => room.room_number === editRoomId);

  // Watch form values for changes
  const watchedValues = watch(["capacity", "price", "discount", "image"]);

  const hasEdited =
    room?.capacity !== Number(watchedValues[0]) ||
    room?.price !== Number(watchedValues[1]) ||
    room?.discount !== (watchedValues[2] ? Number(watchedValues[2]) : null) ||
    (watchedValues[3] as FileList)?.length > 0;

  const onSubmitAddRoom = (data: RoomType) => {
    const newRoom: RoomType = {
      ...data,
      room_number: Number(data.room_number),
      capacity: Number(data.capacity),
      image: data.image instanceof FileList ? data.image[0] : data.image,
      price: Number(data.price),
      discount: data.discount ? Number(data.discount) : null,
    };

    addRoomMutation(newRoom);
  };

  const onSubmitEditRoom = (data: RoomType) => {
    const editedRoom = {
      ...data,
      room_number: Number(data.room_number),
      capacity: Number(data.capacity),
      image: room.image,
      newImage: data.image instanceof FileList ? data.image[0] : undefined,
      price: Number(data.price),
      discount: data.discount ? Number(data.discount) : null,
    };
    editRoomMutation(editedRoom);
  };

  return (
    <form
      onSubmit={handleSubmit(
        isAddModalOpen ? onSubmitAddRoom : onSubmitEditRoom,
      )}
      className="space-y-7"
    >
      <Container.Grid>
        <InputField
          defaultValue={room ? `00${room.room_number}` : undefined}
          isDisabled={isEditPending || isAddPending || Boolean(editRoomId)}
          label="Room Number"
          type="number"
          id="room_number"
          placeholder="001"
          register={register("room_number", {
            required: "This field is required",
          })}
          error={errors?.room_number?.message}
        />
        <InputField
          defaultValue={room?.capacity}
          isDisabled={isEditPending || isAddPending}
          label="Capacity"
          type="number"
          id="capacity"
          placeholder="5"
          register={register("capacity", {
            required: "This field is required",
          })}
          error={errors?.capacity?.message}
        />
        <InputField
          defaultValue={room?.price}
          isDisabled={isEditPending || isAddPending}
          label="Price"
          type="number"
          id="price"
          placeholder="100"
          register={register("price", {
            required: "This field is required",
          })}
          error={errors?.price?.message}
        />
        <InputField
          defaultValue={room?.discount}
          isDisabled={isEditPending || isAddPending}
          label="Discount"
          type="number"
          id="discount"
          placeholder="10"
          register={register("discount")}
          error={errors?.discount?.message}
        />
        <InputField
          isDisabled={isEditPending || isAddPending}
          label="Room Image"
          type="file"
          id="image"
          placeholder="Upload image"
          accept="image/*"
          register={register("image", {
            required: isAddModalOpen ? "This field is required" : false,
          })}
          error={errors?.image?.message}
        />
      </Container.Grid>
      <Container.Button style="gap-4">
        <ButtonFill
          color="blue"
          style="text-sm"
          type="submit"
          isPending={isAddPending || isEditPending}
          isDisabled={!hasEdited}
        >
          {isAddPending
            ? "Adding"
            : isEditPending
              ? "Updating"
              : isAddModalOpen
                ? "Add"
                : "Update"}
        </ButtonFill>
        <ButtonOutline
          style="text-sm"
          type="button"
          disabled={isAddPending || isEditPending}
          onClickFn={() => {
            reset();
            dispatch(setIsAddModalOpen(false));
            dispatch(setDeleteRoomId(null));
            dispatch(setEditRoomId(null));
          }}
        >
          Cancel
        </ButtonOutline>
      </Container.Button>
    </form>
  );
}

export default RoomForm;
