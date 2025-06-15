function InputFieldQuantity({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <label className="font-primary text-tx-tertary">{label}</label>
      <div className="flex w-full items-center">
        <input
          type="number"
          className="dark:text-tx-lt-primary w-full rounded-l-md border border-black/22 p-2.5 px-3 py-2 text-center text-sm outline-none placeholder:text-gray-500 dark:border-white/22"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button
          onClick={() => setValue(value - 1)}
          className="felx dark:text-tx-lt-primary h-[39px] w-[39px] items-center justify-center border-t border-b border-black/22 text-2xl hover:bg-gray-100 dark:border-white/22 dark:hover:bg-gray-800"
        >
          -
        </button>
        <button
          onClick={() => setValue(value + 1)}
          className="felx dark:text-tx-lt-primary h-[39px] w-[39px] items-center justify-center rounded-r-md border border-black/22 hover:bg-gray-100 dark:border-white/22 dark:hover:bg-gray-800"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default InputFieldQuantity;
