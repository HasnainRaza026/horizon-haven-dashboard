import ButtonFill from "./ButtonFill";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="bg-bg-lt-primary dark:bg-bg-dr-primary flex h-dvh w-full items-center justify-center">
      <h1 className="!text-tx-dr-primary dark:!text-tx-lt-secondary text-2xl">
        Something went wrong
      </h1>
      <p className="!text-tx-dr-primary dark:!text-tx-lt-secondary">
        {error.message}
      </p>
      <ButtonFill
        type="button"
        color="blue"
        onClickFn={() => window.location.replace("/")}
      >
        Back to Home
      </ButtonFill>
    </div>
  );
}

export default ErrorFallback;
