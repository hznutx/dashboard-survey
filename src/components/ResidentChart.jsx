import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["บ้านเดี่ยว,ทาวน์เฮาส์", "ตึกแถว,โฮมออฟฟิต", "คอนโด,หอพัก"],
  datasets: [
    {
      label: "# of Votes",
      data: [65.6, 10.2, 24.2],
      backgroundColor: [
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(54, 162, 235, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function ResidentChart(props) {
  return <Pie data={data} />;
}
