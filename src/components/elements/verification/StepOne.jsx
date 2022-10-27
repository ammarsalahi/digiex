import { Close, ErrorOutline } from '@mui/icons-material';
import { Button, FormGroup, FormLabel, Typography ,TextField,Snackbar} from '@mui/material'
import { Box ,InputAdornment} from '@mui/material'
import React from 'react';
import DigiAlert from '../global/DigiAlert';




export default function StepOne({onNext}) {
  const [isfucosed, setisfucosed] = React.useState(false)
  var regex = new RegExp('^(\\+98|0)?9\\d{9}$');

  const [alert,setAlert]=React.useState(true);

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
  
  const handleAlert=(props)=>(event)=>{
    if(props==='close'){
      setAlert(false);
    }
    if(props==='open'){
      setAlert(true);
    }
  }
  const handleChnageFormData =(props)=>(event)=>{
    if(props==='personalid'){
       if(parseInt(event.target.value)){
        setFormdata({personalid:event.target.value});
       }
    }else{
      setFormdata({...formdata,[props]:event.target.value});
    }
   
  }
    const handlePhone=(event)=>{
        if(event.target.value.length===11){
          if(regex.test(event.target.value)===false){
            setErrortext({phone:"شماره وارد شده قابل قبول نیست"});
          }else{
            setFormdata({phone:event.target.value});
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
  const handleDate=(props)=>(event)=>{
      if(props==='year'){
        if(event.target.value.length <=4){
          setErrortext({date:""})
          if(event.target.value >0){

            if(event.target.value <= 1390 ){
              setFormdata({year:event.target.value});
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
          if(event.target.value >=1 && event.target.value <=12){
            setFormdata({month:event.target.value});

          }
        }
      }
      if(props==='day'){
        if(event.target.value.length <=2 ){
          if(event.target.value >=1 && event.target.value <=31){
            setFormdata({day:event.target.value});

          }
        }
      }
  }   


  
  const textfieldstyle={
    pt:"12px",
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
                onChange={handlePhone}
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
                onChange={handleChnageFormData('firstname')}
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
                onChange={handleChnageFormData('lastname')}
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
                inputProps={{
                  maxLength:10,
                  disableUnderline: true,
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
                 placeholder='سال'
                 sx={{textAlign:"center",mx:"3%"}}  
                 type="number"           
                 InputProps={{
                  disableUnderline:true,
                  endAdornment: <InputAdornment position="end"> / </InputAdornment>,
                 }}
                  value={formdata.year}
                  onChange={handleDate('year')}
                 />
                <TextField variant='standard'
                  placeholder='ماه'
                  sx={{textAlign:"center",mx:"3%",border:"none"}}
                  type="number"           
                  InputProps={{
                    disableUnderline:true,
                    endAdornment: <InputAdornment position="end"> / </InputAdornment>,
                   }} 
                    value={formdata.month}
                   onChange={handleDate('month')}
                 />    
                <TextField variant='standard'
                  placeholder='روز'
                  type="number"                       
                   sx={{textAlign:"center",mx:"3%"}}  
                   InputProps={{
                    disableUnderline:true,
                   }}  
                  value={formdata.day}
                  onChange={handleDate('day')}               
                />
               </div>
               <Typography variant="p" fontSize={10} sx={{color:"red"}}>
                  {errortext.date}
               </Typography>
            </FormGroup>

          </Box>
          <div className='d-lg-block d-md-none d-sm-none d-none'>
          <Box className="d-flex justify-content-end">
            <Button 
              variant="contained" 
              sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"183px",mt:"95px",borderRadius:'8px'}}
              onClick={onNext}  
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
                onClick={onNext}  
            >
              ثبت و مرحله بعد
            </Button>
          </Box>
        </div>
          
        </form>
       </Box>
       <DigiAlert open={alert} close={handleAlert('close')} message="این یک پیام است!" />
    </div>
  )
}
