import { BarChart, Bar, Cell, YAxis, XAxis, Tooltip, Legend } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "เฉลี่ย",
    new: 12.2,
    old: 12.6,
  },
  {
    name: "รถยนต์",
    new: 15.3,
    old: 15.5,
  },
  {
    name: "จักรยานยนต์",
    new: 8.7,
    old: 9.7,
  },
  {
    name: "Taxi/Grab",
    new: 10.4,
    old: 14.2,
  },
  {
    name: "จักรยานยนต์รับจ้าง",
    new: 4.5,
    old: 4.9,
  },
  {
    name: "รถไฟฟ้า",
    new: 15.2,
    old: 14.7,
  },
  {
    name: "รถเมล์",
    new: 11.2,
    old: 20.9,
  },
  {
    name: "สองแถว",
    new: 7.5,
    old: 0,
  },
  {
    name: "รถตู้",
    new: 19.7,
    old: 20.9,
  },
  {
    name: "รถรับส่งนร.พนักงาน",
    new: 17.9,
    old: 15.6,
  },
];

export default function DistanceBar() {
  return (
    <div style={{ textAlign: "center" }}>
      ระยะทางเฉลี่ย (กิโลเมตร/เที่ยว) แต่ละรูปแบบการเดินทางหลัก
      <BarChart
        layout="vertical"
        width={600}
        height={400}
        label
        data={data}
        margin={{
          top: 20,
          right: 21,
          left: 100,
          bottom: 5,
        }}
      >
        <XAxis type="number" tickFormatter={(value) => `${value} กม./เที่ยว`} />
        // Change XAxis type to "number"
        <YAxis type="category" dataKey="name" /> // Change YAxis type to
        "category" and set dataKey to "name" // Adjust label position to "right"
        <Tooltip
          formatter={(value, name, entry) => {
            if (name === "old") return [`${value} กม./เที่ยว`, "พ.ศ. 2560"];
            if (name === "new") return [`${value} กม./เที่ยว`, "พ.ศ. 2565"];
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
        <Bar dataKey="new" fill="#62e5be" label={{ position: "right" }} />
        <Bar dataKey="old" fill="#d1c9c9" label={{ position: "right" }} />
      </BarChart>
    </div>
  );
}
