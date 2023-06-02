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
  "ทั้งพื้นที่",
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
      label: "5-12 ปี",
      data: [3, 3, 3, 4, 4, 4, 5, 2, 5],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "13-21 ปี",
      data: [6, 7, 5, 5, 5, 6, 5, 3, 6],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "22-30 ปี",
      data: [17, 19, 16, 14, 16, 15, 13, 19, 12],
      backgroundColor: "rgb(160, 160, 160)",
      stack: "Stack 0",
    },
    {
      label: "31-40 ปี",
      data: [25, 25, 25, 24, 26, 25, 24, 30, 24],
      backgroundColor: "rgb(235, 135, 53)",
      stack: "Stack 0",
    },
    {
      label: "41-50 ปี",
      data: [21, 20, 21, 22, 20, 22, 22, 20, 22],
      backgroundColor: "rgb(250, 226, 131)",
      stack: "Stack 0",
    },
    {
      label: "51-60 ปี",
      data: [14, 14, 15, 15, 14, 15, 16, 12, 16],
      backgroundColor: "rgb(154, 51, 66)",
      stack: "Stack 0",
    },
    {
      label: "61-70 ปี",
      data: [10, 9, 12, 12, 11, 9, 11, 11, 11],
      backgroundColor: "rgb(246, 152, 191)",
      stack: "Stack 0",
    },
    {
      label: "71-80 ปี",
      data: [3, 3, 3, 3, 3, 3, 3, 2, 3],
      backgroundColor: "rgb(154, 110, 110)",
      stack: "Stack 0",
    },
    {
      label: "≥81 ปีขึ้นไป",
      data: [1, 1, 1, 1, 1, 1, 1, 0, 1],
      backgroundColor: "rgb(50, 50, 50)",
      stack: "Stack 0",
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    title: {
      display: true,
      text: "สัดส่วนประชากรตามช่วงอายุในแต่ละจังหวัด",
    },
    legend: {
      position: "top",
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
      grid: { display: false },
      ticks: {
        callback: (value) => `${value}%`, // Add '%' sign to tick labels
      },
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
    <div style={{ width: "40vw", height: "35vh" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
