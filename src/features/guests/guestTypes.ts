interface GuestType {
  created_at?: string;
  id: number;
  nationality: string;
  national_id: string;
  first_name: string;
  last_name: string;
  email: string;
  booking_history: number;
  booking_status: boolean;
}

export type { GuestType };
