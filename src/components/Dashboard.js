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
