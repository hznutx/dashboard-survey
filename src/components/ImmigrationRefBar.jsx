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
  "นนทบุรี",
  "กรุงเทพมหานคร",
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
      label: "5-21 ปี",
      data: [49, 19, 8, 7, 15, 15, 23, 10],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      stack: [1, 5, 9, 13, 17, 21, 25],
    },
    {
      label: "22-60 ปี",
      data: [55, 32, 19, 29, 28, 19, 38, 9],
      backgroundColor: "rgb(234, 234, 234)",
      stack: [2, 6, 10, 14, 18, 22, 26],
    },
    {
      label: "60 ปีขึ้นไป",
      data: [18, 9, 4, 5, 10, 4, 3, 3],
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      stack: [3, 7, 11, 15, 19, 23, 27],
    },

    {
      label: "รวม",
      data: [48, 27, 15, 23, 24, 16, 31, 8],
      backgroundColor: "rgb(33, 57, 69)",
      stack: [4, 8, 12, 16, 20, 24, 28],
    },
  ],
};

const options = {
  indexAxis: "x",
  plugins: {
    legend: {
      position: "bottom",
    },
    title: { display: true, text: "สัดส่วนประชากรแฝง" },
    tooltip: { enable: true },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: false, stacked: true },
    },
    y: {
      ticks: {
        display: true,
        callback: (value) => `${value}%`, // Add ',' sign to tick labels
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

export default function IncitizenBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
