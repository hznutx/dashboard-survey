import { PieChart, Pie, Cell } from "recharts";

const data02 = [
  { name: "พบปะสังสรรค์ 23%", value: 23, bg: "#F34573" },
  { name: "ทำงาน 54%", value: 54, bg: "#2A6171" },
  { name: "เรียน 5%", value: 5, bg: "#55e3b6" },
  { name: "ธุระส่วนตัว 5%", value: 5, bg: "#909090" },
];

export default function PureComponent() {
  return (
    <PieChart width={650} height={460}>
      <Pie
        data={data02}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={0}
        outerRadius={180}
        label={({ cx, cy, midAngle, innerRadius, outerRadius, name, bg }) => {
          const RADIAN = Math.PI / 180;
          const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);
          return (
            <text
              x={x}
              y={y}
              fill={bg}
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {name}
            </text>
          );
        }}
      >
        {data02.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.bg || "#8884d8"} />
        ))}
      </Pie>
    </PieChart>
  );
}
