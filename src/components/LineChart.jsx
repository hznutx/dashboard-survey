import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

const labels = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];
const data = {
  labels,
  datasets: [
    {
      label: "จำนวนรายการส่งตอบโต้",
      data: [
        12530, 16708, 10256, 11888, 12062, 13258, 20442, 10120, 22641, 9142,
        24827, 15290,
      ],
      borderColor: "red",
      backgroundColor: "red",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function LineChart(props) {
  return (
    <div>
      <Line data={data} options={options} width={20} height={2}></Line>
    </div>
  );
}
