interface LoginType {
  email: string;
  password: string;
}

interface SignupType {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role: string;
  address?: string;
  password: string;
  confirm_password: string;
}

export type { LoginType, SignupType };
