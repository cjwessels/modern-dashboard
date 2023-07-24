
import { useState } from "react";
import { useTheme, Box} from "@mui/material";
import { tokens } from "../theme";
import Button from '@mui/material/Button';
import AddressForm from "./AddressForm";

const GoogleMapView = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const location = props.location
  const locate = props.locate
  const center= props.center
  const handleLocationClick = props.handleLocationClick
const handleLocationReset = props.handleLocationReset

//   const [location, setLocation] = useState(null);

//   function handleLocationClick() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//       console.log("Geolocation not supported");
//     }
//   }

//   function handleLocationReset() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(cleared, error);
//     } else {
//       console.log("Geolocation not supported");
//     }
//   }

//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     setLocation({ latitude, longitude });
//   }
//   function cleared() {    
//     setLocation(null);
//   }

  function error() {
    console.log("Unable to retrieve your location");
  }

  const GMAP = process.env.REACT_APP_GMAP;

  return (
    

    <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="600px"
        gap="20px"
        width='100%'
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius='10px'
        >
            {/* {!location ? <Button variant="contained" onClick={handleLocationClick}>Get Geo Location</Button> : <Button variant="contained" onClick={handleLocationReset}>Reset</Button>} */}
        </Box>
        <Box
          gridColumn="span 10"
          p='10px'
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          
          borderRadius='10px'
        >
      {location ? (
        <div style={{paddingTop: '60px'}}>
          {/* <p>Location: {location.latitude}</p>
          <p>Longitude: {location.longitude} </p> */}
          <iframe
            sx={{borderRadius:'5px'}}
            title="g-map"
            width="600"
            height="450"
            style={{border:0}}
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/${locate}?key=${GMAP}
            &q=${location}&zoom=17`}>
        </iframe>
        </div>
      ) : null}

        </Box>
        </Box>

  );
};

export default GoogleMapView;
