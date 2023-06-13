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
      label: "ค่าเดินทางเฉลี่ย",
      data: [36],
      backgroundColor: "#81f5d0",
      barBorderRadius: 0,
      stack: 0,
    },
    {
      label: "ค่าเดินทางแต่ละจังหวัด",
      data: [0, 32, 39, 43, 39, 44, 37, 33, 27],
      backgroundColor: "#dedede",
      barBorderRadius: 0,
      stack: 0,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    title: { display: true, text: "ค่าเฉลี่ยการเดินทางแต่ละจังหวัด" },
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
        display: true,
        callback: (value) => `${value} บาท`, // Add ',' sign to tick labels
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
