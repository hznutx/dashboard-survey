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
      data: [12.2],
      backgroundColor: "#81f5d0",
      barBorderRadius: 3,
      stack: 0,
    },
    {
      data: [0, 10.7, 13, 15, 14, 15.1, 12.8, 12.3, 10.5],
      backgroundColor: "#dedede",
      barBorderRadius: 3,
      stack: 0,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    title: { display: true, text: "ระยะทางเฉลี่ย (กม./เที่ยว) แต่ละจังหวัด" },
    legend: { display: false },
  },
  responsive: true,
  scales: {
    x: {
      grid: { display: true, stacked: true },
      ticks: {
        display: true,
        callback: (value) => `${value} กม.`, // Add ',' sign to tick labels
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

export default function DistanceBar2(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
