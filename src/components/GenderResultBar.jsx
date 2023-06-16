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

const labels = ["ประชากร"];

const data = {
  labels,
  datasets: [
    {
      label: "วัยเรียน 9.1%",
      data: [9.1],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "วัยทำงาน 77.0%",
      data: [77],
      backgroundColor: "rgb(198, 198, 198)",
      stack: "Stack 0",
    },
    {
      label: "วัยสูงอายุ 13.9%",
      data: [13.9],
      backgroundColor: "rgb(255, 204, 84)",
      stack: "Stack 0",
    },
  ],
};

const options = {
  indexAxis: "y",
  plugins: {
    title: {
      display: true,
      text: "สัดส่วนประชากรตามช่วงอายุ",
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: {
      grid: { display: false, stacked: true },
    },
    x: {
      ticks: {
        display: true,
        callback: (value) => `${value}%`, // Add '%' sign to tick labels
      },
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

export default function GenderBar(props) {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
