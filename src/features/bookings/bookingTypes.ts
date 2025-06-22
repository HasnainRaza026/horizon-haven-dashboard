interface BookingType {
  id: number;
  created_at?: string;
  room_number: number;
  guest_id: number;
  guests: {
    first_name: string;
    last_name: string;
    email: string;
  };
  stay: number;
  checkin_date: string;
  checkout_date: string;
  booking_status: string;
  amount: number;
  total_persons: number;
  breakfast?: boolean;
}

export type { BookingType };
