import React, { useEffect,useState,useRef } from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos, Refresh } from '@mui/icons-material';
import Api from '../ApiConfig/Api';
import { useDispatch ,useSelector} from 'react-redux';
import DigiAlert from '../global/DigiAlert';
import { authAction ,loginAction,profilelogAction,addprofileAction} from '../redux/actions';
import { LOGIN_PHONE,PHONE_CODE } from '../ApiConfig/Endpoints';
import Countdown from 'react-countdown';

const Completionist = () => <span>منقضی شد!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <FormLabel sx={labelStyle}>مهلت استفاده کد: {minutes}:{seconds}</FormLabel>;

  }
};
const labelStyle={
  fontSize:"14px",
  mt:"30px",
  mb:'20px'
 }
 
 const textfieldstyle={
  width:"100%",
  minHeight:"48px",
  maxHeight:"48px",
  textAlign:"center",
 }

export default function SecureCodePage({codeurl,number}) {
    let {token} =useSelector(state=>state.login);
    const [countValue,setCountValue]=useState({
      value:0,
      basic:1000,
      result:0
    });

    const [code,setCode]=useState({
      first:"",
      second:"",
      third:"",
      forth:"",
      fivth:"",
      complete:""
    });
    const inref =useRef([])
    const [checked, setchecked] = useState(true);
    const [message, setmessage] = useState("");
    const [open, setopen] = useState(false);
    const [messaged,setmessaged]=useState("");
    const [opend, setopend] = useState(false);


    const dispatch=useDispatch();
    
    let naviagte=useNavigate();
    const handleCountValue=(times)=>{
        const results=times * countValue.basic;
        setCountValue({...countValue,value:times,result:results});
    }
    const getCounter=()=>{
      Api.get(PHONE_CODE(number)).then(res=>{
        console.log(res.data);
        const value=res.data.data.result
        handleCountValue(value);
      });
    }
    useEffect(()=>{
      if(checked){
        inref.current[1].focus();
      }
      getCounter();
   },[countValue,Countdown]);


    const handleChange=(props,idx,event)=>{
      setchecked(false)
      if(event.target.value.length <=1){
        setCode({...code,[props]:event.target.value});
        inref.current[idx].focus();
      }
      else{
          inref.current[idx].focus();
      }
    }
    const handleOpen=(props)=>()=>{
      setopen(props);
    }
    const handleOpend=(props)=>()=>{
      setopend(props);
    }
    const CheckCode =()=>{
      Api.post(codeurl,
        {
          "confirmationCode":`${code.first}${code.second}${code.third}${code.forth}${code.fivth}`,
          "tempToken": token,
        }).then(res=>{
            if(res.data.statusCode===200){
                const {userId,fullName}=res.data.data.result;
                
                dispatch(authAction(res.data.token));
               dispatch(profilelogAction("",userId,fullName));
              if(fullName===" "){
                naviagte('/register');
              }else{
                naviagte('/');
              }
            }else{
              setmessage(err.response.data.data.message);
              setopen(true);
            }
        
      }).catch(err=>{
        console.log(err)
      })
    }
    const returnBack=()=>{
      let navs=localStorage.getItem('conf-return');
      if(navs!=null){
        localStorage.removeItem('conf-return')
        naviagte(navs);
      }
    }
    const sendAgain=()=>{
      Api.post(LOGIN_PHONE,{"phoneNumber":number}).then(res=>{
        if(res.data.statusCode==200){
          token=res.data.data.result.tempToken;
          dispatch(loginAction(token,number));
          setmessaged('کد تایید دوباره ارسال شد')
          setopend(true)
          getCounter()
        }
      }).catch(err=>console.log(err));
    }
  return (
        <Box>
              <Box className="d-flex justify-content-between">
                <Typography className='boldfont' variant="h5" component="div" sx={{fontSize:"20px"}}>
                کد تایید شماره موبایل
                </Typography>
                <Button size="small" endIcon={<ArrowBackIos/>} onClick={returnBack}>
                      بازگشت      
                </Button>
              </Box>
     
          <form>
             <FormGroup>
               <FormLabel sx={labelStyle}>
               کد تایید به شماره موبایل {number} ارسال شد.
               </FormLabel>
               <Box className="d-flex justify-content-between">    
               <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.fivth}
                 inputRef={(ref)=>(inref.current[5]=ref)}
                 onChange={(event)=>{
                  handleChange('fivth',0,event)
                 }}
                 />            
               <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 style={{marginInline:"26px"}}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.forth}
                 inputRef={(ref)=>(inref.current[4]=ref)}
                 onChange={(event)=>{
                  handleChange('forth',5,event)
                 }}
                 />
                <TextField
                color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.third}
                 inputRef={(ref)=>(inref.current[3]=ref)}
                 onChange={(event)=>{
                  handleChange('third',4,event)
                 }}
                 />
                 <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 style={{marginRight:"26px"}}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.second}
                  inputRef={(ref) => (inref.current[2] = ref)} 
                  onChange={(event)=>{
                    handleChange('second',3,event)
                  }}
                 />
                 <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 style={{marginRight:"26px"}}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.first}
                 inputRef={(ref)=>(inref.current[1]=ref)}
                 onChange={(event)=>{
                   handleChange('first',2,event)
                 }}
                 />
               </Box>
               
             </FormGroup>
             <Box>
               <Box className='d-flex justify-content-between' >
                   <Countdown
                    date={Date.now()+countValue.result}
                    renderer={renderer}
                  />
                  <Button size="small" onClick={sendAgain}>
                  ارسال مجدد کد      
                    </Button>
              </Box>
              <Button 
                variant="contained" 
                className='boxShadowUnset' 
                sx={{height:"55px" ,backgroundColor:"#424BFB"}}  
                fullWidth
                 onClick={CheckCode}
              >
                  بررسی 
             </Button>
             </Box>
            </form>
                <DigiAlert open={open} close={handleOpen(false)} message={message}  type="error" />
                <DigiAlert open={opend} close={handleOpend(false)} message={messaged} type="info" />

           </Box>
  )
}
