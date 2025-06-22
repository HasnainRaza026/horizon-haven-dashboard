import { parseISO, format } from "date-fns";

function formatDate(date: string) {
  const timestamp = date;
  const isoTimestamp = timestamp.replace(" ", "T");
  const dateObj = parseISO(isoTimestamp);

  const formattedDate = format(dateObj, "MMM dd, yyyy");

  return formattedDate;
}

export default formatDate;
