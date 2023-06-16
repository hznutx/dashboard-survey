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

const labels = ["ก่อนโควิด", "ช่วงโควิด", "หลังโควิด"];

const data = {
  labels,
  datasets: [
    {
      label: "รถยนต์",
      data: [51, 49, 49],
      backgroundColor: "#226766",
      barBorderRadius: 0,
      stack: 1,
    },
    {
      label: "จักรยานยนต์",
      backgroundColor: "#81f5d0",
      data: [30, 31, 30],
      barBorderRadius: 0,
      stack: 1,
    },
    {
      label: "รถสาธารณะ",
      data: [10.3, 9.5, 10.8],
      backgroundColor: "#dedede",
      barBorderRadius: 0,
      stack: 1,
    },
    {
      label: "Taxi/Grab/วิน",
      data: [3, 4, 4],
      backgroundColor: "#FF9551",
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "อื่นๆ",
      data: [5, 6, 6],
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
    title: { display: true, text: "รูปแบบการเดินทาง จากผลกระทบโควิด" },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: false, stacked: true },
      ticks: {
        display: true,
        callback: (value) => `${value}%`, // Add ',' sign to tick labels
      },
    },
  },
  y: {
    grid: {
      display: false,
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

export default function CovidBar2(props) {
  return (
    <div style={{ height: "30vh", width: "40vws" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
