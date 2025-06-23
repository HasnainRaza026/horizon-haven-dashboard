import { supabase } from "./supabase";

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

  return { user: user?.user };
}

export { login, getCurrentUser, logout };
