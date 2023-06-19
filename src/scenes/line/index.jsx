import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Responsive Line Chart"
          subtitle="This is a sample of a responsive line chart"
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
          <LineChart />
        </Box>
      </Box>      
    </Box>
  );
};

export default Line;
