import { useState } from "react";
import { useTheme,Box, Button, TextField } from "@mui/material";
import { tokens } from "../theme";
import { Formik } from "formik";
import * as yup from 'yup'
import {useMediaQuery, Snackbar, Alert} from "@mui/material";
// import Header from "../../components/Header";

const initialValues = {
    businessName: '',
    number: '',
    streetName: '',    
    postal: '',
    suburb: '',
    city: '',
}

const postalRegExp = /^(\d{4})$/

const userSchema = yup.object().shape({
    businessName: yup.string(),
    streetName: yup.string(),
    number: yup
        .number(),
    postal: yup
        .string()
        .matches(postalRegExp, "Please enter a valid postal code"),
        // .matches(postalRegExp, "Please enter a valid postal code").typeError('you must specify a number')
        //         
    suburb: yup.string(),
    city: yup.string(),
})

const AddressForm = (props) => {
  const handleFormValue = props.handleFormValue
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


    const [openMessage, setOpenMessage] =useState(false)

    const handleClick = () => {
        setOpenMessage(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenMessage(false);
      };

    


    const isNonMobile = useMediaQuery("(min-width:600)")

    const handleFormSubmit = (values, {resetForm}) =>{
        handleFormValue(values)
        resetForm({values:''});
        handleClick()
    }

    return (
        <Box 
        display="grid"
        gridTemplateColumns="repeat(1, 1fr)"
        gridAutoRows="600px"
        gap="20px"
        width='100%'
        >
          <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius='10px'
          p='15px'
        >
<Formik 
                onSubmit={(values, resetForm) => handleFormSubmit(values, resetForm)}                
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched ,handleBlur,handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                            display='grid' 
                            gap='30px' 
                            gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                            sx={{
                                '& > div': { gridColumn: !isNonMobile ? undefined : 'span 4'}
                            }}
                            
                            >
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Business Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.businessName}
                                name='businessName'
                                error={!!touched.businessName && !!errors.businessName}
                                helperText={touched.businessName && errors.businessName}       
                                sx={{gridColumn: 'span 4'}}        
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Street Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.streetName}
                                name='streetName'
                                error={!!touched.streetName && !!errors.streetName}
                                helperText={touched.streetName && errors.streetName}
                                sx={{gridColumn: 'span 3'}}
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='number'
                                label='Number'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.number}
                                name='number'
                                error={!!touched.number && !!errors.number}
                                helperText={touched.number && errors.number}       
                                sx={{gridColumn: 'span 1'}}        
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='number'
                                label='Postal Code'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.postal}
                                name='postal'
                                error={!!touched.postal && !!errors.postal}
                                helperText={touched.postal && errors.postal}
                                sx={{gridColumn: 'span 2'}}
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Suburb'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.suburb}
                                name='suburb'
                                error={!!touched.suburb && !!errors.suburb}
                                helperText={touched.suburb && errors.suburb}       
                                sx={{gridColumn: 'span 4'}}        
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='City'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.city}
                                name='city'
                                error={!!touched.city && !!errors.city}
                                helperText={touched.city && errors.city}
                                sx={{gridColumn: 'span 4'}}
                                />
                        </Box>
                        <Box display="flex" justifyContent='end' mt='20px'>
                            <Button type='submit' variant="contained" color='warning' size="small" sx={{fontWeight: 'bold'}}>Check Location</Button>
                            <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Successfully Found! 
                                </Alert>
                            </Snackbar>
                        </Box>
                    </form>
                )}
            </Formik>

        </Box>
            {/* <Header title="CREATE USER" subtitle="Create a new user profile." /> */}
            
        </Box>
    )
}

export default AddressForm