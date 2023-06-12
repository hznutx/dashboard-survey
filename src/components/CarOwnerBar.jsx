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
// Rest of your code...

const labels = [
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
      label: "ไม่มีรถ",
      data: [12, 8, 6, 6, 6, 4, 1, 4],
      backgroundColor: "#dedede",
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "จักรยานยนต์",
      data: [27, 22, 22, 24, 24, 25, 31, 31],
      backgroundColor: "#81f5d0",
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "รถยนต์",
      data: [30, 32, 27, 24, 23, 21, 25, 15],
      backgroundColor: "#FF9551",
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "มีทั้งคู่",
      data: [31, 38, 45, 46, 47, 50, 43, 50],
      backgroundColor: "#FF4A4A",
      barBorderRadius: 2,
      stack: 1,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    legend: {
      position: "top",
    },
    title: { display: true, text: "จำนวนการครอบครองรถ" },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: true, stacked: true },
      ticks: {
        display: true,
        callback: (value) => `${value}%`, // Add ',' sign to tick labels
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

export default function CarOwnerBar(props) {
  return (
    <div style={{ height: "30vh", width: "40vws" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
