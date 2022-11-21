import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import inputFontSize from '../global/inputFontSize'
import Api from '../ApiConfig/Api';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import {initTime, loginAction} from '../redux/actions';
import DigiAlert from '../global/DigiAlert';
import {PHONE_CODE} from '../ApiConfig/Endpoints'
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
      const [message,setmessage]=React.useState("")
      const [open,setopen]=React.useState(false);

       const handlePhone=(event)=>{
        if(event.target.value.length<12){
          setphone(event.target.value);
          if(event.target.value.match(regex)){
              setErrortext("")
          }
          else{
            setErrortext("شماره وارد شده قابل قبول نیست");
          }
        }
    }
    const getCounter=async(number)=>{
      await Api.get(PHONE_CODE(number)).then(res=>{
        dispatch(initTime(res.data.data.result))
      });
    }
    const SendLogin=(e)=>{    
      if(phone!='')  {
        Api.post(phoneurl,{"phoneNumber":phone}).then(res=>{
          if(res.data.statusCode==200){
            const {tempToken,ttlSecond}=res.data.data.result;
            dispatch(loginAction(tempToken,phone,ttlSecond));
            localStorage.setItem('conf-return','/login');
            e.preventDefault();
            navigate('/confirm')
          }
        }).catch(err=>{
          console.log(err)
          setmessage(err.response.data.data.message);
        });
      }else{
        setErrortext("شماره موبایل را وارد نکرده اید!")
      }
    }
  return (
        <Box>
         <Typography className='boldfont' variant="p" component="div" sx={{fontSize:"20px"}}>
          ورود | ثبت نام
          </Typography>
          <form >
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
             <Button onClick={SendLogin} className='boxShadowUnset'  variant="contained" sx={{height:"55px" ,backgroundColor:"#424BFB",borderRadius:"8px"}}  fullWidth >
                  ورود
             </Button>
             </Box>
                </form>
              <DigiAlert open={open} close={()=>setopen(false)} type="error" message={message}  />
           </Box>
  )
}
