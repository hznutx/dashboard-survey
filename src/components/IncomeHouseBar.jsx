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
  "> 100,000",
  "70,000 - 100,000",
  "50,000 - 70,000",
  "30,001 - 50,000",
  "15,001 - 30,000",
  "5,001 - 15,000",
  "< 5,0000",
  "ไม่มีรายได้",
];

const data = {
  labels,
  datasets: [
    {
      label: "เฉลี่ยอยู่ที่ครัวเรือนละ 40,600 บาท ต่อเดือน",
      data: [3.8, 8.5, 11.5, 30.0, 31.5, 10.2, 1.1, 3.4, 100],
      backgroundColor: "#81f5d0",
      barBorderRadius: 5,
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
    title: { display: true, text: "รายได้ครัวเรือน" },
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

export default function IncitizenBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
