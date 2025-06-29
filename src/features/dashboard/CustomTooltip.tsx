import type { TooltipProps } from "recharts";
import type {
  NameType,
  ValueType,
  Payload,
} from "recharts/types/component/DefaultTooltipContent";

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  payload?: Payload<ValueType, NameType>[];
  label?: string;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  // ...

  if (!active || !payload || payload.length === 0) return null;

  const item = payload[0];
  const color = item.payload.fill;

  return (
    <div className="bg-bg-lt-primary dark:bg-bg-dr-primary border-lt-border dark:border-dr-border flex gap-2 rounded-md border px-3 py-2">
      <div
        style={{ backgroundColor: color }}
        className="h-4 w-4 rounded-sm"
      ></div>
      <p className="!text-tx-dr-primary dark:!text-tx-lt-primary text-sm font-semibold">
        {item.name}:
      </p>
      <p className="!text-tx-dr-primary dark:!text-tx-lt-primary text-sm font-semibold">
        {item.value}
      </p>
    </div>
  );
}

export default CustomTooltip;
