import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useEffect } from "react";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Header from "../../components/Header";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

const DashboardReport = ({closeReport}) => {
    // const closeReport = props.handleCloseReport
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const createPDF = async () => {   
    
    const pdf = new jsPDF("portrait", "pt", "a4");     
    const data = await html2canvas(document.querySelector("#modalPDF"));
    const img = data.toDataURL("image/png");  
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);      
    pdf.save("shipping_label.pdf");
    // closeReport()
  };

  
  return (
    <Box  m="20px" >
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
            onClick={()=>createPDF()}
          >
            <PictureAsPdfOutlinedIcon sx={{ mr: "10px" }} />
            Download As PDF
          </Button>
        </Box>
      </Box>
      <Box
        id='modalPDF'
        display="grid"
        gridTemplateColumns="repeat(12, 8fr)"
        gridAutoRows="440px"
        gap="20px"
      >
        <Box
        
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

         <BarChart isDashboard={false} />
         
        </Box>
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >

        <LineChart isDashboard={false} />   
         
        </Box>

        </Box>
    </Box>
  )
}

export default DashboardReport