function formatCurrency(value: number) {
  const num = Number(value);
  if (Number.isNaN(num)) return String(value);

  const abs = Math.abs(num);

  if (abs < 1e3) {
    return num.toString();
  }

  const UNITS = ["K", "M", "B", "T", "P", "E"];
  const idx = Math.floor(Math.log10(abs) / 3) - 1;
  const unit = UNITS[idx] || "";
  const scale = Math.pow(1000, idx + 1);

  const scaled = (num / scale).toFixed(2).replace(/\.?0+$/, "");

  return scaled + unit;
}

export default formatCurrency;
