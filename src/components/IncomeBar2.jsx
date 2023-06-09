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
      data: [40600],
      backgroundColor: "#c0c0c0",
      barBorderRadius: 5,
      stack: 0,
    },
    {
      data: [0, 42700, 40900, 36900, 38700, 38800, 34600, 30900, 37500],
      backgroundColor: "#81f5d0",
      barBorderRadius: 5,
      stack: 0,
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    Legend: { display: true, labels },
    title: { display: true, text: "ค่าเฉลี่ยการเดินทางแต่ละจังหวัด" },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      grid: { display: false, stacked: true },
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

export default function IncitizenBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
