import { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GoogleMap from "../../components/GoogleMap";

import React from "react";
import AddressForm from "../../components/AddressForm";

const GMaps = () => {

  const [location, setLocation] = useState(null);
  const [locate, setLocate] = useState(`place`);
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  function handleLocationClick() {
    setLocate('view')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function handleLocationReset() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(cleared, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  function handleFormValue(values) {
    setLocate('place')
    console.log(values)
    // const newLocation = Object.values(values).toString().replace(',,',',')
    const newLocation = `q=${values.number}+${values.streetName.replace(/\s/g , "+")},${values.suburb.replace(/\s/g , "+")},${values.city.replace(/\s/g , "+")},${values.city.replace(/\s/g , "+")}`.toString().replace(',,',',')
    // .map((val) =>val.join(', '))
    console.log(newLocation)
    if (values) {
      setLocation(newLocation)
    } else {
      console.log("Address not supported");
    }
  }

  function success(position) {
    console.log('GEO', position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`center=${latitude},${longitude}`);
  }
  function cleared() {    
    setLocation(null);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  console.log(process.env.REACT_APP_GMAP)

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Google Maps"
          subtitle="This is a sample google maps address and geolocation positioning"
        />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box height="75vh" 
          gridColumn="span 4"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AddressForm handleFormValue={(values) => handleFormValue(values)} center={null}/>          
        </Box>
        <Box height="75vh" 
          gridColumn="span 8"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <GoogleMap locate={locate} location={location} handleLocationClick={()=>handleLocationClick()} handleLocationReset={()=>handleLocationReset()} center={`center=${latitude},${longitude}`}/>          
        </Box>
      </Box>
    </Box>
  );
};

export default GMaps;
