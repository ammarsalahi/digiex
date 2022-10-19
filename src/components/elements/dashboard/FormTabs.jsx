import React from 'react'
import { TextField, Button, Box, FormGroup, InputAdornment, FormLabel, Typography, ThemeProvider } from '@mui/material'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import BankLimit from '../dialogs/BankLimit';
import DigiSelect from '../global/DigiSelect';
import BuyStepTwo from '../dialogs/BuyStepTwo';
import ShopStep from '../dialogs/ShopStep';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box sx={{ p: 7 }}>
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 
const formbtnstyle={
  textAlign:'left',
  marginBottom:'40px',
}
const minibtnstyle={
  borderRadius:'30px',
  mx:"1.4%",
  minWidth:'38px',
  maxWidth:'38px',
  maxHeight:'25px',
  minHeight:'25px',
  fontSize:'10px',
  marginLeft:'3px',
}

const btnstyle={
  fontSize: 21, height: "55px",borderRadius:"8px",boxShadow:"none"
}
export default function FormTabs({options,tabvalue,handleChange}) {


  const [open,setopen]=React.useState({
    buy:false,
    shop:false,
    bank:false
  });
  const [btnshop, setbtnshop] = React.useState({
    btn25:"primary",
    btn50:"digi",
    btn75:"digi",
    btn100:"digi"
  });
  const [btnsale, setbtnsale] = React.useState({
    btn25:"primary",
    btn50:"digi",
    btn75:"digi",
    btn100:"digi"
  })
  const [btnwal, setbtnwal] = React.useState(false)
   
   const handleBtnShop=(props)=>(event)=>{
     if(props==='25'){
      setbtnshop({btn25:"primary",btn50:"digi",btn75:"digi", btn100:"digi"});
     } if(props==='50'){
      setbtnshop({btn25:"digi",btn50:"primary",btn75:"digi", btn100:"digi"});
     } if(props==='75'){
      setbtnshop({btn25:"digi",btn50:"digi",btn75:"primary", btn100:"digi"});
     } if(props==='100'){
      setbtnshop({btn25:"digi",btn50:"digi",btn75:"digi", btn100:"primary"});
     }
   }
   const handleBtnSale=(props)=>(event)=>{
    if(props==='25'){
      setbtnsale({btn25:"primary",btn50:"digi",btn75:"digi", btn100:"digi"});
    } if(props==='50'){
      setbtnsale({btn25:"digi",btn50:"primary",btn75:"digi", btn100:"digi"});
    } if(props==='75'){
      setbtnsale({btn25:"digi",btn50:"digi",btn75:"primary", btn100:"digi"});
    } if(props==='100'){
      setbtnsale({btn25:"digi",btn50:"digi",btn75:"digi", btn100:"primary"});
    }
  }
   const handleWal=(event)=>{
      if(btnwal){
        setbtnwal(false);
      }
      else{
        setbtnwal(true);
      }
   }

   const handleOpen=(props)=>(event)=>{
     setopen({...open,[props]:true});
   }
   const handleClose=(props)=>(event)=>{
    setopen({...open,[props]:false});
  }
 
 
 
  return (
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 0, borderColor: 'divider', paddingBlock: .85 }}>
        <Tabs value={tabvalue} onChange={handleChange} fontSize="large" aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { background: "rgba(255, 196, 0, 0.952)", height: 3 }
          }}
        >
          <Tab label={<span className={tabvalue === 0 ? "tab-color" : ""}>خرید‌ از‌ ما </span>} {...a11yProps(0)} />
          <Tab label={<span className={tabvalue === 1 ? "tab-color" : ""}>فروش به ما </span>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabvalue} index={0}>
        <form>
          <Box className="pt-3" sx={formbtnstyle}>
              <DigiSelect options={options}/>
          </Box>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">مبلغ خرید(تومان)</FormLabel>
            <TextField color="digi" variant="outlined" fullWidth placeholder='۰.۰۰'
             InputProps={{
              endAdornment: <InputAdornment position="end">تومان</InputAdornment>,
            }}
             />
              <Box className="d-flex justify-content-between" sx={{p:"1%"}}>
              <p className='text-muted helper-fontsize'>موجودی کیف ۳۰۰,۰۰۰ تومان</p>
                  <Box className="d-flex" >
                      <Button variant="outlined" color={btnshop.btn100}  onClick={handleBtnShop('100')} style={minibtnstyle}> %100</Button>
                      <Button variant="outlined"color={btnshop.btn75}  onClick={handleBtnShop('75')} style={minibtnstyle}> %75</Button>
                      <Button  variant="outlined"color={btnshop.btn50}  onClick={handleBtnShop('50')} style={minibtnstyle}> %50</Button>
                      <Button variant="outlined"color={btnshop.btn25}  onClick={handleBtnShop('25')} style={minibtnstyle}> %25</Button>
                    </Box> 
              </Box>
            
           </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">تعداد بایننس کوین</FormLabel>
            <TextField color="digi" fullWidth variant='outlined'  placeholder='۰.۰۰'
              InputProps={{
                endAdornment: <InputAdornment position="end">BUSD</InputAdornment>,
              }}
            />
            <div className="d-flex justify-content-between pt-1">
              <p className='text-muted helper-fontsize'>موجودی ۰ بایننس</p>
               <Button variant="outlined"  onClick={handleWal} sx={{minHeight:"31px",maxHeight:"31px",borderRadius:"30px"}}>
              واریز‌ به‌کیف‌ پول
              </Button>
            </div>
          </FormGroup>
          <Box className='d-lg-block d-md-block d-sm-none d-none form-button' >
            <Button variant="contained" onClick={handleOpen('buy')}  sx={btnstyle} fullWidth>
              خرید بایننس کوین
            </Button>
          </Box>

        </form>

      </TabPanel>
      <TabPanel value={tabvalue} index={1}>
      <form>
          <FormGroup className="pt-3" sx={formbtnstyle}>
            <DigiSelect options={options}/>
          </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">مبلغ فروش(تومان)</FormLabel>
            <TextField color="digi" fullWidth variant='outlined' placeholder='۰.۰۰'
               InputProps={{
                 endAdornment: <InputAdornment position="end">تومان</InputAdornment>,
               }}
             
            />
            <Box className="d-flex justify-content-between" sx={{p:"1%"}}>
              <p className='text-muted helper-fontsize'>موجودی کیف ۳۰۰,۰۰۰ تومان</p>
                    <Box className="d-flex" >
                      <Button variant="outlined" color={btnsale.btn100}  onClick={handleBtnSale('100')} style={minibtnstyle}> %100</Button>
                      <Button variant="outlined"color={btnsale.btn75}  onClick={handleBtnSale('75')} style={minibtnstyle}> %75</Button>
                      <Button  variant="outlined"color={btnsale.btn50}  onClick={handleBtnSale('50')} style={minibtnstyle}> %50</Button>
                      <Button variant="outlined"color={btnsale.btn25}  onClick={handleBtnSale('25')} style={minibtnstyle}> %25</Button>
                    </Box> 
              </Box>
          </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">تعداد بایننس کوین</FormLabel>
            <TextField color="digi" fullWidth variant='outlined' placeholder='۰.۰۰'
              InputProps={{
                endAdornment: <InputAdornment position="end">BUSD</InputAdornment>,
              }}
            />
            <div className="d-flex justify-content-between pt-1 px-2">
              <p className='text-muted helper-fontsize'>موجودی ۰ بایننس</p>
              <Button variant="outlined"  sx={{minHeight:"31px",maxHeight:"31px",borderRadius:"30px"}}>
              واریز‌ به‌کیف‌پول
              </Button>
            </div>
          </FormGroup>
          <Box className='d-lg-block d-md-block d-sm-none d-none form-button'>
            <Button  variant="contained" onClick={handleOpen('shop')} sx={btnstyle} fullWidth>
              فروش بایننس کوین
            </Button>
          </Box>

        </form>

      </TabPanel>
      <BuyStepTwo open={open.buy} close={handleClose('buy')} opendialogd={handleOpen('bank')}/>     
      <BankLimit open={open.bank} close={handleClose('bank')}/>
      <ShopStep open={open.shop} close={handleClose('shop')}/>       
     
       
    </Box>
   
  )
}