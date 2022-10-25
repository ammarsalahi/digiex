import { Typography,Box, FormGroup, FormControlLabel,Button,Checkbox  } from '@mui/material'
import React from 'react'

export default function StepTwo({onNext}) {
    const [checked, setChecked] = React.useState(false);
    const handleCheckBox=(event)=>{
        setChecked(event.target.checked);
    }
  return (
    <div className='maincontent'>
        <form>
        <Box className="d-flex justify-content-start" >
        <Typography variant="h6" component="div" className="boldfont">
            قبول قوانین
        </Typography>
       </Box>
       <Box sx={{py:"32px",fontSize:"14px"}}>
        <Typography variant="p" component="div" sx={{lineHeight:"28px"}}>
        صرافی آنلاین دیجیکس ۲۴، مرجعی برای خرید تتر و فروش تتر ، خرید بیت کوین و فروش بیت کوین و خرید ارز دیجیتال با دلار میباشد و بستری امن را برای شما ایجاد نموده تا در سریع ترین زمان و بهترین قیمت، اقدام به خرید و فروش ارز دیجیتال نمایید. صرافی آنلاین دیجیکس ۲۴، مرجعی برای خرید تتر و فروش تتر ، خرید بیت کوین و فروش بیت کوین و خرید ارز دیجیتال با دلار میباشد و بستری امن را برای شما ایجاد نموده تا در سریع ترین زمان و بهترین قیمت، اقدام به خرید و فروش ارز دیجیتال نمایید.
        </Typography>
        <FormGroup sx={{py:"32px",px:"4px"}}>
            <FormControlLabel control={<Checkbox  checked={checked} onChange={handleCheckBox} color="primary"/>} label="متن فوق را بطور کامل خوانده ام و قبول دارم"/>
        </FormGroup>
       </Box>

       <div className='d-lg-block d-md-none d-sm-none d-none'>
            <Box className="d-flex justify-content-end">
             <Button 
                variant="contained" 
                sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"205px",mt:"85px",borderRadius:'8px'}}
                onClick={onNext}  

              >
            قبول قوانین و مرحله بعد            
            </Button>
        </Box>
        </div>
        <div className='d-lg-none d-md-block d-sm-block d-block'>
           <Box className="d-flex justify-content-end">
            <Button 
                variant="contained" 
                sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"100%",mt:"10%",mx:"3%",borderRadius:'8px'}}
                onClick={onNext}  
            >
            قبول قوانین و مرحله بعد            
            </Button>
          </Box>
        </div>
        
        </form>
    </div>
  )
}
