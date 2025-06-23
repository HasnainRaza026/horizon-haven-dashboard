import type { SettingType } from "../features/settings/settingTypes";
import { supabase } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    throw new Error("Settings data could not be loaded");
  }

  return data;
}

export async function updateSettings(
  settingsId: number,
  settings: SettingType,
) {
  const { data, error } = await supabase
    .from("settings")
    .update(settings)
    .eq("id", settingsId);

  if (error) {
    throw new Error("Settings data could not be updated");
  }

  return data;
}
