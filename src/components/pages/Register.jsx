import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import React from 'react'
import SignLayout from '../elements/global/SignLayout'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material';
import Api from '../elements/ApiConfig/Api';
import {ACCOUNT_PROFILE} from '../elements/ApiConfig/Endpoints';
import DigiAlert from '../elements/global/DigiAlert';


const labelStyle={
  fontSize:"14px"
}

const textfieldstyle={
  mb:"24px",
  fontSize:"14px",
 }

export default function Register() {
    const [formdata, setformdata] = React.useState({
      phone:"",
      firstname:"",
      lastname:"",
      code:""
    });
    const [isload, setisload] = React.useState({
      phone:false,
      firstname:false,
      lastname:false,
      code:false
    });
    const [message, setmessage] = React.useState("")


   let navigate=useNavigate();


   const handleChange=(props)=>(event)=>{
      setformdata({...formdata,[props]:event.target.value});
      if(event.target.value<1){
        setisload({...isload,[props]:true})
      }
      else{
        setisload({...isload,[props]:false})
      }
   }
   const submit=()=>{
     if(isload.phone!=false && isload.firstname!=false && isload.lastname!=false ){
         Api.put(ACCOUNT_PROFILE,{
           email:formdata.phone,
           firstName:formdata.firstname,
           lastName:formdata.lastname,
           referalCode:formdata.code,
         }).then(res=>{
            console.log(res.data);
         }).catch(err=>{
            console.log(err)
         });
     }else{
         setmessage("اطلاعات کامل وارد نشده است")
     }
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
                 inputProps={{ maxLength: 11}}
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
                  onChange={handleChange('firstname')}
                  value={formdata.firstname}
               />
             </FormGroup>
             <FormGroup className="col-lg-6 col-12">
               <FormLabel sx={labelStyle}>نام خانوادگی</FormLabel>
               <TextField
                 variant="outlined"
                 color="digi"
                 placeholder="تهرانی"
                 sx={textfieldstyle}
                 onChange={handleChange('lastname')}
                  value={formdata.lastname}
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
                  value={formdata.code}
                  onChange={handleChange('code')}
                  inputProps={{
                    maxLength:6
                  }}
               />
             </FormGroup>
             <Box>
             <Button variant="contained" onClick={submit} className='boxShadowUnset' sx={{height:"55px" ,backgroundColor:"#424BFB"}}  fullWidth>
                  ثبت نام
             </Button>
             </Box>
            </form>
              <DigiAlert />
           </Box>
    </SignLayout>
  )
}
