import React, { useEffect,useState,useRef } from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos, Refresh } from '@mui/icons-material';
import Api from '../ApiConfig/Api';
import { useDispatch ,useSelector} from 'react-redux';
import DigiAlert from '../global/DigiAlert';
import { authAction } from '../redux/actions';
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

export default function SecureCodePage({codeurl,number,token}) {
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
    const dispatch=useDispatch();
    
    let naviagte=useNavigate();
    useEffect(()=>{
      if(checked){
        inref.current[1].focus();
      }
   })

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
    const CheckCode =()=>{
      const codes =`${code.first}${code.second}${code.third}${code.forth}${code.fivth}`;
      console.log(codes)
      console.log(token)
      Api.post(codeurl,
        {
          "confirmationCode": codes,
          "tempToken": token,
        }).then(res=>{
        if(res.data.statusCode===200){
            console.log(res.data)
            dispatch(authAction(res.data.token));
            naviagte('/dashboard');
        }
      }).catch(err=>{
          console.log(err);
          setmessage("کد وارد شده اشتباه است");
          setopen(true);
      })
    }
  return (
        <Box>
              <Box className="d-flex justify-content-between">
                <Typography className='boldfont' variant="h5" component="div" sx={{fontSize:"20px"}}>
                کد تایید شماره موبایل
                </Typography>
                <Button size="small" endIcon={<ArrowBackIos/>}>
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
                  <FormLabel sx={labelStyle}>
                    مهلت استفاده کد: ۰۰:۴۸
                    </FormLabel>
                  <Button size="small">
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
                <DigiAlert open={open} close={handleOpen(false)} message={message} />
           </Box>
  )
}
