import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

import React from "react";

const Pie = () => {
  return (
    <Box m="20px">
      <Header
        title="Responsive Pie Chart"
        subtitle="This is a sample of a responsive pie chart"
      />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
