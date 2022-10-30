import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import React from 'react'
import SignLayout from '../elements/global/SignLayout'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'
export default function Register() {
   let navigate=useNavigate();
   const labelStyle={
    fontSize:"14px"
   }
   const textfieldstyle={
    mb:"24px",
    fontSize:"14px",

   }
  return (
    <SignLayout>
        <Box>
            <Box className="d-flex justify-content-between" sx={{mb:"32px"}}>
                <Typography variant="h5" component="div" className='boldfont' sx={{fontSize:"20px"}}>
                ثبت نام
                </Typography>
                <Button onClick={()=> navigate('/login')} className='boxShadowUnset' size="small" endIcon={<ArrowBackIos/>}>
                      بازگشت      
                </Button>
            </Box>
         
          <form>
             <FormGroup>
               <FormLabel sx={labelStyle}>شماره موبایل</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="09123456789"
                 sx={textfieldstyle}
                 type="tel"
                 inputProps={{ maxLength: 11,disableUnderline: true }}
               />
             </FormGroup>
             <Box className="row">
             <FormGroup className="col-lg-6 col-12">
               <FormLabel sx={labelStyle}>نام</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="پیمان"
                 sx={textfieldstyle}
               />
             </FormGroup>
             <FormGroup className="col-lg-6 col-12">
               <FormLabel sx={labelStyle}>نام خانوادگی</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="تهرانی"
                 sx={textfieldstyle}
               />
             </FormGroup>
             </Box>
             <FormGroup>
               <FormLabel sx={labelStyle}>کد معرف</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="E6S8S3"
                 sx={textfieldstyle}
               />
             </FormGroup>
             <Box>
             <Button variant="contained" className='boxShadowUnset' sx={{height:"55px" ,backgroundColor:"#424BFB"}}  fullWidth>
                  ثبت نام
             </Button>
             </Box>
            </form>
              
           </Box>
    </SignLayout>
  )
}
