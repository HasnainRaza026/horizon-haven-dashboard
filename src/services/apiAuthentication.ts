import type { UserType } from "../features/account/accountTypes";
import type { SignupType } from "../features/authentication/authTypes";
import { addImage, deleteImage } from "./generalApi";
import { getImageUrl } from "./generalApi";
import { supabase, supabaseUrl } from "./supabase";

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
    throw new Error(`Failed to signup: ${error.message}`);
  }

  return user;
}

async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(`Failed to logout: ${error.message}`);
  }
}

async function getCurrentUser() {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error(`Failed to get session: ${error.message}`);
  }

  if (!session) {
    return null;
  }

  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(`Failed to get user: ${userError.message}`);
  }

  return user;
}

async function updateUser(
  userData: UserType,
  userId: string | null,
  oldAvatar: string | null,
) {
  const newUserData: Partial<UserType> = {
    first_name: userData.first_name,
    last_name: userData.last_name,
    phone_number: userData.phone_number,
    address: userData.address || "",
    role: userData.role,
  };

  if (userData.avatar) {
    try {
      let avatarFile: File;
      if (userData.avatar instanceof FileList) {
        avatarFile = userData.avatar[0];
      } else if (userData.avatar instanceof File) {
        avatarFile = userData.avatar;
      } else {
        throw new Error("Invalid avatar file");
      }

      const fileName = `${userId}-${avatarFile.name}`;

      if (oldAvatar) {
        const oldFileName = oldAvatar.replace(
          `${supabaseUrl}/storage/v1/object/public/user-avatar/`,
          "",
        );
        await deleteImage("user-avatar", oldFileName);
      }
      await addImage("user-avatar", fileName, avatarFile);

      const newImageUrl = getImageUrl("user-avatar", fileName);
      newUserData.avatar = newImageUrl;
    } catch (error) {
      throw new Error(`Failed to update user avatar: ${error}`);
    }
  }

  const { data, error } = await supabase.auth.updateUser({
    data: newUserData,
  });

  if (error) {
    throw new Error(`Failed to update user: ${error.message}`);
  }

  return data;
}

async function updatePassword(password: string) {
  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    throw new Error(`Failed to update password: ${error.message}`);
  }

  return;
}

export { login, getCurrentUser, logout, signup, updateUser, updatePassword };
