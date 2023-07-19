import { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Modal,
  Grow,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { useNavigate } from "react-router-dom";

import { CSVLink, CSVDownload } from "react-csv";
import { mockLineData as data } from "../../data/mockData";

// import {PDFDownloadLink} from "@react-pdf/renderer";

import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import PrintDashboard from "../../components/printComponents/Dashboard";
import DashboardReport from "../../components/printComponents/DashboardReport";

const Dashboard = () => {
  
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

    const data2 = await html2canvas(document.querySelector("#multiPDF2"));
    const img2 = data2.toDataURL("image/png");
    const imgProperties2 = pdf.getImageProperties(img2);
    const pdfWidth2 = pdf.internal.pageSize.getWidth();
    const pdfHeight2 = (imgProperties.height * pdfWidth) / imgProperties2.width;
    // pdf.addImage(img2, "PNG", 0, 160, pdfWidth2, pdfHeight2);

    const data3 = await html2canvas(document.querySelector("#multiPDF3"));
    const img3 = data3.toDataURL("image/png");
    const imgProperties3 = pdf.getImageProperties(img3);
    const pdfWidth3 = pdf.internal.pageSize.getWidth();
    const pdfHeight3 = (imgProperties.height * pdfWidth) / imgProperties3.width;
    pdf.addPage();
    pdf.addImage(img3, "PNG", 0, 0, pdfWidth3, pdfHeight3);

    pdf.save("shipping_label.pdf");
  };

  const [exportData, setExportData] = useState([]);

  const headers = [
    { label: "Name", key: "name" },
    { label: "Planes", key: "plane" },
    { label: "Helicopters", key: "helicopter" },
    { label: "Boats", key: "boat" },
    { label: "Trains", key: "train" },
    { label: "Subways", key: "subway" },
    { label: "Busses", key: "bus" },
    { label: "Cars", key: "car" },
    { label: "Moto", key: "moto" },
    { label: "Bicycles", key: "bicycle" },
    { label: "Horses", key: "horse" },
    { label: "Skateboards", key: "skateboard" },
    { label: "Others", key: "others" },
  ];

  const newData = () => {
    const dat = data.map((con) => ({
      name: con.id,
      helicopter: con.data[0].y,
      plane: con.data[1].y,
      boat: con.data[2].y,
      train: con.data[3].y,
      subway: con.data[4].y,
      bus: con.data[5].y,
      car: con.data[6].y,
      moto: con.data[7].y,
      bicycle: con.data[8].y,
      horse: con.data[9].y,
      skateboard: con.data[10].y,
      others: con.data[11].y,
    }));
    return dat;
  };

  useEffect(() => {
    setExportData(newData());
  }, []);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
    bgcolor: `${colors.primary[400]}`,
    border: `2px solid ${colors.primary[900]}`,
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };

  const [modalContent, setModalContent] = useState(<>HELP</>);
  const handelModalContent = (id) => {
    switch (id) {
      case "geo":
        setModalContent(<GeoChart isDashboard={false} />);
        break;
      case "barChart":
        setModalContent(<BarChart isDashboard={false} />);
        break;
      case "lineChart":
        setModalContent(<LineChart isDashboard={false} />);
        break;
      default:
        console.log(id);
        break;
    }
  };

  const reportingDate = `${new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "/")}`;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openReport, setOpenReport] = useState(false);
  const handleOpenReport = () => setOpenReport(true);
  const handleCloseReport = () => setOpenReport(false);

  const navigate = useNavigate();

  return (
    <Box m="20px" sx={{ maxHeight: "100vh !important" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h3"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          {reportingDate}
        </Typography>
        <Header
          title="MODERN DASHBOARD"
          subtitle="Welcome to the modern dashboard"
        />
        <Box>
          <Button
            onClick={handleOpenReport}
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
          >
            <FileOpenOutlinedIcon sx={{ mr: "10px" }} />
            Open Printer Friendly View
          </Button>
          {/* <PDFDownloadLink
            document = {<PrintDashboard />}
            fileName="Test">
              {
                
                
              }
          
          </PDFDownloadLink> */}
        </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,362"
            subtitle="Emails Sent"
            progress="0.14"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="98,125"
            subtitle="Sales Obtained"
            progress="0.19"
            increase="+19%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="362"
            subtitle="New Clients"
            progress="0.29"
            increase="+29%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,312,192"
            subtitle="Traffic Inbound"
            progress="0.84"
            increase="+84%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          id="multiPDF1"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <CSVLink
                filename={"my-file.csv"}
                headers={headers}
                data={exportData}
              >
                <IconButton
                  sx={{
                    ":hover": {
                      backgroundColor: "#58117e",
                      color: "white",
                    },
                    backgroundColor: colors.blueAccent[700],
                    borderRadius: "5px",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />{" "}
                  Download raw data csv
                </IconButton>
              </CSVLink>
            </Box>
          </Box>
          <Box
            height="250px"
            m="5px 0 0 0"
            sx={{ cursor: "zoom-in" }}
            onClick={() => {
              handelModalContent("lineChart");
              handleOpen();
            }}
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          id="multiPDF2"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          sx={{
            "& ::-webkit-scrollbar": {
              // display: "none !important",
              width: "6px !important",
            },
            "& ::-webkit-scrollbar-track": {
              // background: '#868dfb',
              background: "#fff",
            },
            "& ::-webkit-scrollbar-thumb": {
              background: colors.blueAccent[700],
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          id="multiPDF3"
          sx={{ cursor: "zoom-in" }}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          onClick={() => {
            handelModalContent("barChart");
            handleOpen();
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          id="geo"
          sx={{ cursor: "zoom-in" }}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          onClick={() => {
            handelModalContent("geo");
            handleOpen();
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grow
          in={open}
          out={!open}
          style={modalStyle}
          {...(open ? { timeout: 1000 } : { timeout: 1000 })}
        >
          <Box sx={modalStyle}>{modalContent}</Box>
        </Grow>
      </Modal>
      <Modal
        open={openReport}
        onClose={handleCloseReport}
        aria-labelledby="modal-print"
        aria-describedby="modal-print"
      >
        <Box sx={{ ...modalStyle, overflow: "scroll", overflowX: "hidden" }}>
          <DashboardReport closeReport={handleCloseReport} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Dashboard;
