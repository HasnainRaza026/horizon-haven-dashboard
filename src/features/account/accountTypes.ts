interface UserType {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  address: string | null;
  role: string;
  avatar?: File | FileList | string | null;
}

export type { UserType };
