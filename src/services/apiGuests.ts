import { supabase } from "./supabase";

export async function getGuests(filter: string | null, sort: string | null) {
  let query = supabase.from("guests").select("*");

  if (filter) {
    query =
      filter === "active"
        ? query.eq("booking_status", true)
        : query.eq("booking_status", false);
  }

  if (sort) {
    query =
      sort === "booking-low"
        ? query.order("booking_history", { ascending: true, nullsFirst: true })
        : query.order("booking_history", {
            ascending: false,
            nullsFirst: false,
          });
  }

  const { data: guests, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Guests data could not be loaded");
  }

  return guests;
}

export async function deleteGuest(guestId: number) {
  const { error: guestError } = await supabase
    .from("guests")
    .delete()
    .eq("id", guestId);

  if (guestError) {
    console.log(guestError);
    throw new Error("Guest data could not be deleted");
  }

  return guestId;
}
