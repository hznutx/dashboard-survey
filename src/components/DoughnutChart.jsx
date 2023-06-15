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
  labels: ["รถยกเว้นถาวร", "รถยกเว้นชั่วคราว"],
  datasets: [
    {
      label: "จำนวนรถ",
      data: [12, 19],
      backgroundColor: ["#647A99", "#DEA01E"],
      borderColor: ["#647A99", "#DEA01E"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
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
    <div style={{ height: "30vh", width: "30vw" }}>
      <Doughnut data={data} options={options} width={20} height={10} />
    </div>
  );
}
