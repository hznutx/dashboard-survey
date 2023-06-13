import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "รถสองแถว 2.9%",
    "รถเมล์ 4.5%",
    "รถไฟฟ้า 2.3%",
    "รถตู้ 0.9%",
    "เรือ 0.2%",
    "รถไฟ 0.1%",
  ],
  datasets: [
    {
      label: "10.5% ของรถสาธารณะประกอบด้วย",
      data: [2.9, 4.5, 2.3, 0.9, 0.2, 0.1],
      backgroundColor: [
        "#e2e2dc",
        "rgba(175, 235, 54, 0.5)",
        "rgba(64, 255, 118, 0.5)",
        "rgba(45, 49, 161, 0.5)",
        "rgba(151, 219, 244, 0.5)",
        "rgba(255, 99, 132, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: { position: "right" },
    title: { display: true, text: "10.5% ของรถสาธารณะประกอบด้วย" },
  },
};

export default function ResidentChart(props) {
  return <Pie data={data} options={options} />;
}
