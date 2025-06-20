export function modifySearchParam(key: string, searchParams: URLSearchParams) {
  const value = searchParams
    .get(key)
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return value;
}
