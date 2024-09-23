import React from "react";
import { Pie } from "react-chartjs-2";
import { Typography, Card, CardContent } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import MetaTags from "./MetaTags";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ college }) => {
  const { cost_tuition, cost_roomboard_oncampus, cost_booksupply, cost_other } =
    college;

  const data = {
    labels: [
      "Tuition",
      "Room & Board (On Campus)",
      "Books & Supplies",
      "Other Costs",
    ],
    datasets: [
      {
        data: [
          cost_tuition || 0,
          cost_roomboard_oncampus || 0,
          cost_booksupply || 0,
          cost_other || 0,
        ],
        backgroundColor: [
          "#FF6384", // Tuition
          "#36A2EB", // Room & Board
          "#FFCE56", // Books & Supplies
          "#4BC0C0", // Other Costs
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <>
      <MetaTags
        title="College Fee Distribution - UNIFYND"
        description="Visualize and understand the distribution of college fees with our interactive pie chart. Compare tuition costs across different colleges to make informed financial decisions."
        keywords="college fee distribution, tuition costs, fee comparison, pie chart, study abroad expenses, UNIFYND fee estimator"
        url="https://unifynd.in/pie-chart"
        image="https://unifynd.in/path/to/pie-chart-image.jpg" // Update with actual image URL
      />
      <Card>
        <CardContent>
          <Typography variant="h6">Fee Distribution</Typography>
          <Pie data={data} />
        </CardContent>
      </Card>
    </>
  );
};

export default PieChart;
