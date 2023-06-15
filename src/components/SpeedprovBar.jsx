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
      data: [26],
      backgroundColor: "#FFBB28",
      barBorderRadius: 3,
      stack: 0,
    },
    {
      data: [0, 27, 27, 23, 20, 26, 20, 19, 28, 26],
      backgroundColor: "#dedede",
      barBorderRadius: 3,
      stack: 0,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    title: { display: true, text: "ความเร็วเฉลี่ย (กม./ชม.) แต่ละจังหวัด" },
    legend: { display: false },
  },
  responsive: true,
  scales: {
    x: {
      grid: { display: true, stacked: true },
      ticks: {
        display: true,
        callback: (value) => `${value} กม./ชม.`, // Add ',' sign to tick labels
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

export default function SpeedBar2(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
