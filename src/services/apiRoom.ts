import type { RoomType } from "../features/rooms/roomTypes.ts";
import supabase from "./supabase.ts";

export async function getRooms() {
  const { data: rooms, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.log(error);
    throw new Error("Rooms data could not be loaded");
  }

  return rooms;
}

export async function addRoom(room: RoomType) {
  const { data: newRoom, error } = await supabase
    .from("rooms")
    .insert([room])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Room data could not be added");
  }

  return newRoom;
}
