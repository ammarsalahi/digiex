import React from 'react'
import { Button, Box, Typography, ListItem,ListItemText,ListItemIcon } from '@mui/material'
import {  InfoOutlined } from '@mui/icons-material';
import BuyFee from '../dialogs/BuyFee';
import { useSelector } from 'react-redux';

export default function FormInfo({ title,description,sizeval}) {
  const [open, setopen] = React.useState(false);
  const [sizewidth, setSizewidth] = React.useState('auto');
  const data=useSelector(state=>state.crypto)

  const handleOpenDialog=(event)=>{
   setopen(true);
  }
  const handleClose=(event)=>{
    setopen(false);
  }

  const sizeDialog =()=>{
    if (window.innerWidth < 700) {
      setSizewidth('auto')
    }
    else if(window.innerWidth >= 1281) {
      setSizewidth('650px')
    }
    else{
      setSizewidth('500px')
      
    }
  }
  const getLocalNumber=(num)=>{
      return num.toLocaleString()
  }

  React.useEffect(() => {
    sizeDialog();
    window.addEventListener('resize',sizeDialog,false);
  },[sizewidth]);


  const liststyle={
    height: '72px' ,fontSize: "14px" ,px:"24px", backgroundColor: "#EAEEFF" , border: "1px solid #424BFB" , 
    borderRadius : "8px",color:"#000", cursor: "pointer"
  }
  return (
    <Box component="div" sx={{ textAlign: 'left', }}>
     {title? <Typography variant="h5" component="div" className='boldfont title-info'>
        جزئیات سفارش   
      </Typography>:<div></div>}
     <div>
          <div className='d-flex justify-content-between info-list'>
            <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
            تعداد بایننس کوین
            </Typography>
            <hr />
            <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
               {getLocalNumber(data.amount)} BUSD
            </Typography>
          </div>
          <div className='d-flex justify-content-between info-list'>
            <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
              قیمت هر واحد
            </Typography>
            <hr />
            <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
              {data.section===1?getLocalNumber(data.buyprice):getLocalNumber(data.sellprice)} تومان
            </Typography>
          </div>
          <div className='d-flex justify-content-between info-list'>
            <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
              مبلغ   
            </Typography>
            <hr />
            <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
              {getLocalNumber(data.totalPrice)} تومان
            </Typography>
          </div>
          <div className='d-flex justify-content-between info-list'>
            <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
              تخفیف   
            </Typography>
            <hr />
            <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
              0
            </Typography>
          </div>
          <div className='d-flex justify-content-between info-list'>
            <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
              کارمزد‌شبکه‌ارسال 
            </Typography>
            <hr />
            <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
              درحال محاسبه
            </Typography>
          </div>
     </div>
      
      {description?<div>
        <div style={{paddingTop:'32px'}} className="d-flex jsutify-content-start">
          <ListItem sx={liststyle} onClick={handleOpenDialog}>
            <InfoOutlined sx={{height:"30px",width:"30px",mr:"16px"}} color="primary"/>
            <ListItemText primary="توضیح کامل در خصوص کارمزد"
             primaryTypographyProps={{textAlign:"left",fontSize:"14px"}}
            />
          </ListItem>
      </div>
       <div>
        <div className="d-lg-block d-md-block d-sm-none d-none info-card">
          <Box sx={sizeval===0?{backgroundColor: 'rgba(243, 244, 249, 1)', borderRadius: "8px" ,height:"55px",mt:9.5}:{ backgroundColor: 'rgba(243, 244, 249, 1)', borderRadius: "8px" ,height:"55px"}}>
          <div className='d-flex justify-content-between py-3 px-3'>
            <Typography variant="p" component="div">
              مبلغ پرداخت نهایی
            </Typography>
            <Typography variant="p" component="div">
             {data.totalPrice}
            </Typography>
          </div>
        </Box>
      </div>
          <div className="d-lg-none d-md-none d-sm-block d-block" style={{paddingTop:'89px',paddingBottom:"22%"}}>
          <Box sx={{ backgroundColor: 'rgba(243, 244, 249, 1)', borderRadius: "8px" ,height:"55px"}}>
          <div className='d-flex justify-content-between py-3 px-3'>
            <Typography variant="p" component="div">
              مبلغ پرداخت نهایی
            </Typography>
            <Typography variant="p" component="div">
              {data.totalPrice} 
            </Typography>
          </div>
        </Box>
      </div>
      </div>
      </div>:null}
        {/* <BuyFee open={open} close={handleClose} listdata={listdata} sizewidth={sizewidth}/>  */}
    </Box >
  )
}
