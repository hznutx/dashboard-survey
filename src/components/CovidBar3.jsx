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
      label: "6.4 คะแนน",
      data: [6.4],
      backgroundColor: "#81f5d0",
      barBorderRadius: 5,
      stack: 0,
    },
    {
      label: "คะแนนโดยรวมจังหวัด",
      data: [0, 6.4, 6.4, 6.1, 6.6, 6.4, 6.3, 7.0, 6.6, 7.4],
      backgroundColor: "#dedede",
      barBorderRadius: 5,
      stack: 0,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    title: { display: true, text: "ความพึงพอใจในการเดินทางของแต่ละจังหวัด" },
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
        callback: (value) => `${value} คะแนน`, // Add ',' sign to tick labels
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
    <div style={{ maxHeight: 400 }}>
      <Bar options={options} data={data} />
    </div>
  );
}
