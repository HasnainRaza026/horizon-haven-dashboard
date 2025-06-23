import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useFetchSettings() {
  const {
    data: settings,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: () => getSettings(),
  });

  return { settings, isError, isPending };
}

export default useFetchSettings;
