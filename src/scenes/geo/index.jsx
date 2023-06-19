import { Box, colors } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
        title="Responsive Geography Chart"
        subtitle="This is a sample of a responsive geography chart"
      />
      </Box>
      <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
        height="75vh"
        gridColumn="span 12"
            display="flex"
            alignItems="center"
            justifyContent="center"
        border={`1px solid ${colors.grey[500]}`}
        // padding="5px"
        boxShadow="0px 0px 8px grey inset;"
      >
        <GeoChart />
      </Box>
        </Box>
      
    </Box>
  );
};

export default Geo;
