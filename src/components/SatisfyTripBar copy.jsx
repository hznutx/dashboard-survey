import { BarChart, Bar, Cell, YAxis, XAxis, Tooltip, Legend } from "recharts";

const colors = [
  "#d3a2f4",
  "#bddd49",
  "#fb9078",
  "#ffb35c",
  "#f681ef",
  "#799ce3",
  "#e3799e",
  "#63e9b1",
  "#79e3e3",
  "#8e79e3",
];

const data = [
  {
    num: "เฉลี่ย",
    pace: 6.4,
  },
  {
    num: "0-5 ",
    pace: 6.7,
  },
  {
    num: "5-10 ",
    pace: 6.5,
  },
  {
    num: "10-15 ",
    pace: 6.4,
  },
  {
    num: "15-20 ",
    pace: 6.3,
  },
  {
    num: "20-25 ",
    pace: 6.3,
  },
  {
    num: "25-30 ",
    pace: 6.4,
  },
  {
    num: "30-35 ",
    pace: 6.4,
  },
  {
    num: "35-40",
    pace: 6.3,
  },
  {
    num: ">40",
    pace: 6.4,
  },
];

export default function SatisfyRateBar() {
  return (
    <div style={{ textAlign: "center", marginTop: 5 }}>
      ความพึงพอใจในการเดินทางตามระยะทางการเดินทาง
      <BarChart
        layout="vertical"
        width={700}
        height={500}
        label
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis type="number" tickFormatter={(value) => `${value} คะแนน`} />
        // Change XAxis type to "number"
        <YAxis type="category" dataKey="num" /> // Change YAxis type to
        "category" and set dataKey to "num" // Adjust label position to "right"
        <Tooltip
          formatter={(value, num, entry) => {
            if (num === "pace") return [`${value} คะแนน`];

            return [num, value];
          }}
          contentStyle={{ textAlign: "center" }}
          labelStyle={{ marginBottom: "0.5em" }}
        />
        <Bar
          dataKey="pace"
          fill={Cell}
          radius={[0, 5, 5, 0]}
          label={{
            position: "right",
            formatter: (value) => `${value} คะแนน `,
          }}
        >
          {colors.map((value, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
