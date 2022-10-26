import React from 'react'
import { Button, Box, Typography, ListItem,ListItemText,ListItemIcon } from '@mui/material'
import {  InfoOutlined } from '@mui/icons-material';
import BuyFee from '../dialogs/BuyFee';

export default function FormInfo({ listdata, title,description,finalvalue,options}) {
  const [open, setopen] = React.useState(false);
  const [sizewidth, setSizewidth] = React.useState('auto');


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

  React.useEffect(() => {
    sizeDialog();
    window.addEventListener('resize',sizeDialog,false);
  },[sizewidth]);


  const liststyle={
    height: '72px' ,fontSize: "14px" ,px:"24px", backgroundColor: "#EAEEFF" , border: "1px solid #424BFB" , borderRadius : "8px",color:"#000"
  }
  return (
    <Box component="div" sx={{ textAlign: 'left', }}>
     {title? <Typography variant="h5" component="div" className='boldfont' sx={{mb:"32px",mt:'24px'}}>
      {title}
      </Typography>:<div></div>}
     <div>
      {listdata.map((item, idx) => (
          <div className='d-flex justify-content-between info-list' key={idx}>
            <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
              {item.name}
            </Typography>
            <hr />
            <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
              {item.price}
            </Typography>
          </div>
        ))}
     </div>
      
      {description?<div>
        <div style={{paddingTop:'32px'}} className="d-flex jsutify-content-start">
          <ListItem button sx={liststyle} onClick={handleOpenDialog}>
            <InfoOutlined sx={{height:"30px",width:"30px",mr:"16px"}} color="primary"/>
            <ListItemText primary="توضیح کامل در خصوص کارمزد"
             primaryTypographyProps={{textAlign:"left"}}
            />
          </ListItem>
        {/* <Button   onClick={handleOpenDialog} sx={btnstyle} variant="outlined" fullWidth size="large" >
          توضیح کامل در خصوص کارمزد
        </Button> */}
      </div>
       {finalvalue?<div>
        <div className="d-lg-block d-md-block d-sm-none d-none info-card">
          <Box sx={{ backgroundColor: 'rgba(243, 244, 249, 1)', borderRadius: "8px" ,height:"55px"}}>
          <div className='d-flex justify-content-between py-3 px-3'>
            <Typography variant="p" component="div">
              مبلغ پرداخت نهایی
            </Typography>
            <Typography variant="p" component="div">
              {finalvalue}
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
              {finalvalue}
            </Typography>
          </div>
        </Box>
      </div>
      </div>
      :null}

      </div>:null}
        <BuyFee open={open} close={handleClose} listdata={listdata} optionsdata={options} sizewidth={sizewidth}/> 
    </Box >
  )
}
