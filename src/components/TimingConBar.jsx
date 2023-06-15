import { BarChart, Bar, Cell, YAxis, XAxis, Tooltip, Legend } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "เฉลี่ย",
    pace: 29,
  },
  {
    name: "รถยนต์",
    pace: 35,
  },
  {
    name: "จักรยานยนต์",
    pace: 20,
  },
  {
    name: "Taxi/Grab",
    pace: 28,
  },
  {
    name: "จักรยานยนต์รับจ้าง",
    pace: 15,
  },
  {
    name: "รถไฟฟ้า",
    pace: 38,
  },
  {
    name: "รถเมล์",
    pace: 36,
  },
  {
    name: "สองแถว",
    pace: 25,
  },
  {
    name: "รถตู้",
    pace: 44,
  },
  {
    name: "รถรับส่งนร.พนักงาน",
    pace: 42,
  },
];

export default function SpeedBar() {
  return (
    <div style={{ textAlign: "center", fontSize: 15, marginTop: 5 }}>
      ระยะเวลาแต่ละรูปแบบการเดินทางหลัก
      <BarChart
        layout="vertical"
        width={700}
        height={400}
        label
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 100,
          bottom: 5,
        }}
      >
        <XAxis type="number" tickFormatter={(value) => `${value} นาที`} />
        // Change XAxis type to "number"
        <YAxis type="category" dataKey="name" /> // Change YAxis type to
        "category" and set dataKey to "name" // Adjust label position to "right"
        <Tooltip
          formatter={(value, name, entry) => {
            if (name === "pace") return [`${value} นาที/เที่ยว`];

            return [name, value];
          }}
          contentStyle={{ textAlign: "center" }}
          labelStyle={{ marginBottom: "0.5em" }}
        />
        {colors.map((value, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        <Bar
          dataKey="pace"
          radius={[0, 5, 5, 0]}
          fill="#6598f1"
          label={{
            position: "right",
            formatter: (value) => `${value} นาที/เที่ยว`,
          }}
        />
      </BarChart>
    </div>
  );
}
