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
      label: "ค่าเฉลี่ย",
      data: [1.66],
      barBorderRadius: 3,
      backgroundColor: "#cedddb",
      stack: 1,
    },
    {
      label: "จังหวัด",
      data: [0, 1.73, 1.61, 1.48, 1.61, 1.8, 1.56, 1.42, 1.48],
      backgroundColor: "#f5819a",
      barBorderRadius: 3,
      stack: 1,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    legend: {
      position: "right",
    },
    title: { display: true, text: "อัตราการเดินทางแต่ละจังหวัด (เที่ยว/วัน)" },
  },
  responsive: true,

  scales: {
    x: {
      grid: { display: true, stacked: true },
      ticks: {
        display: true,
        callback: (value) => `${value} ครั้ง`, // Add ',' sign to tick labels
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

export default function IncomeBar2(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
