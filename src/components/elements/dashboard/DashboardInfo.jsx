import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import { Menu, SouthWest, ArrowUpwardOutlined } from '@mui/icons-material';
import {ReactComponent as UpGreen} from '../../../img/icons/coin/up - green.svg'
import Svg from '../../utils/Svgs';
export default function DashboardInfo() {
  const btnStyle = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid #a4a6b4",
    borderRadius: "8px",
    height: "43px",
    fontSize:"12px",
  }
  return (
    <div className='row bg-light align-items-end info-content'>
      <div className='col-lg-6  col-12'>
     <Box className='d-flex'sx={{pl:"6%",textAlign:"left"}}>
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
      <Box className='col-lg-6 col-12 p-info'>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-6 py-2'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit" ><SouthWest style={{ fill: 'rgba(164, 166, 180, 1)' }} />واریزپول</Button>
          </div>
          <div className='col-lg-4 col-md-4 col-6 py-2'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit" ><SouthWest style={{ fill: 'rgba(164, 166, 180, 1)' }} />برداشت‌تومان</Button>
          </div>
          <div className='col-lg-5 col-md-5 col-12 py-2'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit"  ><Menu style={{ fill: 'rgba(164, 166, 180, 1)' }} />تاریخچه‌تراکنش‌ها</Button>
          </div>
        </div>
      </Box>
    </div>
  )
}