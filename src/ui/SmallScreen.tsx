import Logo from "./Logo";

function SmallScreen() {
  return (
    <div className="bg-bg-lt-primary dark:bg-bg-dr-primary flex h-dvh w-full flex-col items-center justify-center gap-4">
      <Logo isLogin={true} />
      <h2 className="!text-tx-dr-primary dark:!text-tx-lt-secondary">
        Screen too Small, try on a bigger screen
      </h2>
    </div>
  );
}

export default SmallScreen;
