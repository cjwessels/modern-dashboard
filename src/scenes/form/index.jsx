import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from 'yup'
import {useMediaQuery, Snackbar, Alert} from "@mui/material";
import Header from "../../components/Header";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: '',
}

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('required'),
    contact: yup
        .string()
        .matches(phoneRegExp, "Please enter a valid phone number")
        .required('required'),
    address1: yup.string().required('required'),
    address2: yup.string().required('required'),
})

const Form = () => {

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
        console.log(values)
        resetForm({values:''});
        handleClick()
    }

    return (
        <Box m='20px'>
            <Header title="CREATE USER" subtitle="Create a new user profile." />
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
                                label='First Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name='firstName'
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}       
                                sx={{gridColumn: 'span 2'}}        
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Last Name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name='lastName'
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: 'span 2'}}
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Email'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name='email'
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}       
                                sx={{gridColumn: 'span 2'}}        
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Contact number'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name='contact'
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{gridColumn: 'span 2'}}
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Address 1'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name='address1'
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}       
                                sx={{gridColumn: 'span 4'}}        
                                />
                                <TextField
                                fullWidth
                                variant="filled"
                                type='text'
                                label='Address 2'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name='address2'
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{gridColumn: 'span 4'}}
                                />
                        </Box>
                        <Box display="flex" justifyContent='end' mt='20px'>
                            <Button type='submit' variant="contained" color='secondary' size="small" sx={{color: '#fff'}}>Create New User</Button>
                            <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    You Successfully Added The New User!
                                </Alert>
                            </Snackbar>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form