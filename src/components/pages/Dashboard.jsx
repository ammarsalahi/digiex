import React from 'react'
import { Box ,Button} from '@mui/material'
import DashboardInfo from '../elements/dashboard/DashboardInfo';
import FormTabs from '../elements/dashboard/FormTabs';
import FormInfo from '../elements/dashboard/FormInfo';
import { ReactComponent as DAI } from '../../img/icons/coin/dai.svg';
import { ReactComponent as BC } from '../../img/icons/coin/Group 2.svg';
import { ReactComponent as USD } from '../../img/icons/coin/Group 3.svg';
import { ReactComponent as TET } from '../../img/icons/coin/Shape.svg';



export default function Dashboard() {
   const [tabvalue,setTabvalue]=React.useState(0);
   const [open,setOpen]=React.useState({
    buy:false,
    shop:false,
    bank:false,
   });

   const handleOpen=(props)=>(event)=>{
    setOpen({...open,[props]:true});
  }
  const handleClose=(props)=>(event)=>{
   setOpen({...open,[props]:false});
 }

  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };
   const data=[
    {"name":"تعداد بایننس کوین","price":"2150BUSD"},
    {"name":"قیمت هر واحد","price":"30,250تومان"},
    {"name":"مبلغ","price":"63,570,500تومان"},
    {"name":"تخفیف","price":"0 تومان"},
    {"name":"کارمزد‌شبکه‌ارسال","price":"در‌انتظار‌محاسبه"},
   ]

   const options = [
    { "label": 'بایننس کوین', "icon": BC },
    { "label": 'تتر', "icon": TET },
    { "label": 'دای', "icon": DAI },
    { "label": 'یو اس دی کوین', "icon": USD },
  ]
   const value=" 67,973,000 تومان"
  return (
    <div> 
      <Box sx={{ textAlign: 'right' }}>
        <DashboardInfo />
      </Box>
      <div className='row' style={{height:"100vh"}}>
        <div className='col-lg-6 col-12 mycontainer'>
          <FormTabs 
            options={options} 
            tabvalue={tabvalue} 
            handleChange={handleChange}  
            openprop={open}
          />
        </div>
        <div className='col-lg-6 col-12 mycontainer'>
          <FormInfo listdata={data} description={true} finalvalue={value}  title="جزئیات سفارش" options={options}/>
        </div>
      </div>
          <div className='d-lg-none d-md-none d-sm-block d-block'>
            <Box className='fixed-bottom' sx={{pb:"16px",px:"16px"}}>
           {tabvalue===1 && (  
              <Button  
                variant="contained" 
                sx={{ fontSize: "14px", height: "55px" ,borderRadius:"8px",BoxShadow:"unset",}}
                fullWidth
                onClick={handleOpen('shop')}
               >
                فروش بایننس کوین
              </Button>
            )}
            {tabvalue===0 && (  
              <Button 
                variant="contained"  
                sx={{ fontSize: "14px", height: "55px",borderRadius:"8px" ,BoxShadow:"unset",}} 
                fullWidth
                onClick={handleOpen('buy')}
              >
                خرید بایننس کوین
              </Button>
            )}
            </Box>           
          </div>
    </div>
  )
}
