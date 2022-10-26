import { Add, SouthWest, NorthEast, Menu } from '@mui/icons-material'
import { Box, Card, CardContent, IconButton, List, ListItem, ListItemIcon, Typography, ListItemText, ButtonGroup } from '@mui/material'
import React from 'react'
import Svg from '../../utils/Svgs';
import svgBg from '../../../img/icons/cart-bg.svg'
import {ReactComponent as Trade} from '../../../img/icons/coin/trade.svg';
import {ReactComponent as DownIcon} from '../../../img/icons/coin/down arrow.svg';
import {ReactComponent as UpIcon} from '../../../img/icons/coin/up arrow.svg';
import {ReactComponent as DownRed} from '../../../img/icons/coin/down arrow - red.svg';
import {ReactComponent as UpGreen} from '../../../img/icons/coin/up arrow - green.svg';
import {ReactComponent as LogoEN} from '../../../img/icons/logo-en-white.svg';
import WalletCharge from '../dialogs/WalletCharge';
import WalletWithdraw from '../dialogs/WalletWithdraw';
import WalletDesposit from '../dialogs/WalletDesposit';
import AccountDesposit from '../dialogs/AccountDesposit'
export default function WalletInfo({ infos,options }) {
  const [open,setOpen]=React.useState({
    charge:false,
    deposit:false,
    withdraw:false,
  });
  const [sizewidth, setSizewidth] = React.useState('auto');

  const handleOpen=(props)=>(event)=>{
    setOpen({...open,[props]:true});
  }

  const handleClose=(props)=>(event)=>{
    setOpen({...open,[props]:false});
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

  const cardstyle = {
    borderRadius: '8px',
    height: "230px",
    width:"100%"
  }
  const listbtnstyle = {
    border: "1px solid #CBE4EB",
    borderRadius: '8px',
    color: "rgba(164, 166, 180, 1)",
    width: "37px",
    height: "37px",
    mr: "2.5%",
    my: "10px",
    fontSize: "11px",
  }
  const listbtntextstyle = {
    pt:"5px",
    '& .MuiListItemText-secondary': {
      color: "#1ed184"
    }
  }
  const tetstyle={
    pt:"5px",height: "45px", width: "45px",
    borderRadius:"8px",
    backgroundColor:"rgba(217, 243, 232, 1)"
  }
  const daistyle={
    pt:"5px",height: "45px", width: "45px",
    borderRadius:"8px",
    backgroundColor:"#fbf4c6"
  }
  return (
    <Box className="row" sx={{ px: "32px" }}>
     <Box className="col-lg-6 col-md-12 col-12" >
        
       <Box className="d-flex justify-content-center" sx={{pt:"42px"}}>
         <Card sx={cardstyle} className="bg-card-img">
          <CardContent>
            <Box sx={{pb: "50px",px: "3%"}} className="d-flex justify-content-between">
                <Box sx={{ color: "#fff" }}>
                  <Typography variant='p' sx={{ py: 2 }} fontSize={14} component="div">
                    موجودی کل حساب شما
                  </Typography>
                  <Typography variant="p" fontSize={18} component="div">
                    873,083,300 تومان
                  </Typography>
                </Box>
                <Box sx={{pt:"5%"}} style={{left:0}}>
                    <Svg Component={LogoEN} />
                </Box>
                
            </Box>
          
            <Box className="d-flex align-items-end" dir="ltr">
              <IconButton 
                sx={{ border: "1px solid #fff", borderRadius: '8px', mx: 1, color: "#fff" }} 
                fontSize="large"
                onClick={handleOpen('withdraw')}
              >
                <NorthEast />
              </IconButton>
              <IconButton 
                sx={{ border: "1px solid #fff", borderRadius: '8px', color: "#fff" }} 
                fontSize="large"
                onClick={handleOpen('deposit')}
              >
                <SouthWest />
              </IconButton>
              <IconButton 
                sx={{ border: "1px dashed #fff", borderRadius: '8px', mx: 1, color: "#fff" }} 
                fontSize="large"
                onClick={handleOpen('charge')}
              >
                <Add />
              </IconButton>
            </Box>
          </CardContent>
        </Card>

        </Box>
               <Box className="d-flex justify-content-start" >
                 <Box sx={{pb: "50px" }} >
                   <Typography variant='p' sx={{ py: 2,color:"#a4a6b4"}} fontSize={14} component="div">
                      مجموع واریز
                  </Typography>
                      
                    <Box className="d-flex">
                      <Box className="text-center"sx={{backgroundColor:"rgba(217, 243, 232, 1)",width:"24px",height:"24px",borderRadius:"8px"}}>
                      <Svg Component={UpGreen} /> 
                      </Box>
                    <Typography className="pt-1" variant="p" fontSize={12} component="div">
                        363,873,300 تومان
                    </Typography>
                    </Box>
                  </Box>
                  <Box sx={{pb: "50px",mx:"2%" }} >
                    <Typography variant='p' sx={{ py: 2 ,px:1,color:"#a4a6b4"}} fontSize={14} component="div">
                        مجموع برداشت
                    </Typography>
                    <Box className="d-flex">
                      <Box className="mx-1 text-center"sx={{backgroundColor:"rgba(247, 220, 220, 1)",width:"24px",height:"24px",borderRadius:"8px"}}>
                      <Svg Component={DownRed} /> 
                      </Box>
                    <Typography className="pt-1" variant="p" fontSize={12} component="div">
                        272,456,099 تومان
                    </Typography>
                    </Box>
                  </Box>
            </Box> 
       </Box>
       
      <Box className="col-lg-6 col-md-12 col-12 d-flex justify-content-start" sx={{pt:"20px"}}>
        <List sx={{minWidth:"392px",maxWidth:"420px"}}>
          {infos.map((item, idx) => (
            <ListItem key={idx}>
              <ListItemIcon>
                <Box className="text-center" 
                  sx={ item.name==='تتر' || item.name==="یو اس دی کوین" ? tetstyle : daistyle }
                >
                <Svg Component={item.icon} style={{ height: "35px", width: "35px" }} />
                </Box>
              </ListItemIcon>
              <ListItemText id={idx} primary={item.name}  primaryTypographyProps={{fontSize:"14px"}} />
              <ButtonGroup 
                disableElevation
                size="small"
                variant="contained"
                aria-label="Disabled elevation buttons"
                sx={{marginLeft: "70px"}}
              >
                <Box sx={{pr:"5%"}}>
                  <ListItemText id={idx} sx={listbtntextstyle} 
                    primary={item.number} secondary={item.percend} 
                    secondaryTypographyProps={{pt:"3px",fontSize:"12px"}} primaryTypographyProps={{fontSize:"14px"}}
                  />
                </Box>
                <IconButton sx={listbtnstyle}>
                  <Svg Component={UpIcon} />
                </IconButton>
                <IconButton sx={listbtnstyle}>
                <Svg Component={DownIcon} />
                </IconButton>
                <IconButton sx={listbtnstyle}>
                <Svg Component={Trade} />
                </IconButton>
                <IconButton sx={listbtnstyle}>
                  <Menu />
                </IconButton>
              </ButtonGroup>


            </ListItem>

          ))}

        </List>
      </Box>
      <WalletCharge open={open.charge} close={handleClose('charge')} sizewidth={sizewidth}/>
      <WalletDesposit open={open.deposit} close={handleClose('deposit')} options={options} sizewidth={sizewidth} />
      {/* <WalletWithdraw open={open.withdraw} close={handleClose('withdraw')} options={options} sizewidth={sizewidth}/> */}
      <AccountDesposit  open={open.withdraw} close={handleClose('withdraw')} sizewidth={sizewidth}/>
      </Box>
  )
}
