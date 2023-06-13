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
    "มีใบขับขี่รถและจักรยานยนต์ 25%",
    "ไม่มีใบขับขี่ 29%",
    "มีใบขับขี่จักรยานยนต์ 20%",
    "มีใบขับขี่รถยนต์ 25%",
  ],
  datasets: [
    {
      label: "",
      data: [25, 29, 20, 25],
      backgroundColor: ["#2A6171", "#F34573", "#81f5d0", "#D7F7F5"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Disable auto aspect ratio
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
        display: "inline-flex",
        width: 550,
        height: 300,
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}
