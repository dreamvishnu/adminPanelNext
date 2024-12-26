import React, { FC, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { Box, Select, MenuItem, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

interface BarChartProps {
  filter: "Month" | "Year";
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const BarLineChart: FC<BarChartProps> = ({ filter, setFilter }) => {
  // Dynamic data fetching or generation
  const fetchData = (filter: "Month" | "Year") => {
    if (filter === "Month") {
      return {
        xLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        totalEvents: Array.from({ length: 12 }, () => Math.floor(Math.random() * 150) + 50),
        uniqueUsers: Array.from({ length: 12 }, () => Math.floor(Math.random() * 150) + 50),
        totalRevenue: Array.from({ length: 12 }, () => Math.floor(Math.random() * 150) + 50),
      };
    } else {
      return {
        xLabels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        totalEvents: Array.from({ length: 6 }, () => Math.floor(Math.random() * 500) + 200),
        uniqueUsers: Array.from({ length: 6 }, () => Math.floor(Math.random() * 500) + 200),
        totalRevenue: Array.from({ length: 6 }, () => Math.floor(Math.random() * 500) + 200),
      };
    }
  };

  const { xLabels, totalEvents, uniqueUsers, totalRevenue } = useMemo(() => fetchData(filter), [filter]);

  const chartData: ChartData<"bar" | "line"> = useMemo(() => {
    const trendline: number[] = [];

    // Calculate trendline values based on totalEvents
    totalEvents.forEach((value, index) => {
      const trendValue =
        value * 0.5 + // 50% weight for total events
        uniqueUsers[index] * 0.3 + // 30% weight for unique users
        totalRevenue[index] * 0.2; // 20% weight for total revenue
      trendline.push(trendValue);
    });

    return {
      labels: xLabels,
      datasets: [
        {
          label: "Total Events",
          type: "bar",
          data: totalEvents,
          backgroundColor: "rgba(75, 192, 192, 0.8)", // Blue
          borderRadius: { topLeft: 10, topRight: 10 },
          barPercentage: 0.3,
          categoryPercentage: 0.8,
        },
        {
          label: "Unique Users",
          type: "bar",
          data: uniqueUsers,
          backgroundColor: "rgba(40, 121, 221, 0.8)", // Yellow
          borderRadius: { topLeft: 10, topRight: 10 },
          barPercentage: 0.3,
          categoryPercentage: 0.8,
        },
        {
          label: "Total Revenue",
          type: "bar",
          data: totalRevenue,
          backgroundColor: "rgba(229, 66, 102, 0.8)", // Red
          borderRadius: { topLeft: 10, topRight: 10 },
          barPercentage: 0.3,
          categoryPercentage: 0.8,
        },
        {
          label: "Overall Trend",
          type: "line",
          data: trendline,
          borderColor: "rgba(54, 162, 235, 1)", // Blue
          backgroundColor: "transparent",
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "rgba(54, 162, 235, 1)",
          pointBorderColor: "white",
        },
      ],
    };
  }, [xLabels, totalEvents, uniqueUsers, totalRevenue]);

  const chartOptions: ChartOptions<"bar" | "line"> = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          titleColor: "#ffffff",
          bodyColor: "#ffffff",
        },
        legend: {
          labels: {
            color: "#4B5563",
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        x: {
          type: "category",
          grid: {
            display: false,
          },
          ticks: {
            color: "#6B7280",
          },
        },
        y: {
          beginAtZero: true,
          suggestedMax: Math.max(...totalEvents, ...uniqueUsers, ...totalRevenue) + 50, // Buffer for visualization
          ticks: {
            color: "#6B7280",
          },
        },
      },
    };
  }, [totalEvents, uniqueUsers, totalRevenue]);

  return (
    <Box sx={{ padding: "20px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
        <Typography variant="h6">Monthly/Yearly Statistics</Typography>
        <Box display="flex" alignItems="center">
          <FilterAltIcon sx={{ marginRight: "8px", color: "#6200ea" }} />
          <Select value={filter} onChange={(e) => setFilter(e.target.value as "Month" | "Year")}>
            <MenuItem value="Month">Month</MenuItem>
            <MenuItem value="Year">Year</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box >
        <Chart type="bar" data={chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

export default BarLineChart;
