import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import { Menu, SouthWest, ArrowUpwardOutlined } from '@mui/icons-material';
import {ReactComponent as UpGreen} from '../../../img/icons/coin/up - green.svg'
import Svg from '../../utils/Svgs';
export default function WalletHead() {
  return (
    <div className='row align-items-end info-content' style={{backgroundColor:"#fafbff"}}>
    <div className='col-lg-6 col-md-6 col-12'>
     <Box className='d-flex'sx={{pl:"6%"}}>
       <Box>
         <Typography variant='p' fontSize={14} component="div">
           موجودی کل حساب شما
         </Typography>
         <br />
         <Typography variant="p" fontSize={20} component="div">
           ۸۷۳,۰۸۳,۳۰۰ تومان
         </Typography>

       </Box>
       <Box sx={{pt:4,px:4}} className='green-color'>
         <p style={{color:'#1ed184',fontSize:'12px'}}>٪۲۴ <Svg Component={UpGreen}/>
         <br/>نسبت به روز گدشته</p>
       </Box>
     </Box>
   </div>
   <div className='col-lg-6 col-md-6 col-12 border-right infomargin'>
       <Box sx={{px:"6%"}}>
         <Typography variant='p' fontSize={14} sx={{py:2}} component="div">
            ارزش دارایی های ارزی
         </Typography>
         <div className='d-flex'>
         <Box sx={{pt:'14px'}}>
         <Typography variant="p" fontSize={20} component="div">
             $6,738
         </Typography>
         </Box>  
         <Box className='px-4 green-color'>
             <p style={{color:'#1ed184',fontSize:'12px'}}>٪۲۴ <Svg Component={UpGreen}/>
             <br/>نسبت به روز گدشته</p>
         </Box>
         </div>
        
       
     </Box>
   </div>
 </div>
   )
}
