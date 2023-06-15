import { BarChart, Bar, Cell, YAxis, XAxis, Tooltip, Legend } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "เฉลี่ย",
    new: 26,
    old: 23,
  },
  {
    name: "รถยนต์",
    new: 27,
    old: 26,
  },
  {
    name: "จักรยานยนต์",
    new: 27,
    old: 25,
  },
  {
    name: "Taxi/Grab",
    new: 23,
    old: 25,
  },
  {
    name: "จักรยานยนต์รับจ้าง",
    new: 20,
    old: 20,
  },
  {
    name: "รถไฟฟ้า",
    new: 26,
    old: 24,
  },
  {
    name: "รถเมล์",
    new: 20,
    old: 19,
  },
  {
    name: "สองแถว",
    new: 19,
    old: 0,
  },
  {
    name: "รถตู้",
    new: 28,
    old: 25,
  },
  {
    name: "รถรับส่งนร.พนักงาน",
    new: 26,
    old: 23,
  },
];

export default function SpeedBar() {
  return (
    <div style={{ textAlign: "center" }}>
      ความเร็ว (กิโลเมตร/ชั่วโมง) แต่ละรูปแบบการเดินทางหลัก
      <BarChart
        layout="vertical"
        width={700}
        height={400}
        label
        data={data}
        margin={{
          top: 20,
          right: 80,
          left: 80,
          bottom: 5,
        }}
      >
        <XAxis type="number" tickFormatter={(value) => `${value} กม./ชม.`} />
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
          fill="#FFBB28"
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
