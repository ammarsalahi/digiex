import React from 'react'
import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos, Refresh } from '@mui/icons-material'
export default function SecureCodePage({send}) {
    const [code,setCode]=React.useState({
      first:"",
      second:"",
      third:"",
      forth:"",
      complete:""
    });
    const inref =React.useRef([])
    
      const labelStyle={
        fontSize:"13px",
        mt:"30px",
        mb:'20px'
       }
       
       const textfieldstyle={
        width:"100%",
        minHeight:"48px",
        maxHeight:"48px",
        textAlign:"center",
       }
    // const onCodeChange=(props)=>(idx)=>(event)=>{
    //     if(event.target.value.length <2){
    //       setCode({...code,[props]:event.target.value});
    //     }else{
    //       inref.current[idx].focus();
    //     }
    // }
  return (
        <Box>
              <Box className="d-flex justify-content-between">
                <Typography className='boldfont' variant="h5" component="div" sx={{fontSize:"20px"}}>
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
                  {/* map*/}
                
               <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.first}

                 />
                <TextField
                color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 style={{marginRight:"26px"}}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.second}
                 />
                 <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 style={{marginRight:"26px"}}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.third}
                //  inputRef={(ref) => (inref.current[3] = ref)} 
                 />
                 <TextField
                 color="digi"
                 variant="outlined"
                 type="number"
                 sx={textfieldstyle}
                 style={{marginRight:"26px"}}
                 inputProps={{ style: { textAlign: 'center' ,fontSize:"26px",padding:"8px"}}}
                 value={code.forth}
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
             <Button variant="contained" className='boxShadowUnset' sx={{height:"55px" ,backgroundColor:"#424BFB"}}  fullWidth>
                  بررسی 
             </Button>
             </Box>
            </form>
                
           </Box>
  )
}
