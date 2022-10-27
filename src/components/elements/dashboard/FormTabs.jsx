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
  marginBottom:'24px',
}
const minibtnstyle={
  borderRadius:'30px',
  mx:"1.4%",
  minWidth:'35px',
  maxWidth:'35px',
  maxHeight:'20px',
  minHeight:'20px',
  fontSize:'10px',
  marginLeft:'3px',
  paddingTop:"10px",
}

const btnstyle={
  fontSize: "14", height: "56px",borderRadius:"8px",
}


export default function FormTabs({options,tabvalue,handleChange,openprop}) {

  const [sizewidth, setSizewidth] = React.useState('auto');
  const [open,setopen]=React.useState(openprop);


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
    setopen(openprop);
  },[sizewidth,openprop]);

  const [btnshop, setbtnshop] = React.useState({
    btn25:"primary",
    btn50:"digigrey",
    btn75:"digigrey",
    btn100:"digigrey"
  });
  const [btnsale, setbtnsale] = React.useState({
    btn25:"primary",
    btn50:"digigrey",
    btn75:"digigrey",
    btn100:"digigrey"
  })
  const [btnwal, setbtnwal] = React.useState(false)
   
   const handleBtnShop=(props)=>(event)=>{
     if(props==='25'){
      setbtnshop({btn25:"primary",btn50:"digigrey",btn75:"digigrey", btn100:"digigrey"});
     } if(props==='50'){
      setbtnshop({btn25:"digigrey",btn50:"primary",btn75:"digigrey", btn100:"digigrey"});
     } if(props==='75'){
      setbtnshop({btn25:"digigrey",btn50:"digigrey",btn75:"primary", btn100:"digigrey"});
     } if(props==='100'){
      setbtnshop({btn25:"digigrey",btn50:"digigrey",btn75:"digigrey", btn100:"primary"});
     }
   }
   const handleBtnSale=(props)=>(event)=>{
    if(props==='25'){
      setbtnsale({btn25:"primary",btn50:"digigrey",btn75:"digigrey", btn100:"digigrey"});
    } if(props==='50'){
      setbtnsale({btn25:"digigrey",btn50:"primary",btn75:"digigrey", btn100:"digigrey"});
    } if(props==='75'){
      setbtnsale({btn25:"digigrey",btn50:"digigrey",btn75:"primary", btn100:"digigrey"});
    } if(props==='100'){
      setbtnsale({btn25:"digigrey",btn50:"digigrey",btn75:"digigrey", btn100:"primary"});
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
      <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 0, borderColor: 'divider', paddingBlock: .85 }}>
        <Tabs value={tabvalue} onChange={handleChange} fontSize="large" aria-label="basic tabs example"
          TabIndicatorProps={{
            style: tabvalue===0?{ background: "#f2b107", height: 3 }:{ background: "#de07f2", height: 3 }
          }}
        >
          <Tab label={<span className={tabvalue === 0 ? "tab-color" : ""}>خرید‌ از‌ ما </span>} {...a11yProps(0)} />
          <Tab label={<span className={tabvalue === 1 ? "tab-color2" : ""}>فروش به ما </span>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tabvalue} index={0}>
        <form>
          <Box className="pt-3" sx={formbtnstyle}>
              <DigiSelect options={options}/>
          </Box>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">مبلغ خرید(تومان)</FormLabel>
            <TextField color="digi" type="number"
             fullWidth placeholder='0.00'
             InputProps={{
              endAdornment:( 
                  <InputAdornment position="end">تومان</InputAdornment>
              ),
            }}
             />
              <Box className="d-flex justify-content-between align-items-center" sx={{py:"12px"}}>
              <p className='text-muted helper-fontsize m-0'>موجودی کیف 300,000 تومان</p>
                  <Box className="d-flex text-center align-items-center" >
                      <Button variant="outlined" color={btnshop.btn100}  onClick={handleBtnShop('100')} style={minibtnstyle}> %100</Button>
                      <Button variant="outlined"color={btnshop.btn75}  onClick={handleBtnShop('75')} style={minibtnstyle}> %75</Button>
                      <Button  variant="outlined"color={btnshop.btn50}  onClick={handleBtnShop('50')} style={minibtnstyle}> %50</Button>
                      <Button variant="outlined"color={btnshop.btn25}  onClick={handleBtnShop('25')} style={minibtnstyle}> %25</Button>
                    </Box> 
              </Box>
            
           </FormGroup>
          <FormGroup sx={formbtnstyle}>
            <FormLabel className="mb-2">تعداد بایننس کوین</FormLabel>
            <TextField color="digi" 
              fullWidth variant='outlined' type="number"  placeholder='0.00'
              InputProps={{
                endAdornment:( 
                  <InputAdornment position="end">BUSD</InputAdornment>
                ),
              }}
            />
            <Box className="d-flex justify-content-between align-items-center" sx={{py:"12px"}}>
              <p className='text-muted helper-fontsize mt-1 m-0'>موجودی 0 بایننس</p>
               <Button color="digigrey" variant="outlined"  onClick={handleWal} sx={{minHeight:"25px",maxHeight:"25px",borderRadius:"30px",pt:"9px" , fontSize: "10px"}}>
              واریز‌ به‌کیف‌ پول
              </Button>
            </Box>
          </FormGroup>
          <Box className='d-lg-block d-md-block d-sm-none d-none form-button' >
            <Button variant="contained" className='boxShadowUnset' onClick={handleOpen('buy')}  sx={btnstyle}  fullWidth>
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
            <TextField color="digi"
              fullWidth placeholder='0.00'
               InputProps={{
                endAdornment:( 
                    <InputAdornment position="end">تومان</InputAdornment>
                ),
               }}
             
            />
            <Box className="d-flex justify-content-between align-items-center" sx={{py:"12px"}}>
             <p className='text-muted helper-fontsize m-0'>موجودی کیف 300,000 تومان</p>
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
            <TextField color="digi" 
              fullWidth placeholder='0.00'
              InputProps={{
                endAdornment:( 
                  <InputAdornment position="end">BUSD</InputAdornment>
                ),
              }}
            />
            <Box className="d-flex justify-content-between align-items-center" sx={{py:"12px"}}>
            <p className='text-muted helper-fontsize mt-1 m-0'>موجودی 0 بایننس</p>
               <Button color="digigrey" variant="outlined"  onClick={handleWal} sx={{minHeight:"25px",maxHeight:"25px",borderRadius:"30px",pt:"9px" , fontSize: "10px"}}>
              واریز‌ به‌کیف‌ پول
              </Button>
            </Box>
          </FormGroup>
          <Box className='d-lg-block d-md-block d-sm-none d-none form-button p-0'  >
            <Button  variant="contained" className='boxShadowUnset' style={{marginTop:"20px"}} onClick={handleOpen('shop')} sx={btnstyle} fullWidth>
              فروش بایننس کوین
            </Button>
          </Box>

        </form>

      </TabPanel>
      <BuyStepTwo open={open.buy} close={handleClose('buy')} sizewidth={sizewidth} opendialogd={handleOpen('bank')}/>     
      <BankLimit open={open.bank} close={handleClose('bank')}  sizewidth={sizewidth}/>
      <ShopStep open={open.shop} close={handleClose('shop')} sizewidth={sizewidth}/>       
     
       <div className="borderbottom-margin"></div>
    </Box>
   
  )
}