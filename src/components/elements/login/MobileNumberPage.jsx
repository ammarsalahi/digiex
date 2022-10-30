import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import inputFontSize from '../global/inputFontSize'

const labelStyle={
  fontSize:"13px"
 }

const textfieldstyle={
 mb:"24px",
}

export default function MobileNumberPage({send}) {
       var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
       const [phone, setphone] = React.useState("");
       const [errortext,setErrortext]=React.useState("");
       const handlePhone=(event)=>{
        if(event.target.value.length===11){
          if(regex.test(event.target.value)===false){
            setErrortext("شماره وارد شده قابل قبول نیست");
          }else{
            setphone(event.target.value);
            setErrortext("");
          }
        }
        else if(event.target.value.length > 11){
            setErrortext("تعداد ارقام وارد شده بیشتر از حد مجاز است");
        }
        else{
          setphone(event.target.value);
          setErrortext("");
        }
     
    }
  return (
        <Box>
         <Typography className='boldfont' variant="p" component="div" sx={{fontSize:"20px"}}>
          ورود | ثبت نام
          </Typography>
          <form>
             <FormGroup sx={{mt:"32px"}}>
               <FormLabel sx={labelStyle}>شماره موبایل</FormLabel>
               <TextField
                 color="digi"
                 variant="outlined"
                 placeholder="09123456789"
                 sx={textfieldstyle}
                 type="number"
                 value={phone}
                 onChange={handlePhone}
                 helperText={errortext}
                 inputProps={{disableUnderline: true,style:inputFontSize}}
               />
             </FormGroup>
             <Box>
             <Button  onClick={send} className='boxShadowUnset'  variant="contained" sx={{height:"55px" ,backgroundColor:"#424BFB",borderRadius:"8px"}}  fullWidth >
                  ورود
             </Button>
             </Box>
                </form>
           </Box>
  )
}
