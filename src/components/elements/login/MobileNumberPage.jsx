import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'

export default function MobileNumberPage({send}) {
        const labelStyle={
         fontSize:"13px"
        }
    
       const textfieldstyle={
        pt:"12px",
        fontSize:"16px",
        textAlign:"center"
      }
  return (
        <Box sx={{pt:"10.3%"}}>
         <Typography variant="p" component="div" sx={{py:"48px",px:"55px",fontSize:"20px"}}>
          ورود | ثبت نام
          </Typography>
          <form>
             <FormGroup sx={{mb:"32px",px:"6%"}}>
               <FormLabel sx={labelStyle}>شماره موبایل</FormLabel>
               <TextField
                 color="digi"
                 variant="outlined"
                 placeholder="09123456789"
                 sx={textfieldstyle}
                 type="tel"
                 inputProps={{ maxLength: 11,disableUnderline: true}}
               />
             </FormGroup>
             <Box sx={{px:"6%"}}>
             <Button  onClick={send}  variant="contained" sx={{height:"55px" ,backgroundColor:"#424BFB",borderRadius:"8px"}}  fullWidth >
                  ورود
             </Button>
             </Box>
                </form>
                 {/* <div>
                <Box className="d-lg-block d-md-block d-sm-none d-none text-center fixed-bottom" sx={{pb:"32px",pl:"52%"}}>
                  <Typography variant="p" component="div" fontSize="16px" >
                  &#169; تمام حقوق این پلتفرم محفوظ میباشد 
                  </Typography>
                </Box>
                <Box className="d-lg-none d-md-none d-sm-block d-block text-center fixed-bottom" sx={{pb:"32px"}}>
                  <Typography variant="p" component="div" fontSize="16px" >
                  &#169; تمام حقوق این پلتفرم محفوظ میباشد 
                  </Typography>
                </Box>
                </div>  */}
           </Box>
  )
}
