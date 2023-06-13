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

const labels = [
  "เฉลี่ย",
  "กรุงเทพมหานคร",
  "นนทบุรี",
  "ปทุมธานี",
  "สมุทรปราการ",
  "สมุทรสาคร",
  "นครปฐม",
  "ฉะเชิงเทรา",
  "พระนครศรีอยุธยา",
];

const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [29],
      backgroundColor: "#81f5d0",
      barBorderRadius: 5,
      stack: 0,
    },
    {
      label: "",
      data: [0, 32, 39, 43, 39, 44, 37, 33, 27],
      backgroundColor: "#dedede",
      barBorderRadius: 5,
      stack: 0,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    title: { display: true, text: "หัวข้อ" },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: true, stacked: true },
      ticks: {
        callback: (value) => `${value} นาที`, // Add ',' sign to tick labels
        display: true,
      },
    },
    y: {
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

export default function IncitizenBar(props) {
  return <Bar options={options} data={data} />;
}
