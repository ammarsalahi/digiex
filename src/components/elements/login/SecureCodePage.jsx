import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'
export default function SecureCodePage({send}) {

    const labelStyle={
        fontSize:"13px",
       }
       
       const textfieldstyle={
        fontSize:"40px",
        width:"103px",
        height:"48px",
        mt:"32px",
        textAlign:"center",
       }
  return (
    <Box sx={{pt:"10.3%",px:"48px"}}>
              <Box className="d-flex justify-content-between" sx={{py:"27px"}}>
                <Typography variant="h5" component="div" sx={{fontSize:"20px"}}>
                کد تایید شماره موبایل
                </Typography>
                <Button onClick={send} size="small" endIcon={<ArrowBackIos/>}>
                      بازگشت      
                </Button>
              </Box>
     
          <form>
             <FormGroup>
               <FormLabel sx={labelStyle}>
               کد تایید به شماره موبایل ۰۹۱۲۵۷۷۶۵۹۸ ارسال شد.
               </FormLabel>
               <Box className="d-flex justify-content-between">

               <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 />
                <TextField
                color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 />
                 <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 />
                 <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 />
               </Box>
               
             </FormGroup>
             <Box>
              <Box className='d-flex justify-content-between' sx={{py:"23px"}}>
                  <FormLabel sx={labelStyle} className="mt-2">
                    مهلت استفاده کد: ۰۰:۴۸
                    </FormLabel>
               <Button size="small">
               ارسال مجدد کد      
                </Button>
              </Box>
             <Button variant="contained" sx={{height:"55px" ,backgroundColor:"#424BFB"}}  fullWidth>
                  بررسی 
             </Button>
             </Box>
                </form>
                
           </Box>
  )
}
