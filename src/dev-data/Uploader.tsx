import { useState } from "react";
import { supabase } from "../services/supabase";
import { rooms } from "./data-rooms";
import { guests } from "./data-guests";
import { bookings } from "./data-bookings";

async function deleteRooms() {
  const { error } = await supabase.from("rooms").delete().neq("room_number", 0);
  if (error) console.log(error.message);
}

async function createRooms() {
  const { error } = await supabase.from("rooms").insert(rooms);
  if (error) console.log(error.message);
}

async function deleteGuests() {
  const { error } = await supabase.from("guests").delete().neq("id", 0);
  if (error) console.log(error.message);
}

async function createGuests() {
  const { error } = await supabase.from("guests").insert(guests);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().neq("id", 0);
  if (error) console.log(error.message);
}

async function createBookings() {
  // Bookings need a guest_id. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds, and then replace the original IDs in the booking data with the actual ones from the DB
  const { data: guestsIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestIds = guestsIds?.map((guest) => guest.id);

  const finalBookings = bookings.map((booking) => {
    const randomIndex = Math.floor(Math.random() * (allGuestIds?.length ?? 0));
    const randomId = allGuestIds?.[randomIndex];

    return { ...booking, guest_id: randomId };
  });

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

export default function Uploader() {
  const [isLoadingRooms, setIsLoadingRooms] = useState(false);
  const [isLoadingGuests, setIsLoadingGuests] = useState(false);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);
  async function uploadRooms() {
    setIsLoadingRooms(true);
    await deleteRooms();
    await createRooms();
    setIsLoadingRooms(false);
  }

  async function uploadGuests() {
    setIsLoadingGuests(true);
    await deleteGuests();
    await createGuests();
    setIsLoadingGuests(false);
  }

  async function uploadBookings() {
    setIsLoadingBookings(true);
    await deleteBookings();
    await createBookings();
    setIsLoadingBookings(false);
  }

  return (
    <div className="fixed flex !h-fit w-fit gap-4">
      <button
        onClick={uploadRooms}
        disabled={isLoadingRooms}
        className="rounded-md !bg-red-400 px-4 py-2 text-white"
      >
        {isLoadingRooms ? "Uploading..." : "Upload Rooms"}
      </button>
      <button
        onClick={uploadGuests}
        disabled={isLoadingGuests}
        className="rounded-md !bg-red-400 px-4 py-2 text-white"
      >
        {isLoadingGuests ? "Uploading..." : "Upload Guests"}
      </button>
      <button
        onClick={uploadBookings}
        disabled={isLoadingBookings}
        className="rounded-md !bg-red-400 px-4 py-2 text-white"
      >
        {isLoadingBookings ? "Uploading..." : "Upload Bookings"}
      </button>
    </div>
  );
}
