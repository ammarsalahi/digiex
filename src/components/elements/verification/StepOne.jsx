import { Button, FormGroup, FormLabel, Typography ,TextField,Snackbar} from '@mui/material'
import { Box ,InputAdornment} from '@mui/material'
import React from 'react';
import { useRef } from 'react';
import DigiAlert from '../global/DigiAlert';
import inputFontSize from '../global/inputFontSize';
import { ACCOUNT_PROFILE, VERIFICATION_INFO } from '../ApiConfig/Endpoints';
import { useSelector } from 'react-redux';
import Api from '../ApiConfig/Api';
import {authpost} from '../ApiConfig/ApiHeaders'

export default function StepOne({onNext}) {
  // const {phone,fullname,pid,date}=useSelector(state=>state.profile);
  const {auth}=useSelector(state=>state.authtoken);
  const [isfucosed, setisfucosed] = React.useState(false)
  var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
  const [alert,setAlert]=React.useState(false);

  
  const [formdata,setFormdata]=React.useState({
    firstname:"",
    lastname:"",
    phone:"",
    personalid:"",
    year:"",
    month:"",
    day:"",
  });
  const [errortext,setErrortext]=React.useState({
    firstname:"",
    lastname:"",
    phone:"",
    personalid:"",
    date:"",
  });

  const initialvalues=async()=>{
    await Api.get(ACCOUNT_PROFILE,{
      headers:authpost(auth)
    }).then(res=>{
      if(res.data.statusCode===200){
        const {phoneNumber,firstName,lastName,nationalCode,birthDate}=res.data.data.result;
        let dates=birthDate.slice(0,10).split('-')
        setFormdata(
          {...formdata,
            phone:phoneNumber,
            firstname:firstName,
            lastname:lastName,
            personalid:nationalCode,
            year:dates[0],
            month:dates[1],
            day:dates[2]
          })
      }
    })
  }
  React.useEffect(()=>{
      initialvalues();    
  },[])
  
  const handleAlert=(props)=>(event)=>{
    if(props==='close'){
      setAlert(false);
    }
    if(props==='open'){
      setAlert(true);
    }
  }


  const handlePhone=(props,event)=>{
    if(event.target.value.length===11){
      if(regex.test(event.target.value)===false){
        setErrortext({phone:"شماره وارد شده قابل قبول نیست"});
      }else{
        setFormdata({...formdata,[props]:event.target.value});
        setErrortext({phone:""});
      }
    }
    else if(event.target.value.length > 11){
        setErrortext({phone:"تعداد ارقام وارد شده بیشتر از حد مجاز است"});
    }
    else{
      setFormdata({phone:event.target.value});
      setErrortext({phone:""});
    }
  }
  const handleID=(props,event)=>{
    if(event.target.value.length>=0){
      if(event.target.value.length<11){
        setFormdata({...formdata,[props]:event.target.value});
        setErrortext({personalid:""});
      }else{
        setErrortext({personalid:"تعداد ارقام وارد شده بیشتر از حد مجاز است"});
      }
    }

  }
  const handleChnageFormData =(props)=>(event)=>{
      if(props==='phone'){
            handlePhone(props,event)
      }
      if(props==='personalid'){
          handleID(props,event);
      }
      else{
        setFormdata({...formdata,[props]:event.target.value});
      }
      

  }
    

   
  const handleDate=(props)=>(event)=>{
      if(props==='year'){
        if(event.target.value.length <=4){
          setErrortext({date:""})
          if(event.target.value >0){

            if(event.target.value <= 2012 ){
              setFormdata({...formdata,[props]:event.target.value});
            }
            else{
              setErrortext({date:"مقدار وارد شده اشتباه است"})
            }
          }
          else{
            setErrortext({date:"مقدار وارد شده اشتباه است"})
          }
        }
      }
      if(props==='month'){
        if(event.target.value.length <=2 ){
         if(event.target.value.length >0 ){
           if(event.target.value.length <=12 ){
            setFormdata({...formdata,[props]:event.target.value});
           }
           else{
            setErrortext({date:"مقدار وارد شده اشتباه است"})
          }
         }
         else{
          setErrortext({date:"مقدار وارد شده اشتباه است"})
          }
        }
      }
      if(props==='day'){
        if(event.target.value.length <=2 ){
         if(event.target.value.length >0 ){
           if(event.target.value.length <=30){
            setFormdata({...formdata,[props]:event.target.value});
           }
           else{
            setErrortext({date:"مقدار وارد شده اشتباه است"})
          }
         }
         else{
          setErrortext({date:"مقدار وارد شده اشتباه است"})
          }
        }
      }
  }   


  
  const textfieldstyle={
    mb:"24",
  }
  
   const submit=()=>{
      Api.post(VERIFICATION_INFO,
        {
          "phoneNumber": formdata.phone,
          "firstName": formdata.firstname,
          "lastName": formdata.lastname,
          "nationalCode": formdata.personalid,
          "birthDate": `${formdata.year}-${formdata.month}-${formdata.day}`,
        },
        {headers:authpost(auth)}).then((res)=>{
         
          if(res.data.statusCode===200){
             onNext();
          }
        });
   }
  return (
    <div>
       <Box className="d-flex justify-content-start">
        <Typography variant="h6" component="div" className="boldfont">
          تطبیق اطلاعات هویتی
        </Typography>
       </Box>
       <Box sx={{pb:"32px",pt:"24px"}}>
        <form>
          <Box className="row" >
            <FormGroup className="col-lg-6 col-12" sx={{mb:"32px"}}>
              <FormLabel>شماره موبایل</FormLabel>
               <TextField
                color='digi'
                variant="outlined"
                type="number"
                placeholder="09123456789"
                sx={textfieldstyle}
                helperText={errortext.phone}
                value={formdata.phone}
                onChange={handleChnageFormData('phone')}
                InputProps={{
                  style:inputFontSize,
                }}
               />
            </FormGroup>
            <FormGroup className="col-lg-3 col-12" sx={{mb:"32px"}}>
              <FormLabel>نام</FormLabel>
               <TextField
                color='digi'
                variant="outlined"
                placeholder="پیمان"
                sx={textfieldstyle}
                FormHelperTextProps={{color:"red"}}
                helperText={errortext.firstname}
                value={formdata.firstname}
                onChange={handleChnageFormData('firstname')}
                InputProps={{
                  style:inputFontSize,
                }}
               />
            </FormGroup>
            <FormGroup className="col-lg-3 col-12" sx={{mb:"32px"}}>
              <FormLabel>نام خانوادگی</FormLabel>
               <TextField
                color='digi'
                variant="outlined"
                placeholder="تهرانی"
                sx={textfieldstyle}
                FormHelperTextProps={{color:"red"}}
                helperText={errortext.lastname}
                value={formdata.lastname}
                onChange={handleChnageFormData('lastname')}
                InputProps={{
                  style:inputFontSize,
                }}
               />
            </FormGroup>
          </Box>
          <Box className="row">
            <FormGroup className="col-lg-6 col-12" sx={{mb:"32px"}}>
              <FormLabel>کدملی</FormLabel>
               <TextField
                color='digi'
                variant="outlined"
                placeholder="0012345678"
                sx={textfieldstyle}
                type="number"
                inputProps={{
                  disableUnderline: true,
                  style:inputFontSize,
                }}
                FormHelperTextProps={{color:"#a4a6b4"}}
                helperText={errortext.personalid}
                onChange={handleChnageFormData('personalid')}
                value={formdata.personalid}
               />
            </FormGroup>
            <FormGroup className="col-lg-6 col-12" sx={{mb:"32px"}}>
              <FormLabel>تاریخ تولد</FormLabel>
               <div className="d-flex boxdate" style={isfucosed? {border:"2px solid #cbe4eb"}:{}}
               onFocus={()=>{setisfucosed(true)}} onBlur={()=>setisfucosed(false)}
               >
                 <TextField variant='standard'
                 placeholder='روز'
                 sx={{textAlign:"center",mx:"3%"}}  
                 type="number"           
                 InputProps={{
                  disableUnderline:true,
                  endAdornment: <InputAdornment position="end"> / </InputAdornment>,
                  style:inputFontSize,
                 }}
                  value={formdata.day}
                  onChange={handleDate('day')}
                 />
                <TextField variant='standard'
                  placeholder='ماه'
                  sx={{mx:"3%",border:"none"}}
                  type="number"           
                  InputProps={{
                    disableUnderline:true,
                    endAdornment: <InputAdornment position="end"> / </InputAdornment>,
                    style:inputFontSize,
                   }} 
                    value={formdata.month}
                   onChange={handleDate('month')}
                 />    
                <TextField variant='standard'
                  placeholder='سال'
                  type="number"                       
                   sx={{textAlign:"center",mx:"3%"}}  
                   InputProps={{
                    disableUnderline:true,
                    style:inputFontSize,
                   }}  
                  value={formdata.year}
                  onChange={handleDate('year')}               
                />
               </div>
               <Typography variant="p" fontSize={12} sx={{color:"grey",mt:1,ml:2}}>
                  {errortext.date}
               </Typography>
            </FormGroup>

          </Box>
          <div className='d-lg-block d-md-none d-sm-none d-none'>
          <Box className="d-flex justify-content-end">
            <Button 
              variant="contained" 
              sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"183px",mt:"50px",borderRadius:'8px'}}
              onClick={submit}  
            >
              ثبت و مرحله بعد
            </Button>
          </Box>
        </div>
        <div className='d-lg-none d-md-block d-sm-block d-block'>
           <Box className="d-flex justify-content-end">
            <Button 
                fullWidth
                variant="contained" 
                sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px",mt:"10%",borderRadius:"8px"}}
                onClick={submit}  
            >
              ثبت و مرحله بعد
            </Button>
          </Box>
        </div>
          
        </form>
       </Box>
       <DigiAlert open={alert} close={handleAlert('close')} message="این یک پیام است!" type="error" />
    </div>
  )
}
