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

const labels = ["ประชากร"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: [10],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: [10],
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
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
      ticks: { display: false },
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

export default function GenderBar(props) {
  return (
    <div style={{ width: "40vw" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
