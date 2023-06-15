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
  "อายุต่ำกว่า 22 ปี",
  "22-60 ปี",
  "อายุ 60 ปีขึ้นไป",
  "รวมทั้งหมด",
];

const data = {
  labels,
  datasets: [
    {
      label: "ทำงาน",
      data: [0.2, 1.27, 0.22, 1.11],
      backgroundColor: "rgb(33, 57, 69)",
      stack: 1,
    },
    {
      label: "เรียน",
      data: [1.19, 0.03, 0.01, 0.1],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      stack: 1,
    },

    {
      label: "ซื้อของ/สังสรรค์",
      data: [0.41, 0.45, 0.86, 0.48],
      backgroundColor: "rgb(255, 106, 106)",
      stack: 1,
    },
    {
      label: "ธุระส่วนตัว",
      data: [0.24, 0.33, 0.93, 0.38],
      backgroundColor: "#dedede",
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
    title: {
      display: true,
      text: "อัตราการเดินทางแต่ละกลุ่มอายุ (เที่ยว/วัน)",
    },
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

export default function TravelRengeBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
