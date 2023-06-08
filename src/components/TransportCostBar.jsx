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
      data: [36],
      backgroundColor: "#81f5d0",
      barBorderRadius: 20,
      stack: 0,
    },
    {
      data: [0, 32, 39, 43, 39, 44, 37, 33, 27],
      backgroundColor: "#f1aa62",
      barBorderRadius: 20,
      stack: 0,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    datalabels: {
      display: true,
      anchor: "end", // Position the value at the end of the bar
      align: "end", // Align the value at the end of the bar
      color: "black", // Set the color of the value
      font: {
        size: 12, // Set the font size of the value
      },
      formatter: function (value) {
        return value; // Modify the formatter function as per your requirements
      },
    },
    Tooltip: {},
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "ค่าใช้จ่ายในการเดินทาง (บาท/เที่ยว) แต่ละจังหวัด",
    },
  },
  responsive: true,
  scales: {
    y: {
      grid: { display: false, stacked: true },
    },
    x: {
      ticks: {
        display: true,
        callback: (value) => `${value} บาท`,
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
