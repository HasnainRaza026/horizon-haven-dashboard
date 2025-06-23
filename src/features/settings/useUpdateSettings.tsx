import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { updateSettings } from "../../services/apiSettings";
import type { SettingType } from "./settingTypes";

function useUpdateSettings() {
  const queryClient = useQueryClient();

  const {
    mutate: updateSettingsMutation,
    isPending,
    isError,
  } = useMutation({
    mutationFn: ({
      settingsId,
      settings,
    }: {
      settingsId: number;
      settings: SettingType;
    }) => updateSettings(settingsId, settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { updateSettingsMutation, isPending, isError };
}

export default useUpdateSettings;
