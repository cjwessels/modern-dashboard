import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const DashboardReport = ({closeReport}) => {
    // const closeReport = props.handleCloseReport
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const createPDF = async () => {   
    
    const pdf = new jsPDF("portrait", "pt", "a4");     
    const data = await html2canvas(document.querySelector("#multiPDF1"));
    const img = data.toDataURL("image/png");  
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);      
    pdf.save("shipping_label.pdf");
    closeReport()
    // handleCloseReport()
  };

  createPDF()
  return (
    <Box  m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="MODERN DASHBOARD"
          subtitle="Welcome to the modern dashboard"
        />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        id='multiPDF1'
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

         <LineChart isDashboard={false} />
         <BarChart isDashboard={false} />   
        </Box>

        </Box>
    </Box>
  )
}

export default DashboardReport