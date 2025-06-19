interface RoomType {
  created_at?: string;
  image: string;
  room_number: number;
  capacity: number;
  price: number;
  discount?: number;
}

export type { RoomType };
