import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const labels = ["> 60 ปี", "22-60 ปี", "< 22 ปี"];

const data = {
  labels,
  datasets: [
    {
      label: "ไม่มีใบขับขี่",
      data: [55, 18, 82],
      backgroundColor: "#F34573",
      stack: "Stack 0",
    },
    {
      label: "จักรยานยนต์",
      backgroundColor: "#81f5d0",
      data: [8, 23, 14],
      stack: "Stack 0",
    },
    {
      label: "รถยนต์",
      data: [22, 29, 2],
      backgroundColor: "#D7F7F5",
      stack: "Stack 0",
    },
    {
      label: "มีทั้งคู่",
      data: [15, 30, 2],
      backgroundColor: "#2A6171",
      stack: "Stack 0",
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    title: {
      display: true,
      text: "อายุกับการครอบครองใบขับขี่",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: {
      grid: { display: false, stacked: true },
    },
    x: {
      ticks: {
        display: true,
        callback: (value) => `${value}%`, // Add '%' sign to tick labels
      },
      grid: { display: false },
      stacked: true,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function LicentOwnerBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
