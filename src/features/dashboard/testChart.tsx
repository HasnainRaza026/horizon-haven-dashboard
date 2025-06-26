import { BarChart, Bar, XAxis, YAxis } from "recharts";

function testChart() {
  const testData = [{ name: "A", value: 100 }];

  return (
    <div style={{ width: 300, height: 200, border: "1px solid red" }}>
      <BarChart width={300} height={200} data={testData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default testChart;
