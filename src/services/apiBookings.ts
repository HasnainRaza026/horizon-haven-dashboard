import { getDateDaysAgo } from "../utils/getDateDaysAgo";
import { supabase } from "./supabase";

export async function getBookings(
  filter: string | null,
  sort: string | null,
  page: number,
) {
  let query = supabase
    .from("bookings")
    .select("*, guests(first_name, last_name, email)", {
      count: "exact",
    })
    .order("id", { ascending: true, nullsFirst: true });

  if (page) {
    query = query.range((page - 1) * 10, page * 10 - 1);
  }

  if (filter) {
    query =
      filter === "unconfirmed"
        ? query.eq("booking_status", "unconfirmed")
        : filter === "check-in"
          ? query.eq("booking_status", "check-in")
          : query.eq("booking_status", "check-out");
  }

  if (sort) {
    query =
      sort === "date-recent"
        ? query.order("checkin_date", { ascending: true, nullsFirst: true })
        : sort === "date-old"
          ? query.order("checkin_date", {
              ascending: false,
              nullsFirst: false,
            })
          : sort === "amount-low"
            ? query.order("amount", {
                ascending: true,
                nullsFirst: true,
              })
            : query.order("amount", {
                ascending: false,
                nullsFirst: false,
              });
  }

  const { data: bookings, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Bookings data could not be loaded");
  }

  return { bookings, total: count };
}

export async function deleteBooking(bookingId: number) {
  const { error: bookingError } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (bookingError) {
    console.log(bookingError);
    throw new Error("Booking data could not be deleted");
  }

  return bookingId;
}

export async function updateBookingStatus(bookingId: number, status: string) {
  const { error: bookingError } = await supabase
    .from("bookings")
    .update({ booking_status: status })
    .eq("id", bookingId);

  if (bookingError) {
    console.log(bookingError);
    throw new Error("Booking status could not be updated");
  }

  return bookingId;
}

export async function getBookingById(id: number) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Booking data could not be loaded");
  }

  return data;
}

export async function getTodayBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(first_name, last_name, email)")
    .eq("checkin_date", new Date().toISOString().split("T")[0]);

  if (error) {
    console.log(error);
    throw new Error("Today bookings data could not be loaded");
  }

  if (data?.length === 0) {
    const { data: todayBookings, error } = await supabase
      .from("bookings")
      .select("*, guests(first_name, last_name, email)")
      .order("id", { ascending: true, nullsFirst: true })
      .or("booking_status.eq.unconfirmed,booking_status.eq.check-in")
      .limit(5);

    if (error) {
      console.log(error);
      throw new Error("Today bookings data could not be loaded");
    }

    return todayBookings;
  }

  return data;
}

export async function getBookingsAfterDate(days: number) {
  const date = getDateDaysAgo(days);
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(first_name, last_name, email)")
    .gte("checkin_date", date);

  if (error) {
    console.log(error);
    throw new Error("Bookings data could not be loaded");
  }

  return data;
}

export async function getCheckinAfterDate(days: number) {
  const date = getDateDaysAgo(days);
  const { error, count } = await supabase
    .from("bookings")
    .select("*", { count: "exact", head: true })
    .gte("checkin_date", date)
    .eq("booking_status", "check-in");

  if (error) {
    console.log(error);
    throw new Error("Checkin data could not be loaded");
  }

  return count;
}

export async function getCheckoutAfterDate(days: number) {
  const date = getDateDaysAgo(days);
  const { error, count } = await supabase
    .from("bookings")
    .select("*", { count: "exact", head: true })
    .gte("checkout_date", date)
    .eq("booking_status", "check-out");

  if (error) {
    console.log(error);
    throw new Error("Checkout data could not be loaded");
  }

  return count;
}
