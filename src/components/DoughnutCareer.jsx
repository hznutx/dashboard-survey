import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

const data = {
  labels: [
    "นักเรียน/นักศึกษา",
    "ทำงานประจำนอกบ้าน",
    "ทำงานที่บ้าน/อาชีพอิสระ",
    "ทำงานเกี่ยวกับการขนส่ง",
    "ไม่ได้ทำงาน/แม่บ้าน",
  ],
  datasets: [
    {
      label: "จำนวนรถ",
      data: [9.8, 41.0, 31.5, 0.7, 17.0],
      backgroundColor: ["#F45050", "#46C2CB", "#6D67E4", "#F2F7A1", "#E5BEEC"],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  outerHeight: "200",
  plugins: {
    legend: { position: "right" },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function DoughnutChart(props) {
  // const {sa} = props
  return (
    <div
      className="canvas"
      style={{
        display: "inline",
        maxHeight: 200,
        dominantBaseline: "reset-size",
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}
