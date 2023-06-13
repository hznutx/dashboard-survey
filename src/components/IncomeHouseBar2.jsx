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
      label: "ค่าเฉลี่ย 40,600 บาท",
      data: [40600],
      barBorderRadius: 5,
      backgroundColor: "#c0c0c0",
      stack: 1,
    },
    {
      label: "รายได้ครัวเรือน (บาท)",
      data: [0, 42700, 40900, 36900, 38700, 38800, 34600, 30900, 37500],
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
      position: "bottom",
    },
    title: { display: true, text: "รายได้ครัวเรือนแต่ละจังหวัด" },
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

export default function IncomeHouseBar2(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
