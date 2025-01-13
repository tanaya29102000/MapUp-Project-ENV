
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = ({ csvData }) => {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    if (csvData) {
      setParsedData(csvData);
    }
  }, [csvData]);

  if (!parsedData.length) {
    return <div>Loading data...</div>;
  }

  const uniqueCounts = parsedData.reduce((acc, item) => {
    const vin = item.VIN;
    acc[vin] = (acc[vin] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(uniqueCounts).slice(0, 10),
    datasets: [
      {
        label: "Unique VIN Counts",
        data: Object.values(uniqueCounts).slice(0, 10),
        backgroundColor: "#4caf50",
      },
    ],
  };

  return <Bar data={chartData} options={{ responsive: true }} />;
};

export default BarChart;
