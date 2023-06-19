import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

import React from "react";

const Pie = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Responsive Pie Chart"
          subtitle="This is a sample of a responsive pie chart"
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box height="75vh"
        gridColumn="span 12"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <PieChart />
      </Box>
      </Box>
      
      
    </Box>
  );
};

export default Pie;
