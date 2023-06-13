import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["DISNEY+", "VIU", "YOUTUBE", "LINE TV"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 20, 30, 40],
      backgroundColor: [
        "rgb(0, 111, 185)",
        "rgba(255, 214, 10, 0.95)",
        "rgb(207, 54, 54)",
        "rgb(112, 255, 16)",
      ],
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

export default function ProposalChart1(props) {
  return <Doughnut data={data} options={options} />;
}
