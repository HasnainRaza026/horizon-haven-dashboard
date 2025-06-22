function NotFound({ message }: { message?: string }) {
  return (
    <h1 className="text-tx-dr-primary dark:text-tx-lt-secondary text-center text-lg font-medium">
      {message || "Not Found"}
    </h1>
  );
}

export default NotFound;
