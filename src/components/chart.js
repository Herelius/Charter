import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const Chart = () => {
  const chartData = {
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Redford",
    ],
    datasets: [
      {
        label: "Population",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: "rgba(255, 159, 6, 0.6)",
      },
    ],
  };
  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Largest cities in Massachussetts",
              font: {
                size: 25,
              },
            },
            legend: {
              display: true,
              position: "right",
              font: {
                size: 18,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
