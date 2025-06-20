import type { RoomType } from "../features/rooms/roomTypes.ts";
import { addImage, deleteImage, getImageUrl } from "./generalApi.ts";
import { supabase, supabaseUrl } from "./supabase.ts";

export async function getRooms() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.log(error);
    throw new Error("Rooms data could not be loaded");
  }

  return rooms;
}

export async function addRoom(room: RoomType) {
  const imageName = `room-${(room.image as unknown as File).name}`;

  await addImage("room-images", imageName, room.image as unknown as File);

  const publicUrl = getImageUrl("room-images", imageName);

  const { data: newRoom, error } = await supabase
    .from("rooms")
    .insert([{ ...room, image: publicUrl }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Room data could not be added");
  }

  return newRoom;
}

export async function deleteRoom(room: RoomType) {
  const imageName =
    typeof room.image === "string"
      ? room.image.replace(
          `${supabaseUrl}/storage/v1/object/public/room-images/`,
          "",
        )
      : null;

  if (imageName) deleteImage("room-images", imageName);

  const { error } = await supabase
    .from("rooms")
    .delete()
    .eq("room_number", room.room_number);

  if (error) {
    console.log(error);
    throw new Error("Room data could not be deleted");
  }
}

export async function editRoom(room: RoomType) {
  // Validate required fields
  if (!room.room_number || !room.capacity || !room.price) {
    throw new Error("Room number, capacity, and price are required");
  }

  const newRoom: Partial<RoomType> = {
    room_number: room.room_number,
    capacity: room.capacity,
    price: room.price,
    discount: room.discount,
  };

  // Handle image replacement
  if (room.newImage && room.newImage instanceof File) {
    try {
      const imageName = `room-${(room.newImage as unknown as File).name}`;

      if (room.image && typeof room.image === "string") {
        const oldImageName = room.image.replace(
          `${supabaseUrl}/storage/v1/object/public/room-images/`,
          "",
        );
        if (oldImageName) {
          await deleteImage("room-images", oldImageName);
        }
      }

      await addImage("room-images", imageName, room.newImage);

      const newImageUrl = getImageUrl("room-images", imageName);
      newRoom.image = newImageUrl;
    } catch (error) {
      console.error("Error handling image replacement:", error);
      throw new Error("Failed to update room image");
    }
  }

  // Update the room in the database
  const { data: editedRoom, error } = await supabase
    .from("rooms")
    .update(newRoom)
    .eq("room_number", room.room_number)
    .select();

  if (error) {
    console.error("Database error:", error);
    throw new Error("Room data could not be edited");
  }

  if (!editedRoom || editedRoom.length === 0) {
    throw new Error("Room not found or no changes were made");
  }

  return editedRoom[0];
}
