import { Bar } from "react-chartjs-2"
import { registerCharts } from "../registerCharts"

registerCharts() 

const BarChart = () => {
  const options = {
    responsive: true,
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
        text: "Partnership Duration",
        font: {
          family: 'Josefin Sans, sans-serif',
          size: 18,
          weight: 600
        }
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Josefin Sans, sans-serif'
          }
        }
      },
      y: {
        ticks: {
          font: {
            family: 'Josefin Sans, sans-serif'
          }
        }
      }
    }
  };

  const labels = ["Reforestation Program", "Food Bank Initiative", "Tech for All", "After School Program"];

  const partnershipDuration = [8, 7, 6, 5,];

  const data = {
    labels,
    datasets: [
      {
        label: "Months",
        data: partnershipDuration,
        backgroundColor: [
          " #004977",
          " #004977",
          " #004977",
          " #004977",
          " #004977",
          " #004977",
          " #004977",
          " #004977",
          " #004977",
          " #004977",
        ],
        borderColor: " #004977",
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;


