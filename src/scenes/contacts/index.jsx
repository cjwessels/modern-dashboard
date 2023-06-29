import { useState } from "react";

import { getFilterList } from "../../helpers/multiFilter";

import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

import CustomToolbar from "../../components/CustomToolbar";
const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilter = () => {
    // getFilterList(mockDataContacts)
    alert('Coming Soon')
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
          title="CONTACTS"
          subtitle="List of contacts for future reference"
        />
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
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
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
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: CustomToolbar }}
          componentsProps={{
            toolbar: {
              // updateOnclick: () => {
              //   setUpdateData((i) => i + 1);
              // },
              filterOnClick: () => {
                handleFilter();
              },
              // modalState: modalState,
            },
          }}
        />
      </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
