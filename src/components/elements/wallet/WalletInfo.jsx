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
import logoEng2 from '../../../img/logos/logoEng-2x.png';
import WalletCharge from '../dialogs/WalletCharge';
import WalletWithdraw from '../dialogs/WalletWithdraw';
import WalletDesposit from '../dialogs/WalletDesposit';
import AccountDesposit from '../dialogs/AccountDesposit'
import AddCardBank from '../dialogs/AddCardBank';
import { ReactComponent as Dai } from '../../../img/icons/coin/dai.svg';
import { ReactComponent as BC } from '../../../img/icons/coin/Group 2.svg';
import { ReactComponent as USD } from '../../../img/icons/coin/Group 3.svg';
import { ReactComponent as Tether } from '../../../img/icons/coin/Shape.svg';

import Api from '../ApiConfig/Api';
import {GET_CRYPTO,WALLET_FIAT} from '../ApiConfig/Endpoints'
import {authpost} from '../ApiConfig/ApiHeaders';
import { useSelector,useDispatch } from 'react-redux';

const cardstyle = {
  borderRadius: '12px',
  height: "230px",
  width:"100%",
  boxShadow:"unset",
  padding:"8px 8px 0px 8px",
  position:"relative"
}
const listbtnstyle = {
  border: "1px solid #CBE4EB",
  borderRadius: '8px',
  color: "rgba(164, 166, 180, 1)",
  width: "42px",
  height: "42px",
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
  p:"10px",height: "42px", width: "42px",
  borderRadius:"8px",
  backgroundColor:"rgba(217, 243, 232, 1)"
}
const daistyle={
  p:"10px",height: "42px", width: "42px",
  borderRadius:"8px",
  backgroundColor:"#fbf4c6"
}

export default function WalletInfo({ infos,options }) {
  const [crypto,setCrypto]=React.useState([]);

  const {auth} =useSelector(state=>state.authtoken);

  const [open,setOpen]=React.useState({
    charge:false,
    deposit:false,
    withdraw:false,
    add:false
  });
  const [sizewidth, setSizewidth] = React.useState('auto');
  const [walletvalue,setWalletvalue]=React.useState("");
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
  const getCryptos=async()=>{
    await Api.get(GET_CRYPTO,{
      headers: authpost(auth)
    }).then(res=>{
      setCrypto(res.data.data.result);
    })
  }

  const getCurrency=()=>{
   Api.get(WALLET_FIAT,{
      headers:authpost(auth),
    }).then(res=>{
      if(res.data.statusCode===200){
        setWalletvalue(res.data.data.result.wallet);
      }
    });
  }
  React.useEffect(() => {
    sizeDialog();
    window.addEventListener('resize',sizeDialog,false);
    getCryptos();
    getCurrency();
  },[sizewidth]);

  
  const getLogo=(name)=>{
    switch(name){
       case "Dai":
         return Dai
       case "Tether":
         return Tether
       case "Binance usd":
         return USD
       case "Binance":
         return BC
       default:
         return BC       
    }
 }

  return (
    <Box className="row mycontainer">
     <Box className="col-lg-6 col-md-12 col-12 gx-0" >
        
       <Box className="d-flex justify-content-center">
         <Card sx={cardstyle} className="bg-card-img">
          <CardContent>
            <Box className="d-flex justify-content-between">
                <Box sx={{ color: "#fff" ,mt:"42px"}}>
                  <Typography variant='p' fontSize={14} component="div" >
                    موجودی کل حساب شما
                  </Typography>
                  <Typography variant="p" fontSize={18} component="div" sx={{mt:"12px"}}>
                    {walletvalue!={}? 
                    <div>{walletvalue.currency}تومان </div>
                    :<div>ناموجود</div>}
                  </Typography>
                </Box>
                <Box  style={{left:0}}>
                    {/* <Svg Component={LogoEN} /> */}
                    <img src={logoEng2} height="18px" width="auto" alt='logoEng'/>
                </Box>
                
            </Box>
          
            <Box className="d-flex align-items-end" dir="ltr">
              <div style={{position:"absolute",bottom:"24px"}}>
              <IconButton 
                sx={{ border: "1px solid #fff", borderRadius: '8px', ml: 1, color: "#fff"}} 
                fontSize="large"
                onClick={handleOpen('withdraw')}
              >
                <NorthEast />
              </IconButton>
              <IconButton 
                sx={{ border: "1px solid #fff", borderRadius: '8px', ml:1,color: "#fff" }} 
                fontSize="large"
                onClick={handleOpen('charge')}
              >
                <SouthWest />
              </IconButton>
              <IconButton 
                sx={{ border: "1px dashed #fff", borderRadius: '8px', ml: 1, color: "#fff" }} 
                fontSize="large"
                onClick={handleOpen('add')}
              >
                <Add />
              </IconButton>
              </div>
             
            </Box>
          </CardContent>
        </Card>

        </Box>
               <Box className="d-flex justify-content-start mb-24" >
                 <Box>
                   <Typography variant='p' sx={{ py: 2,color:"#a4a6b4"}} fontSize={14} component="div">
                      مجموع واریز
                  </Typography>
                      
                    <Box className="d-flex">
                      <Box className="text-center"sx={{backgroundColor:"rgba(217, 243, 232, 1)",mr:"8px",width:"24px",height:"24px",borderRadius:"8px"}}>
                      <Svg Component={UpGreen} /> 
                      </Box>
                    <Typography className="pt-1" variant="p" fontSize={12} component="div">
                        363,873,300 تومان
                    </Typography>
                    </Box>
                  </Box>
                  <Box sx={{mr:"8px",ml:"16px" }} >
                    <Typography variant='p' sx={{ py: 2 ,px:1,color:"#a4a6b4"}} fontSize={14} component="div">
                        مجموع برداشت
                    </Typography>
                    <Box className="d-flex">
                      <Box className="text-center"sx={{backgroundColor:"rgba(247, 220, 220, 1)",mx:"8px",width:"24px",height:"24px",borderRadius:"8px"}}>
                      <Svg Component={DownRed} /> 
                      </Box>
                    <Typography className="pt-1" variant="p" fontSize={12} component="div">
                        272,456,099 تومان
                    </Typography>
                    </Box>
                  </Box>
            </Box> 
       </Box>
       
      <Box className="col-lg-6 col-md-12 col-12 gx-0">
        <List className="overflow-auto">
          {crypto.map((item) => (
            <ListItem key={item.id} className="list-cnt" sx={{px:0,py:0,pb:"8px"}}>
              <ListItemIcon>
                <Box className="text-center" 
                  sx={ item.namePer==='تتر' || item.namePer==="بایننس یو اس دی" ? tetstyle : daistyle }
                >
                <Svg Component={getLogo(item.nameEn)}  style={{ height: "auto", width: "24px" }} />
                </Box>
              </ListItemIcon>
              <ListItemText primary={item.namePer}  primaryTypographyProps={{fontSize:"14px"}} />
              <ButtonGroup 
                disableElevation
                size="small"
                variant="contained"
                aria-label="Disabled elevation buttons"
                
              >
                <Box sx={{pr:"7%"}}>
                  <ListItemText  sx={listbtntextstyle} 
                    primary={item.price?(item.price.toman.buy):0} secondary={"%"+(item.changePercent)} 
                    secondaryTypographyProps={{pt:"3px",fontSize:"13px",textAlign:"center"}} primaryTypographyProps={{fontSize:"14px"}}
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
      <AddCardBank open={open.add} close={handleClose('add')} fulling={true}  sizewidth={sizewidth} />
      </Box>
  )
}
