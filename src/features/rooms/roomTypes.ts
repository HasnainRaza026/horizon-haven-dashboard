interface RoomType {
  created_at?: string;
  image?: string | File | FileList;
  newImage?: File | null;
  room_number: number;
  capacity: number;
  price: number;
  discount?: number | null;
}

export type { RoomType };
