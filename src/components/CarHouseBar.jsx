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
      label: "บ้านเดี่ยว/ทาวน์เฮ้าส์",
      data: [66, 54, 71, 84, 78.5, 75, 84.5, 66, 90],
      stack: 0,
      backgroundColor: "#204969",
    },
    {
      label: "ตึกแถว/โฮมออฟฟิศ",
      data: [10, 14, 9, 4, 4.5, 9, 4.5, 12, 3],
      backgroundColor: "#00FFCA",
      stack: 0,
    },
    {
      label: "คอนโด/หอพัก",
      data: [24, 32, 20, 12, 17, 16, 11, 22, 7],
      backgroundColor: "#6384B3",
      stack: 0,
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    legend: {
      position: "top",
    },
    title: { display: true, text: "สัดส่วนครัวเรือน แบ่งตามประเภทที่พักอาศัย" },
    tooltip: { enable: true },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      ticks: {
        callback: (tick) => `${tick}%`, // Add '%' sign to tick labels
      },
      grid: { display: true, stacked: true },
    },
    y: {
      ticks: {
        display: true,
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
