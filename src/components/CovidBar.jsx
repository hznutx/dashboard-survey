import { BarChart, Bar, Cell, YAxis, XAxis, Tooltip, Legend } from "recharts";

const colors = [
  "#616df3",
  "#616df3",
  "#616df3",
  "#28eaff",
  "#28eaff",
  "#28eaff",
  "#d43157",
  "#d43157",
  "#d43157",
  "#FFBB28",
  "#FFBB28",
  "#FFBB28",
];

const data = [
  {
    num: "1",
    pace: 1,
  },
  {
    num: "2",
    pace: 1,
  },
  {
    num: "3",
    pace: 3,
  },
  {
    num: "4",
    pace: 5,
  },
  {
    num: "5",
    pace: 18,
  },
  {
    num: "6",
    pace: 21,
  },
  {
    num: "7",
    pace: 24,
  },
  {
    num: "8",
    pace: 18,
  },
  {
    num: "9",
    pace: 5,
  },
  {
    num: "10",
    pace: 4,
  },
];

export default function SatisfyRateBar() {
  return (
    <div style={{ textAlign: "center", marginTop: 5 }}>
      อัตราการเดินทางจากผลกระทบโควิด ตามกลุ่มอายุ
      <BarChart
        layout="horizontal"
        width={650}
        height={500}
        label
        data={data}
        margin={{
          top: 60,
          right: 0,
          left: 40,
          bottom: 5,
        }}
      >
        <YAxis type="number" tickFormatter={(value) => `${value}%`} />
        // Change XAxis type to "number"
        <XAxis type="category" dataKey="num" /> // Change YAxis type to
        "category" and set dataKey to "num" // Adjust label position to "right"
        <Tooltip
          formatter={(value, num, entry) => {
            if (num === "pace") return [`${value}%`];

            return [num, value];
          }}
          contentStyle={{ textAlign: "center" }}
          labelStyle={{ marginBottom: "0.5em" }}
        />
        <Bar
          dataKey="pace"
          fill={Cell}
          radius={[5, 5, 0, 0]}
          label={{
            position: "top",
            formatter: (value) => `${value}%`,
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
