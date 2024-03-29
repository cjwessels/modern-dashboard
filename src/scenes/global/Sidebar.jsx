import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Box, IconButton, Typography, useTheme, styled  } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
// -- Menu Icons -- //
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';




const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");


  const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: colors.greenAccent[600],
      color: '#dadde9',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(24),
      border: '1px solid #dadde9',
      display: isCollapsed=== true ? 'block':'none'
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: '#dadde9',
    },
  }));
  
    return ( 
    <HtmlTooltip title={title} placement="right" arrow onClick={() => setSelected(title)}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem> 
    </HtmlTooltip>
    );
  };

  return (
    <Box    
      sx={{
        // minHeight: window.outerHeight,
        minHeight: '100%',
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${theme.palette.mode ==='dark'? colors.blueAccent[400] : colors.grey[900]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${theme.palette.mode ==='dark'? colors.blueAccent[300] : colors.grey[800]} !important`,
        },
        "& ::-webkit-scrollbar": {
          // display: "none !important",
          width: '3px'
        },
        "& ::-webkit-scrollbar-track": {
          // background: '#868dfb',
          background: '#fff'
        },
        "& ::-webkit-scrollbar-thumb": {
          background: `${theme.palette.mode ==='dark'? colors.blueAccent[300] : colors.blueAccent[100]} !important`
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "15px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                textAlign="center"
                justifyContent="space-between"
                alignItems="center"
                // ml="-5px"
              >
                
                {!isCollapsed && (
                <img
                  alt="profile-user"
                  width="180px"
                  height="auro"
                  src={`../../assets/placeholder.png`}
                  style={{ cursor: "pointer",  backgroundColor: colors.greenAccent[600], padding: '10px', borderRadius: '8px' }}
                />
              )}
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box mb="25px" >
            <Box display="flex" justifyContent="center" alignItems="center"  >
            <Typography variant="h3" color={colors.grey[100]} sx={{fontSize: !isCollapsed ? '2em': '1em', textAlign: 'center !important' , color:colors.greenAccent[600]}}>
                  {selected.toUpperCase()}
                </Typography>
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                {/* {!isCollapsed && "ESI Attorneys"} */}
              </Typography>
              {/* <Typography variant="h5" color={colors.greenAccent[500]}>
                Admin
              </Typography> */}
            </Box>
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant={!isCollapsed ? "h4" : "h5"}
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>              
              <Item
                title="Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />              
              <Item
                title="Contacts"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant={!isCollapsed ? "h4" : "h5"}
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Google Map"
                to="/googlemaps"
                icon={<FmdGoodIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Random Quotes"
                to="/random"
                icon={<FormatQuoteIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant={!isCollapsed ? "h4" : "h5"}
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
