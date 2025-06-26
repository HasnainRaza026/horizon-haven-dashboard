export function modifySearchParam(
  key: string,
  searchParams: URLSearchParams,
  ifUppercase = true,
) {
  const value = searchParams
    .get(key)
    ?.split("-")
    .map((word) =>
      ifUppercase
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.charAt(0) + word.slice(1),
    )
    .join(" ");

  return value;
}
