import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    "รถยนต์ 51%",
    "จักรยานยนต์ 31.8%",
    "รถขนส่งมวลชนสาธารณะ 10.5%",
    "จักรยานยนต์รับจ้าง 2.1%",
    "Taxi/Grab 1.8%",
    "จักรยาน/เดิน 1.7%",
    "รถรับส่งพนักงาน 1.1%",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [51, 31.8, 10.5, 2.1, 1.8, 1.7, 1.1],
      backgroundColor: [
        "#19595c",
        "#abf9e0",
        "rgba(64, 255, 118, 0.5)",
        "#dedede",
        "rgba(255, 159, 64, 0.5)",
        "rgba(54, 162, 235, 0.5)",
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
    title: { display: true, text: "รูปแบบการเดินทางทั่วไป" },
  },
};

export default function ResidentChart(props) {
  return <Pie data={data} options={options} />;
}
