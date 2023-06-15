// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";

// const data = {
//   labels: [
//
//   ],
//   datasets: [
//     {
//       label: "",
//       data: [25, 29, 20, 25],
//       backgroundColor: ["#2A6171", "#F34573", "#81f5d0", "#D7F7F5"],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   maintainAspectRatio: false, // Disable auto aspect ratio
//   plugins: {
//     legend: { position: "right" },
//   },
// };

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// export default function DoughnutChart(props) {
//   // const {sa} = props
//   return (
//     <div
//       className="canvas"
//       style={{
//         display: "inline-flex",
//         width: 550,
//         height: 300,
//       }}
//     >
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// }

import { PieChart, Pie, Cell, Label } from "recharts";

const data02 = [
  { name: "มีใบขับขี่รถและจักรยานยนต์ 25%", value: 25, bg: "#2A6171" },
  { name: "ไม่มีใบขับขี่ 29%", value: 29, bg: "#F34573" },
  { name: "มีใบขับขี่จักรยานยนต์ 20%", value: 20, bg: "#55e3b6" },
  { name: "มีใบขับขี่รถยนต์ 25%", value: 25, bg: "#909090" },
];

export default function PureComponent() {
  return (
    <PieChart width={700} height={300}>
      <Pie
        data={data02}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={120}
        label={({ cx, cy, midAngle, innerRadius, outerRadius, name, bg }) => {
          const RADIAN = Math.PI / 180;
          const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
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
