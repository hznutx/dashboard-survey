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
  "> 100,000",
  "70,000 - 100,000",
  "50,000 - 70,000",
  "30,001 - 50,000",
  "15,001 - 30,000",
  "5,001 - 15,000",
  "< 5,0000",
  "ไม่มีรายได้",
];

const data = {
  labels,
  datasets: [
    {
      label: "เฉลี่ยอยู่ที่ 20,100 บาท ต่อเดือน",
      data: [0.3, 0.7, 2.4, 15.6, 40.5, 19.8, 5.7, 15.1, 100],
      backgroundColor: "#f58181",
      barBorderRadius: 5,
      stack: 1,
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    tooltip: {
      display: true,
      callbacks: {
        label: (context) => {
          let label = context.datasets.data || [];
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
      position: "top",
    },
    title: { display: true, text: "รายได้ส่วนบุคคล" },
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
        callback: (value) => `${value}%`, // Add ',' sign to tick labels
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
