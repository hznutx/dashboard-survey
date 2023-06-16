import {
  BarChart,
  Bar,
  Cell,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
  { group: "ก่อนโควิด ", rate: 1.86, child: 1 },
  { group: "ช่วงโควิด (0-22 ปี)", rate: 1.11, child: 1 },
  { group: "หลังโควิด", rate: 1.53, child: 1 },
  { group: "ก่อนโควิด", rate: 1.86, adult: 2 },
  { group: "ช่วงโควิด (> 22 ปี)", rate: 1.11, adult: 2 },
  { group: "หลังโควิด", rate: 1.87, adult: 2 },
  { group: "ก่อนโควิด", rate: 1.11, old: 3 },
  { group: "ช่วงโควิด (> 60 ปี)", rate: 0.85, old: 3 },
  { group: "หลังโควิด", rate: 0.96, old: 3 },
  { group: "ก่อนโควิด", rate: 1.86, avg: 4 },
  { group: "ช่วงโควิด (เฉลี่ย)", rate: 1.52, avg: 4 },
  { group: "หลังโควิด", rate: 1.73, avg: 4 },
];

export default function CovidBar() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: 5 }}>
        อัตราการเดินทางจากผลกระทบโควิด ตามกลุ่มอายุ
      </div>
      <ResponsiveContainer maxHeight={500}>
        <BarChart
          layout="horizontal"
          height={500}
          label
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <YAxis
            type="number"
            tickFormatter={(value) => `${value} ครั้ง`}
            fontSize={12}
          />
          // Change XAxis type to "labelber"
          <XAxis type="category" dataKey="group" fontSize={12} /> // Change
          YAxis type to "type" and set dataKey to "label" // Adjust label
          position to "right"
          <Tooltip
            formatter={(value, entry) => {
              if (value) return [`${value} ครั้ง/วัน`];

              return [value];
            }}
            contentStyle={{ textAlign: "center" }}
            labelStyle={{ marginBottom: "0.5em" }}
          />
          <Bar
            dataKey="rate"
            fill={Cell}
            radius={[5, 5, 0, 0]}
            label={{
              position: "top",
              formatter: (value) => `${value}`,
            }}
          >
            {colors.map((value, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
