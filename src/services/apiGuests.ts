import { supabase } from "./supabase";

export async function getGuests(
  filter: string | null,
  sort: string | null,
  page: number,
) {
  let query = supabase
    .from("guests")
    .select("*", { count: "exact" })
    .order("id", { ascending: true, nullsFirst: true });

  if (page) {
    query = query.range((page - 1) * 10, page * 10 - 1);
  }

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

  const { data: guests, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Guests data could not be loaded");
  }

  return { guests, total: count };
}

export async function getGuestById(id: number) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Guest data could not be loaded");
  }

  return data;
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
