import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="MODERN DASHBOARD" subtitle="Welcome to the modern dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
