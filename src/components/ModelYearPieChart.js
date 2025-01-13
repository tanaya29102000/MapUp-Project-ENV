// import React from "react";
// import { Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const ModelYearPieChart = () => {
//   // Sample data for model years
//   const data = {
//     labels: ["2020", "2021", "2022", "2023", "2024"], // Replace with your model years
//     datasets: [
//       {
//         label: "Model Years",
//         data: [10, 15, 20, 25, 30], // Replace with the count of items per model year
//         backgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#4BC0C0",
//           "#9966FF",
//         ],
//         hoverBackgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#4BC0C0",
//           "#9966FF",
//         ],
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Model Year Distribution</h2>
//       <Pie data={data} />
//     </div>
//   );
// };

// export default ModelYearPieChart;
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ModelYearPieChart = () => {
  const data = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Model Years",
        data: [10, 15, 20, 25, 30],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Model Year Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default ModelYearPieChart;
