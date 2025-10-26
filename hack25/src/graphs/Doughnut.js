import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: 'Josefin Sans, sans-serif',
            size: 14
          }
        }
      },
      title: {
        display: false,
        text: "Top Impact Areas",
        font: {
          family: 'Josefin Sans, sans-serif',
          size: 18,
          weight: 600
        }
      },
    },
  };

  const labels = ["Hunger", "Humanitarian", "Sustainability"];

  const dataValues = [25, 53, 22];

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          "rgba(181, 33, 65, 0.8)",
          "rgba(102, 55, 194, 0.8)",
          "#004977",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgba(107, 55, 211, 1)",
          "#004977",
        ],
        borderWidth: 2,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;


