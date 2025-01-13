
// import React, { useState, useEffect } from "react";
// import { parseCSV } from "./Utlity/csvParser"; // Make sure this is correctly defined
// import { Bar, Line } from "react-chartjs-2"; // Make sure to import the Line component here
// import "chart.js/auto";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     parseCSV("/data.csv", setData); // Ensure the correct path to your CSV file
//   }, []);

//   // Count vehicles by city
//   const cityCounts = data.reduce((acc, item) => {
//     const city = item["City"];
//     acc[city] = (acc[city] || 0) + 1;
//     return acc;
//   }, {});

//   // Count vehicles by type
//   const vehicleTypeCounts = data.reduce((acc, item) => {
//     const type = item["Electric Vehicle Type"];
//     acc[type] = (acc[type] || 0) + 1;
//     return acc;
//   }, {});

//   // Bar chart data
//   const chartData = {
//     labels: Object.keys(vehicleTypeCounts),
//     datasets: [
//       {
//         label: "Vehicle Count by Type",
//         data: Object.values(vehicleTypeCounts),
//         backgroundColor: ["#4caf50", "#ff9800"], // Colors for different vehicle types
//       },
//     ],
//   };

//   // Line chart data
//   const lineChartData = {
//     labels: Object.keys(cityCounts), // Cities on X-axis
//     datasets: [
//       {
//         label: "Vehicles Available by City",
//         data: Object.values(cityCounts), // Vehicle counts for each city
//         fill: false,
//         borderColor: "#42a5f5",
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       <h1 className="dashboard-title">Electric Vehicle Population Dashboard</h1>

//       <p className="total-records">Total Records: {data.length}</p>

//       {/* Bar Chart */}
//       <div className="graph1">
//         <Bar data={chartData} options={{ responsive: true }} />
//       </div>

//       {/* Line Chart */}
//       <div className="graph2">
//         <Line data={lineChartData} options={{ responsive: true }} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from "react";
import { parseCSV } from "./Utlity/csvParser";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    parseCSV("/data.csv", setData);
  }, []);

  const cityCounts = data.reduce((acc, item) => {
    const city = item["City"];
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  const vehicleTypeCounts = data.reduce((acc, item) => {
    const type = item["Electric Vehicle Type"];
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const barChartData = {
    labels: Object.keys(vehicleTypeCounts),
    datasets: [
      {
        label: "Vehicle Count by Type",
        data: Object.values(vehicleTypeCounts),
        backgroundColor: ["#4caf50", "#ff9800"],
      },
    ],
  };

  const lineChartData = {
    labels: Object.keys(cityCounts),
    datasets: [
      {
        label: "Vehicles Available by City",
        data: Object.values(cityCounts),
        fill: false,
        borderColor: "#42a5f5",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Electric Vehicle Population Dashboard</h1>
      <p className="total-records">Total Records: {data.length}</p>
      <div className="graph1">
        <Bar data={barChartData} options={{ responsive: true }} />
      </div>
      <div className="graph2">
        <Line data={lineChartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Dashboard;
