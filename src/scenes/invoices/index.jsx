import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "date",
      headerName: "Date",
      flex: 1,

      maxWidth: 100,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      align: "right",
      maxWidth: 100,
      cellClassName: "cost-column--cell",
      renderCell: (params) => <Typography>R{params.row.cost}</Typography>,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="INVOICES" subtitle="List of invoice balances" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
        gridColumn="span 12"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // m="40px 0 0 0 "
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: theme.palette.mode ==='dark' ? colors.greenAccent[500] : colors.greenAccent[800],
            fontWeight: 'bold',
            fontSize: '1.3em'
          },
          "& .cost-column--cell": {
            backgroundColor:  theme.palette.mode ==='dark' ?  colors.greenAccent[500] : colors.greenAccent[800] ,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.mode ==='dark' ? colors.blueAccent[700] : colors.greenAccent[600],
            borderBottom: "none",
            fontWeight: 'bold !important',
            fontSize: '1.3em'
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: theme.palette.mode ==='dark' ? colors.blueAccent[700] : colors.greenAccent[600],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      </Box>
      
    </Box>
  );
};

export default Invoices;
