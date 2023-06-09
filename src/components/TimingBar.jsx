import { BarChart, Bar, Cell, YAxis, XAxis, Tooltip, Legend } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "เฉลี่ย",
    new: 29,
    old: 33,
  },
  {
    name: "รถยนต์",
    new: 35,
    old: 36,
  },
  {
    name: "จักรยานยนต์",
    new: 20,
    old: 24,
  },
  {
    name: "Taxi/Grab",
    new: 28,
    old: 34,
  },
  {
    name: "จักรยานยนต์รับจ้าง",
    new: 15,
    old: 15,
  },
  {
    name: "รถไฟฟ้า",
    new: 38,
    old: 37,
  },
  {
    name: "รถเมล์",
    new: 36,
    old: 41,
  },
  {
    name: "สองแถว",
    new: 25,
    old: 35,
  },
  {
    name: "รถตู้",
    new: 44,
    old: 50,
  },
  {
    name: "รถรับส่งนร.พนักงาน",
    new: 42,
    old: 41,
  },
];

export default function SpeedBar() {
  return (
    <div style={{ textAlign: "center", marginTop: 10, fontSize: 15 }}>
      ระยะเวลาในการเดินทางโดยเฉลี่ย (นาที/เที่ยว) แต่ละรูปแบบการเดินทางหลัก
      <BarChart
        layout="vertical"
        width={600}
        height={400}
        label
        data={data}
        margin={{
          top: 10,
          right: 21,
          left: 80,
          bottom: 5,
        }}
      >
        <XAxis
          type="number"
          tickFormatter={(value) => `${value} นาที/เที่ยว`}
        />
        // Change XAxis type to "number"
        <YAxis type="category" dataKey="name" /> // Change YAxis type to
        "category" and set dataKey to "name" // Adjust label position to "right"
        <Tooltip
          formatter={(value, name, entry) => {
            if (name === "old") return [`${value} กม./ชม.`, "พ.ศ. 2560"];
            if (name === "new") return [`${value} กม./ชม.`, "พ.ศ. 2565"];
            return [name, value];
          }}
          contentStyle={{ textAlign: "center" }}
          labelStyle={{ marginBottom: "0.5em" }}
        />
        {colors.map((value, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        <Legend
          formatter={(value, entry) => {
            if (value === "new") return "พ.ศ. 2565";
            if (value === "old") return "พ.ศ. 2560";
            return value;
          }}
        />
        <Bar
          dataKey="new"
          fill="#6598f1"
          label={{
            position: "right",
            formatter: (value) => `${value}`,
          }}
        />
        <Bar
          dataKey="old"
          fill="#d1c9c9"
          label={{
            position: "right",
            formatter: (value) => `${value}`,
          }}
        />
      </BarChart>
    </div>
  );
}
