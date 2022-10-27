import React from 'react'
import { Typography, Box, Button, ListItem, ListItemText } from '@mui/material';
import { Menu, SouthWest, NorthEast } from '@mui/icons-material';
import {ReactComponent as UpGreen} from '../../../img/icons/coin/up - green.svg'
import Svg from '../../utils/Svgs';
export default function DashboardInfo() {
  const btnStyle = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid #cbe4eb",
    borderRadius: "8px",
    height: "43px",
    fontSize:"14px",
    padding:" 0px 16px 0px 20px",
  }
  return (
    <div className='mycontainer row align-items-end  backgroundClr'>
    <div className='col-lg-5 col-12 gx-0'>
     <Box className='d-flex'sx={{textAlign:"left"}}>
       <Box>
         <Typography variant='p' fontSize="14px" component="div">
           موجودی کل حساب شما
         </Typography>
         <br />
         <Typography variant="p" fontSize={20} component="div" sx={{fontWeight:"bold"}}>
           873,083,300 تومان
         </Typography>

       </Box>
       <Box sx={{pt:5,px:3}} className='green-color'>
         <p style={{color:'#1ed184',fontSize:'12px'}}>٪24 <Svg Component={UpGreen}/>
         <br/>نسبت به روز گدشته</p>
        </Box>
      </Box>
      </div>
      <Box className='col-lg-7 col-12 '>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-6 py-2 gx-0'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit" ><NorthEast sx={{ fill: 'rgba(164, 166, 180, 1)' ,mr:"10px"}} />برداشت</Button>
          </div>
          <div className='col-lg-4 col-md-4 col-6 py-2 col-pad'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit" ><SouthWest sx={{ fill: 'rgba(164, 166, 180, 1)' ,mr:"10px"}} />برداشت</Button>
          </div>
          <div className='col-lg-5 col-md-5 col-12 py-2 gx-0'>
            <Button variant="outlined" className='justify-content-evenly' style={btnStyle} fullWidth color="inherit"  ><Menu style={{ fill: 'rgba(164, 166, 180, 1)' }} />تاریخچه‌تراکنش‌ها</Button>
          </div>
        </div>
      </Box>
    </div>
  )
}