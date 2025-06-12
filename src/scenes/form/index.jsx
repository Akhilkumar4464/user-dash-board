import React from 'react'
 import {Box, Button , TextField } from '@mui/material';
 import *  as yup from 'yup';
 import useMediaQuery from '@mui/material/useMediaQuery';
 import Header from "../../components/Header";
import { Formik } from 'formik';

 const initialvalues = {
  firstName: '',
  lastName: '',
  email: '',
  Contact: '',
  address: '',
  address1:'',
  address2: '',
  
 }


 const phoneRegExp =
     /^(\+91[-\s]?)?[0]?(91)?[6789]\d{9}$/;
 

function Form() {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email( 'Invalid email').required(),
    Contact: yup.string().matches(phoneRegExp," phone no is not valid ").required(),
    address: yup.string().required(),
    address1:yup.string().required(),
    address2:yup.string().required(),
    });




  const hendleSubmit =(values)=>{
      console.log(values);
  }
  return (
    <Box m="20px">
        <Header  title= " Create user"   subtitle =" user info"/>

      <Formik
        onSubmit={hendleSubmit}
        initialValues={initialvalues}
        validationSchema={userSchema}
      >
{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) =>
  (
    <form onSubmit={handleSubmit}>
   <Box display="grid" gridTemplateColumns="repeat(4,minmax(0, 1fr))" gap="30px"
    sx={{
      "& > div": { gridColumn:isNonMobile ? undefined:" span 4"},
    }}
   >
      <TextField
      fullWidth
      label="First Name"
      variant="filled"
 
      name="firstName"
      value={values.firstName}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!touched.firstName && !!errors.firstName}
       helperText={touched.firstName && errors.firstName}

       sx ={{
        gridColumn:isNonMobile ? "span 2" : "span 1",
        }}
      />
       
  <TextField
      fullWidth
      label="last Name"
      variant="filled"
 
      name="lastName"
      value={values.lastName}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!touched.lastName && !!errors.lastName}
       helperText={touched.lastName && errors.lastName}

       sx ={{
        gridColumn:isNonMobile ? "span 2" : "span 1",
        }}
      />
<TextField
      fullWidth
      label="email"
      variant="filled"
 
      name="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!touched.email && !!errors.email}
       helperText={touched.email && errors.email}

       sx ={{
        gridColumn:"span 4" ,
        }}
      />


      <TextField
      fullWidth
      label=" address"
      variant="filled"
 
      name="address"
      value={values.address}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!touched.address && !!errors.address}
       helperText={touched.address && errors.address}

       sx ={{
        gridColumn:" span 4" 
        }}
      />


<TextField
      fullWidth
      label=" address1"
      variant="filled"
 
      name="address1"
      value={values.address}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!touched.address1 && !!errors.address1}
       helperText={touched.address1 && errors.address1}

       sx ={{
        gridColumn:" span 4" 
        }}
      />

     <TextField
      fullWidth
      label=" address2"
      variant="filled"
 
      name="address2"
      value={values.address}
      onChange={handleChange}
      onBlur={handleBlur}
      error={!!touched.address2 && !!errors.address2}
       helperText={touched.address2 && errors.address2}

       sx ={{
        gridColumn:" span 4" 
        }}
      />

</Box>
 <Box display=" flex" sx={{mt:2}}  justifyContent="end">
   <Button 
     type='submit'
     color ="secondary"
     variant="contained"
     sx={{mr:2}}
     
   
   
   > 
     create new User
   </Button>
 </Box>
 </form>
    )}
         </Formik>
    </Box>
  )
}

export default  Form;
