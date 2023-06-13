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
      label: "รถยนต์",
      data: [46, 56, 57, 49, 56, 51, 50, 44],
      backgroundColor: "#226766",
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "จักรยานยนต์",
      backgroundColor: "#81f5d0",
      data: [30, 30, 32, 34, 33, 42, 39, 45],
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "รถสาธารณะ",
      data: [14.2, 8, 5, 8, 5, 3, 3, 2],
      backgroundColor: "#dedede",
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "Taxi/Grab/วิน",
      data: [5.8, 4, 2, 4, 4, 1, 2, 1],
      backgroundColor: "#FF9551",
      barBorderRadius: 2,
      stack: 1,
    },
    {
      label: "อื่นๆ",
      data: [3.4, 2, 4, 5, 2, 2, 6, 8],
      backgroundColor: "#FF4A4A",
      barBorderRadius: 2,
      stack: 1,
    },
  ],
};
const options = {
  indexAxis: "x",
  plugins: {
    legend: {
      position: "top",
    },
    title: { display: true, text: "รูปแบบการเดินทางแต่ละจังหวัด" },
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
    },
  },
  y: {
    ticks: {
      display: true,
      callback: (value) => `${value},`, // Add ',' sign to tick labels
    },
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

export default function CarTypeBar(props) {
  return (
    <div style={{ height: "30vh", width: "40vws" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
