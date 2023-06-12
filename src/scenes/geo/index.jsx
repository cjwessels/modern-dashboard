import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geo = () => {
  return (
    <Box m="20px">
      <Header
        title="Responsive Geography Chart"
        subtitle="This is a sample of a responsive geography chart"
      />
      <Box height="75vh">
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
