interface dataType {
  date: string;
  Sale: number;
}

function downSampleData(data: dataType[], interval = 10) {
  if (!Array.isArray(data) || interval <= 0) return [];

  const size = Math.ceil(data.length / interval);
  const result = [];

  for (let c = 0; c < interval; c++) {
    const start = c * size;
    const slice = data.slice(start, start + size);
    if (slice.length === 0) break;

    // Compute average Sale and choose a midpoint date
    const avgSale =
      slice.reduce((sum, item) => sum + item.Sale, 0) / slice.length;
    const midIndex = Math.floor(slice.length / 2);
    const representative = {
      date: slice[midIndex].date,
      Sale: Math.round(avgSale),
    };

    result.push(representative);
  }

  return result;
}

export default downSampleData;
