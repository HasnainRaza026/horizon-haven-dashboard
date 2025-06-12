import { HiPlus } from "react-icons/hi2";

function AddButton() {
  return (
    <div className="text-tx-dr-primary dark:text-tx-lt-secondary dark:border-tx-lt-secondary dark:hover:border-tx-lt-primary dark:hover:text-tx-lt-primary flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(0,0,0,0.14)] hover:border-[rgba(0,0,0,0.6)] hover:text-black">
      <HiPlus className="text-xl" />
    </div>
  );
}

export default AddButton;
