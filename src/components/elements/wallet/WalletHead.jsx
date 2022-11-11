import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import { Menu, SouthWest, ArrowUpwardOutlined } from '@mui/icons-material';
import { ReactComponent as UpGreen } from '../../../img/icons/coin/up - green.svg'
import Svg from '../../utils/Svgs';
import {useSelector} from 'react-redux';

export default function WalletHead() {
  
  

  return (
    <div className='row  mycontainer backgroundClr'>
      <div className='col-lg-6 col-md-6 col-12 g-0'>
        <Box className='d-flex'>
          <Box>
            <Typography variant='p' fontSize="14px" component="div">
              موجودی کل حساب شما
            </Typography>
            <br />
            <Typography variant="p" fontSize="20px" component="div" sx={{fontWeight:"bold"}}>
              873,083,300 تومان
            </Typography>

          </Box>
          <Box sx={{pt:5.2,px:3}} className='green-color'>
            <p style={{ color: '#1ed184', fontSize: '12px' }}>٪۲۴ <Svg Component={UpGreen} />
              <br />نسبت به روز گدشته</p>
          </Box>
        </Box>
      </div>
      <div className='col-lg-6 col-md-6 col-12 g-0 border-right-desk'>
        <Box>
          <Typography variant='p' fontSize="14px"  component="div">
            ارزش دارایی های ارزی
          </Typography>
          <div className='d-flex'>
            <Box sx={{ pt: '24px' }}>
              <Typography variant="p" fontSize="20px" component="div" sx={{fontWeight:"bold"}}>
                $6,738
              </Typography>
            </Box>
            <Box sx={{pt:"20px",px:3}} className='px-4 green-color'>
              <p style={{ color: '#1ed184', fontSize: '12px' }}>٪۲۴ <Svg Component={UpGreen} />
                <br />نسبت به روز گدشته</p>
            </Box>
          </div>


        </Box>
      </div>
    </div>
  )
}
