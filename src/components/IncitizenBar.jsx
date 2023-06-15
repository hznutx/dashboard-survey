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

const labels = [""];

const data = {
  labels,
  datasets: [
    {
      label: "ประชากรแฝง : 3,872,912",
      data: [33],
      backgroundColor: "#2B3467",
      stack: "Stack 0",
    },
    {
      label: "ประชากรทะเบียนราษฎร์ : 11,611,253",
      data: [100],
      backgroundColor: "#BAD7E9",
      stack: "Stack 0",
    },
  ],
};
const options = {
  indexAxis: "y",
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "สัดส่วนประชากรแฝง",
    },
  },
  responsive: true,
  scales: {
    y: {
      grid: { display: false, stacked: true },
    },
    x: {
      ticks: {
        display: true,
        callback: (value) => `${value}%`,
      },
      grid: { display: false },
      stacked: true,
    },
  },
  tooltips: {
    enabled: true,
    callbacks: {
      label: function (context) {
        const label = context.label || "";
        const value = context.parsed.y || 0;
        return `${label}: ${value}%`;
      },
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
