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

const labels = ["เฉลี่ย", "อายุ 60 ปีขึ้นไป", "22-60 ปี", "อายุต่ำกว่า 22 ปี"];

const data = {
  labels,
  datasets: [
    {
      label: "เดินทางได้ปกติ",
      data: [97, 86, 99, 97],
      backgroundColor: "rgb(33, 57, 69)",
      stack: 1,
    },
    {
      label: "ต้องมีอุปกรณ์หรือผู้ช่วยเหลือ",
      data: [2, 8, 0, 0],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      stack: 1,
    },

    {
      label: "ไม่สามารถเดินทางได้",
      data: [1, 6, 1, 3],
      backgroundColor: "rgb(255, 106, 106)",
      stack: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    legend: {
      position: "bottom",
    },
    title: { display: true, text: "ความสามารถในการเดินทาง" },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: true,
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        display: true,
        callback: (data) => `${data} %`, // Add ',' sign to tick labels
      },
    },
    y: {
      grid: { display: false },
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

export default function TravelPossibiltyBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
