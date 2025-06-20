import type { UseFormRegisterReturn } from "react-hook-form";

function InputField({
  label,
  type,
  placeholder,
  id,
  error,
  register,
  isOptional,
  accept,
  defaultValue,
  isDisabled,
}: {
  label: string;
  type: string;
  placeholder?: string;
  id: string;
  error?: string;
  register: UseFormRegisterReturn;
  isOptional?: boolean;
  accept?: string;
  defaultValue?: string;
  isDisabled?: boolean;
}) {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <label htmlFor={id} className="font-primary text-tx-tertary">
        {label}{" "}
        {isOptional && <span className="text-xs italic">(optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        accept={accept || ""}
        placeholder={placeholder || ""}
        defaultValue={defaultValue || ""}
        {...register}
        disabled={isDisabled}
        className={`dark:text-tx-lt-primary w-full rounded-md border border-black/22 p-2.5 px-3 py-2 text-sm placeholder:text-gray-500 dark:border-white/22 ${
          isDisabled
            ? "text-tx-tertary dark:text-tx-tertary bg-gray-100 dark:bg-gray-800"
            : ""
        }`}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}

export default InputField;
