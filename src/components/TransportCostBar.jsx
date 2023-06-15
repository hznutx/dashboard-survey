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
  "รถยนต์",
  "จักรยานยนต์",
  "Taxi / Grab",
  "จักรยานยนต์รับจ้าง",
  "รถไฟฟ้า",
  "รถเมล์",
  "สองแถว",
  "รถตู้",
];

const data = {
  labels,
  datasets: [
    {
      label: "พ.ศ. 2565",
      data: [36, 55, 12, 97, 27, 45, 42, 18, 9, 30],
      backgroundColor: "#00bdce",
      barBorderRadius: 0,
      stack: 0,
    },
    {
      label: "พ.ศ. 2560",
      data: [32, 39, 43, 39, 44, 37, 33, 27],
      backgroundColor: "#dedede",
      barBorderRadius: 0,
      stack: 1,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    title: {
      display: true,
      text: "ค่าใช้จ่ายเฉลี่ย (บาท/เที่ยว) แต่ละรูปแบบการเดินทาง",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: true, stacked: true },
      ticks: {
        display: true,
        callback: (value) => `${value} บาท`, // Add ',' sign to tick labels
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

export default function TransportCostBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
