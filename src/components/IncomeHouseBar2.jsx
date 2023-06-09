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
      label: "เฉลี่ย",
      data: [40600],
      barBorderRadius: 5,
      backgroundColor: "#c0c0c0",
      stack: 1,
    },
    {
      label: "รายได้ (บาท)",
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
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y.toLocaleString("th-TH") + " บาท";
          }
          return label;
        },
      },
    },
    legend: {
      position: "bottom",
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
