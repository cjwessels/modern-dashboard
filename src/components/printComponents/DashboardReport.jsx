import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useEffect } from "react";
import CustomToolbar from "../CustomToolbar";
import { mockDataContacts } from "../../data/mockData";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Header from "../../components/Header";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { PrintOutlined } from "@mui/icons-material";

const DashboardReport = ({ closeReport }) => {
  // const closeReport = props.handleCloseReport
  const theme = useTheme();
  const colors = tokens(!theme.palette.mode);

  const handleFilter = () => {
    // getFilterList(mockDataContacts)
    alert('Coming Soon')
  };

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


  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      type: "text",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Executive Report"
          subtitle="Printable Executive report"
        />
        <Box>
          <Button
            sx={{
              ":hover": {
                backgroundColor: "#58117e",
                color: "white",
              },
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              m: "0 10px 00",
            }}
            onClick={() => createPDF()}
          >
            <PictureAsPdfOutlinedIcon sx={{ mr: "10px" }} />
            Download As PDF
          </Button>
          <Button
            sx={{
              ":hover": {
                backgroundColor: "#58117e",
                color: "white",
              },
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => createPDF()}
          >
            <PrintOutlined sx={{ mr: "10px" }} />
            Print
          </Button>
        </Box>
      </Box>

      <Box
        backgroundColor={colors.primary[900]}
        id="modalPDF"
        display="grid"
        gridTemplateColumns="repeat(12, 8fr)"
        gridAutoRows="220px"
        gap="20px"
        p="30px"
      >
        <Box
          gridColumn="span 12"
          
          gridRow="span 2"
        //   backgroundColor={colors.primary[100]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BarChart
            isDashboard={false}
            isPrintModal={true}
          />
        </Box>
        <Box
        gridColumn="span 12"        
        gridRow="span 3"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // m="40px 0 0 0 "
        // height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "1px solod #123123 !important",
            maxHeight: '578px'
          },
          "& .MuiDataGrid-row": {
            border: "1px solod #123123 !important",
            color: '#123123'
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[600],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiTablePagination-root": {
            display: 'none'          
          },
          "& .MuiDataGrid-footerContainer": {
            display: 'none',
            borderTop: "none",
            backgroundColor: colors.blueAccent[600],
            color: colors.blueAccent[600],
          },
          "& .MuiTablePagination-toolbar": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[600],
            color: colors.blueAccent[600],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& ::-webkit-scrollbar": {
            // display: "none !important",
            width: '6px'
          },
          "& ::-webkit-scrollbar-track": {
            // background: '#868dfb',
            background: '#fff'
          },
          "& ::-webkit-scrollbar-thumb": {
            background: colors.blueAccent[700]
          },
        //   "& .MuiDataGrid-cell": {
        //     background: colors.blueAccent[700]
        //   },
        }}
      >
        <DataGrid
          rows={mockDataContacts.slice(0,10)}
          columns={columns}
          disableSelectionOnClick
        />
      </Box>
        <Box
          gridColumn="span 12"
          gridRow="span 2"
        //   backgroundColor={colors.primary[100]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <LineChart isDashboard={false} isPrintModal={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardReport;
