import type { SignupType } from "../features/authentication/authTypes";
import { supabase } from "./supabase";

async function signup(data: SignupType) {
  const { data: user, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        phone_number: data.phone_number,
        role: data.role,
        address: data.address || null,
        avatar: "",
      },
    },
  });

  if (error) {
    throw new Error("Failed to signup");
  }

  return user;
}

async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Failed to login");
  }

  return data;
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Failed to logout");
  }
}

async function getCurrentUser() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Failed to get session");
  }

  if (!session) {
    return null;
  }

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw new Error("Failed to get user");
  }

  return user;
}

export { login, getCurrentUser, logout, signup };
