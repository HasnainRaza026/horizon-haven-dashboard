import { useForm } from "react-hook-form";
import Container from "../../ui/Container";
import InputField from "../../ui/InputField";
import type { RoomType } from "./roomTypes";

// interface EditRoomForm {
//   roomNumber: string;
//   capacity: string;
//   price: string;
//   discount: string;
//   image: FileList;
// }

function RoomForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomType>();

  const onSubmit = (data: RoomType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Container.Grid>
        <InputField
          label="Room Number"
          type="text"
          id="room_number"
          placeholder="001"
          register={register("room_number", {
            required: "This field is required",
          })}
          error={errors?.room_number?.message}
        />
        <InputField
          label="Capacity"
          type="text"
          id="capacity"
          placeholder="5"
          register={register("capacity", {
            required: "This field is required",
          })}
          error={errors?.capacity?.message}
        />
        <InputField
          label="Price"
          type="text"
          id="price"
          placeholder="100"
          register={register("price", {
            required: "This field is required",
          })}
          error={errors?.price?.message}
        />
        <InputField
          label="Discount"
          type="text"
          id="discount"
          placeholder="10"
          register={register("discount", {
            required: "This field is required",
          })}
          error={errors?.discount?.message}
        />
        <InputField
          label="Room Image"
          type="file"
          id="image"
          placeholder="Upload image"
          accept="image/*"
          register={register("image")}
          error={errors?.image?.message}
        />
      </Container.Grid>
    </form>
  );
}

export default RoomForm;
