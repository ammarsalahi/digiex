import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import React from 'react'
import SignLayout from '../elements/global/SignLayout'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'
export default function Register() {
   let navigate=useNavigate();
   const labelStyle={
    fontSize:"13px"
   }
   const textfieldstyle={
    pt:"12px",
    height:"56px",
    fontSize:"13px",
   }
  return (
    <SignLayout>
       
        <Box>
            <Box className="d-flex justify-content-between" sx={{pb:"32px",pt:"27px",px:"6%"}}>
                <Typography variant="h5" component="div" sx={{fontSize:"20px"}}>
                ثبت نام
                </Typography>
                <Button onClick={()=> navigate('/login')} className='boxShadowUnset' size="small" endIcon={<ArrowBackIos/>}>
                      بازگشت      
                </Button>
            </Box>
         
          <form>
             <FormGroup sx={{mb:"35px",px:"6%",fontSize:"12px"}}>
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
             <Box className="row" sx={{px:"6%"}}>
             <FormGroup sx={{mb:"35px"}} className="col-lg-6 col-12">
               <FormLabel sx={labelStyle}>نام</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="پیمان"
                 sx={textfieldstyle}
               />
             </FormGroup>
             <FormGroup sx={{mb:"35px"}} className="col-lg-6 col-12">
               <FormLabel sx={labelStyle}>نام خانوادگی</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="تهرانی"
                 sx={textfieldstyle}
               />
             </FormGroup>
             </Box>
             <FormGroup sx={{mb:"30px",px:"6%"}}>
               <FormLabel sx={labelStyle}>کد معرف</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="E6S8S3"
                 sx={textfieldstyle}
               />
             </FormGroup>
             <Box sx={{px:"6%",pb:"20px"}}>
             <Button variant="contained" className='boxShadowUnset' sx={{height:"55px" ,backgroundColor:"#424BFB"}}  fullWidth>
                  ثبت نام
             </Button>
             </Box>
            </form>
              
           </Box>
    </SignLayout>
  )
}
