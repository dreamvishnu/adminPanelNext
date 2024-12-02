import { FC, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import data from "../../data/data.json";
import styles from "./BarChart.module.css";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const BarChart: FC<BarChartProps> = ({ filter, setFilter }) => {
  const chartRef = useRef(null);

  // Define the chart data
  const chartData = {
    labels: Array.from({ length: data.activity[filter as keyof typeof data.activity].length }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: "Completed Tasks",
        data: data.activity[filter as keyof typeof data.activity].map((value: number) => value * 0.8),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Pending Tasks",
        data: data.activity[filter as keyof typeof data.activity].map((value: number) => value * 0.2),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Define chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#4B5563", // Dark gray for legend labels
          font: {
            size: 14,
            family: "Arial",
          },
        },
      },
      title: {
        display: true,
        text: `Task Progress (${filter})`,
        color: "#1F2937", // Text color for title
        font: {
          size: 18,
          family: "Arial",
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true, // Stacked bars on the X-axis
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#6B7280", // Medium gray for X-axis labels
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: true, // Stacked bars on the Y-axis
        grid: {
          color: "#E5E7EB", // Light gray grid lines for Y-axis
        },
        ticks: {
          color: "#6B7280", // Medium gray for Y-axis labels
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <select
          className={styles.filterSelect}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Month">Month</option>
          <option value="Year">Year</option>
        </select>
      </div>
      <div className={styles.chartContainer}>
        <Bar ref={chartRef} data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;
