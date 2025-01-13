import React, { useEffect, useState } from "react";
import { parseCSV } from "./Utlity/csvParser";

import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = ({ csvData }) => {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    // If csvData is provided, parse it
    if (csvData) {
      setParsedData(csvData); // Assuming csvData is already an array of objects
    }
  }, [csvData]);

  // Handle case where data is not parsed yet or no data is available
  if (!parsedData.length) {
    return <div>Loading data...</div>;
  }

  // Process the data to count unique VINs
  const uniqueCounts = parsedData.reduce((acc, item) => {
    const vin = item.VIN;
    acc[vin] = (acc[vin] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(uniqueCounts).slice(0, 10), // Display top 10 VINs for clarity
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
