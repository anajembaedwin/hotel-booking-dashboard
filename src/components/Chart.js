// src/components/Chart.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all necessary Chart.js components
Chart.register(...registerables);

const ChartComponent = ({ title, data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line', // You can change this to 'bar', 'pie', etc. depending on your needs
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            labels: data.labels,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]); // Re-run the effect when the data prop changes

  return (
    <div style={{ width: '48%' }}>
      <h2>{title}</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
