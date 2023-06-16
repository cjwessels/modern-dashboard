import { Box, colors } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Header
        title="Responsive Geography Chart"
        subtitle="This is a sample of a responsive geography chart"
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[500]}`}
        // padding="5px"
        boxShadow="0px 0px 8px grey inset;"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
