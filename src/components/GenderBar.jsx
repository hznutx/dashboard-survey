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
  "71 - 80 <",
  "61 - 70",
  "51 - 60",
  "41 - 50",
  "31 - 40",
  "21 - 30",
  "11 - 20",
  "0 - 10",
];

const data = {
  labels,
  datasets: [
    {
      label: "ชาย",
      data: [0, -1, -5, -7, -11, -12, -8, -3, -2],
      backgroundColor: "#7DB9B6",
    },
    {
      label: "หญิง",
      data: [0, 2, 6, 7, 10, 12, 9, 3, 2],
      backgroundColor: "#E96479",
    },
  ],
};

const options = {
  scales: {
    y: {
      grid: { display: false },
    },
    x: {
      ticks: { display: false },
      grid: { display: false },
    },
  },
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  //   responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "สัดส่วนเพศและอายุ",
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

export default function GenderBar(props) {
  return (
    <div style={{ height: "45vh", width: "45vw" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
