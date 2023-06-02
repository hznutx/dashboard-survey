import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["HBO", "NHB", "HBE", "HBW"],
  datasets: [
    {
      label: "# of Votes",
      data: [52.9, 3.9, 38.4, 4.8],
      backgroundColor: [
        "rgba(99, 147, 179, 0.5)",
        "rgba(86, 255, 238, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 219, 183, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function ProposalChart1(props) {
  return <Pie data={data} />;
}
