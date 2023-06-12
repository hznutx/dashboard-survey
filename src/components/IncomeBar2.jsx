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
      label: "ค่าเฉลี่ยบุคคล 21,000 บาท",
      data: [21000],
      barBorderRadius: 5,
      backgroundColor: "#cedddb",
      stack: 1,
    },
    {
      label: "รายได้ส่วนบุคคล (บาท)",
      data: [0, 22000, 22400, 19600, 20300, 19500, 17900, 18000, 18200],
      backgroundColor: "#f58181",
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
    title: { display: true, text: "รายได้ส่วนบุคคลแต่ละจังหวัด" },
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

export default function IncomeBar2(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
