import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {Box ,List,ListItem,ListItemIcon,ListItemText,FormLabel, TextField,Checkbox,InputAdornment} from '@mui/material'
import {WalletOutlined} from '@mui/icons-material';
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';
import CardID from '../global/CardID';
import CardsBank from '../global/CardsBank';
import inputFontSize from '../global/inputFontSize';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


  const boxselected={
    border:"1px solid #424BFB",borderRadius:"8px",
    height:"56px",backgroundColor:"rgba(238,241,255,1)",
    minWidth:"137px",
    textAlign:"center",
    width:"100%",

  }
  const boxunselected={
    border:"1px solid #cbe4eb",borderRadius:"8px",
    height:"56px",
    minWidth:"137px",
    textAlign:"center",
    width:"100%",


  }


const subbtnstyle={
  fontSize:"16px", height: "55px",borderRadius:'8px'
}
const btnbg={
  backgroundColor:"#eef1ff",
  borderRadius:"8px"
}
const adornmentstyle={
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  marginLeft:-14,
  paddingLeft:4,
}
export default function WalletCharge({open,close,sizewidth}) {

  
  const [payment,setpayment]=React.useState("id");
  const [price,setprice]=React.useState();

  const listsdataBank=[
    {'name':"حداقل واریز",'price':"2000,000 تومان"},
    {'name':"حداکثر واریز",'price':"50,000,000 تومان"},
    {'name':"کارمزد واریز ریالی",'price':"رایگان"},

  ]
  const listsdataID=[
    {'name':"حداقل واریز",'price':"1,000,000 تومان"},
    {'name':"حداکثر واریز",'price':"3,000,000,000 تومان"},
    {'name':"کارمزد واریز ریالی به ازای هر 1 میلیون تومان",'price':"5,000 تومان"},

  ]
  
  const [sizew, setSizew] = React.useState(sizewidth);
  React.useEffect(() => {
    setSizew(sizewidth)
  }, [sizewidth]);
 
  return (
      <BootstrapDialog
        fullScreen
        sx={{direction:"ltr",left:0,width:sizewidth}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom dialog-title-container boldfont-dialog">
             شارژ کیف پول تومانی
        </BootstrapDialogTitle>
        
        <DialogContent className='mycontainer'>
                <div className='titlemini'>
                  <Box className="border-right-marginboldblue titlemindialog">
                    <Typography variant="p" component="div">
                    روش شارژ کیف پول 
                    </Typography>
                  </Box>
                </div>
         <Box sx={{mb:"24px"}}>
            <List>
                <ListItem style={{cursor:"pointer",marginBottom:"12px"}} sx={payment==="bank"?boxselected:boxunselected} onClick={()=>{setpayment("bank")}}>
                    <ListItemIcon>
                        <Checkbox checked={payment==="bank"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={payment==='bank'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}}   
                     primary={
                        <div className="d-flex mt-3">
                         <WalletOutlined sx={{mr:"12px"}}/>
                         <p>واریز از طریق درگاه بانکی</p>
                        </div>
                    }/>
                </ListItem>
                <ListItem style={{cursor:"pointer",marginBottom:"12px"}} sx={payment==="id"?boxselected:boxunselected} onClick={()=>{setpayment("id")}}>
                    <ListItemIcon>
                        <Checkbox checked={payment==="id"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={payment==='id'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}}   
                     primary={
                        <div className="d-flex mt-3">
                        <WalletOutlined sx={{mr:"12px"}}/>
                         <p>پرداخت با شناسه</p>
                        </div>
                    }/>
                    <ListItemText 
                        primaryTypographyProps={
                          payment==='id'
                          ?{color:"#424BFB",fontSize:"11px",textAlign:'right',mr:'10px'}
                          :{color:"#5f5f62",fontSize:"11px",textAlign:'right',mr:'10px'}
                        }  
                        primary="مناسب واریز بالای 50 میلیون تومان"/>     
               </ListItem>
            </List>
         </Box>

       {payment==="bank" &&
            <Box>
                <div className='titlemini'>
                  <Box className="border-right-marginboldblue titlemindialog">
                    <Typography variant="p" component="div">
                    انتخاب کارت بانکی برای پرداخت
                    </Typography>
                  </Box>
                </div>
             <Box sx={{mb:"24px"}}>
              <CardsBank/>
             </Box>
            <Box>
         </Box>
         <Box sx={{mb:"24px"}}>
            <FormLabel sx={{color:"#000"}}>
            مبلغ دلخواه(تومان)
            </FormLabel>
            <TextField 
            color="digi"
              fullWidth
              sx={{"& :focus":btnbg}}
              placeholder='50,000,000'
              InputProps={{
                endAdornment:(
                  <Box sx={adornmentstyle}>
                    <InputAdornment position="end">تومان</InputAdornment>
                  </Box>
                ),
                style:inputFontSize,
              }}
            />
            </Box>
            <Box className="d-flex overflow-auto" sx={{mb:"10px",pb:"14px"}}>
               <Box className="d-flex justify-content-center align-items-center"
                  sx={price==='5'?boxselected:boxunselected} onClick={()=>setprice('5')} 
                  style={{fontSize:"13px", cursor:"pointer"}}>
                     <Typography color={price==='5' && 'primary'}>
                     5,000,000 تومان
                      </Typography>
               </Box>
               <Box className="d-flex justify-content-center align-items-center"
                  sx={price==='10'?boxselected:boxunselected} onClick={()=>setprice('10')} 
                  style={{fontSize:"13px", cursor:"pointer",marginInline:"16px"}}
                  >
                    <Typography color={price==='10' && 'primary'}>
                    10,000,000 تومان 
                    </Typography>
                 
               </Box>
               <Box className="d-flex justify-content-center align-items-center"
                  sx={price==='25'?boxselected:boxunselected} onClick={()=>setprice('25')} 
                  style={{fontSize:"12px", cursor:"pointer"}}>
                  <Typography color={price==='25' && 'primary'}>
                  25,000,000 تومان                 
                  </Typography>
                 
               </Box>
           </Box>
           <Box className="bg-light" sx={{borderRadius:"8px",p:"3%",width:"100%",mt:"3%"}}>
            {listsdataBank.map((item, idx) => (
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
          </Box>
          </Box>}
        {payment==='id' && 
          <Box>
           <CardID />
            <Box className="bg-light" sx={{borderRadius:"8px",p:"2%",mt:"3%"}}>
                {listsdataID.map((item, idx) => (
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
            </Box>
          </Box>
        
        }
         
        </DialogContent>
        <DialogActions sx={{p:"2%"}}>
                <Button variant="contained" sx={subbtnstyle} fullWidth>
                    پرداخت
                </Button>
         </DialogActions>
      </BootstrapDialog>
  )
}
