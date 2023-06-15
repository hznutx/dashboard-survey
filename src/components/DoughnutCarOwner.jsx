import { Doughnut } from "react-chartjs-2";
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

const data = {
  labels: [
    "มีทั้งรถและจักรยานยนต์ 37.2%",
    "ไม่มีรถ 8.9%",
    "มีจักรยานยนต์ 25.5%",
    "มีรถยนต์ 37.2%",
  ],
  datasets: [
    {
      label: "จำนวนรถ",
      data: [37.2, 8.9, 25.5, 28.4],
      backgroundColor: ["#FF4A4A", "#dedede", "#81f5d0", "#FF9551"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Disable auto aspect ratio
  plugins: {
    legend: { position: "right" },
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

export default function DoughnutChart(props) {
  // const {sa} = props
  return (
    <div
      className="canvas"
      style={{
        display: "inline-flex",
        width: 510,
        height: 300,
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}
