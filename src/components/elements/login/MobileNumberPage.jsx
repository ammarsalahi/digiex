import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import inputFontSize from '../global/inputFontSize'
import Api from '../ApiConfig/Api';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import {loginAction} from '../redux/actions';

const labelStyle={
  fontSize:"13px"
};

const textfieldstyle={
 mb:"24px",
}

export default function MobileNumberPage({send,phoneurl}) {
      let navigate=useNavigate();
      var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
      const [phone, setphone] = React.useState("");
      const [errortext,setErrortext]=React.useState("");
      const dispatch=useDispatch();

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
    const SendLogin=()=>{    
      if(phone!=="")  {
        Api.post(phoneurl,{"phoneNumber":phone}).then(res=>{
          if(res.data.statusCode==200){
           let token=res.data.data.result.tempToken;
            dispatch(loginAction(token,phone));
          }
        }).catch(err=>console.log(err));
      }else{
        setErrortext("شماره موبایل را وارد نکرده اید!")
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
             <Button  onClick={SendLogin} className='boxShadowUnset'  variant="contained" sx={{height:"55px" ,backgroundColor:"#424BFB",borderRadius:"8px"}}  fullWidth >
                  ورود
             </Button>
             </Box>
                </form>
           </Box>
  )
}
