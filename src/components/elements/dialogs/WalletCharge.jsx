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
import {  Box ,List,ListItem,ListItemIcon,ListItemText, TextField} from '@mui/material'
import { ContentCopy, QrCode, WalletOutlined} from '@mui/icons-material';
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';
import DigiSelect from '../global/DigiSelect';
import CardID from '../global/CardID';

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
              right: 8,
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
  border:"1.5px solid #424BFB",borderRadius:"8px",my:"1%",height:"50px",mx:"2%",pl:"2%",backgroundColor:"rgb(211, 245, 255)",
}
const boxunselected={
  border:"1.5px solid #a4a6b4",borderRadius:"8px",my:"1%",height:"50px",mx:"2%",pl:"2%",
}
const textfieldstyle={
  "& .MuiOutlinedInput-root.Mui-disabled":{
    "& > fieldset": {border: '1px solid #a4a6b4',borderRadius:'8px'},
  }
}

const subbtnstyle={
  fontSize:"16px", backgroundColor: "#424BFB", height: "55px",borderRadius:'8px'
}
export default function WalletCharge({open,close}) {

  const [issmall, setissmall] = React.useState(false);
  const [payment,setpayment]=React.useState("bank");
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
  
   React.useEffect(() => {
    if (window.innerWidth < 700) {
      setissmall(true)
    }
   else {
    setissmall(false)
   }
   });
   
 
  return (
      <BootstrapDialog
        fullScreen
        sx={issmall?{direction:"ltr"}:{direction:"ltr",width:"500px"}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom">
             شارژ کیف پول تومانی
        </BootstrapDialogTitle>
        
        <DialogContent>
        <Box className="border-right-marginboldblue" sx={{px:"1%",mt:"3%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                روش شارژ کیف پول 
           </Typography>
         </Box>
         <Box sx={{pb:"1%"}}>
            <List>
                <ListItem button sx={payment==="bank"?boxselected:boxunselected} onClick={()=>{setpayment("bank")}}>
                    <ListItemIcon>
                        <Checkbox checked={payment==="bank"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={payment==='bank'?{color:"#424BFB",fontSize:"15px"}:{color:"#a4a6b4",fontSize:"15px"}}   
                     primary={
                        <div className="d-flex mt-3">
                        <WalletOutlined/>
                         <p>واریز از طریق درگاه بانکی</p>
                        </div>
                    }/>
                </ListItem>
                <ListItem button sx={payment==="id"?boxselected:boxunselected} onClick={()=>{setpayment("bank")}}>
                    <ListItemIcon>
                        <Checkbox checked={payment==="id"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={payment==='id'?{color:"#424BFB",fontSize:"15px"}:{color:"#a4a6b4",fontSize:"15px"}}   
                     primary={
                        <div className="d-flex mt-3">
                        <WalletOutlined/>
                         <p>پرداخت با شناسه</p>
                        </div>
                    }/>
                    <ListItemText primaryTypographyProps={payment==='id'?{color:"#424BFB",fontSize:"11px"}:{color:"#a4a6b4",fontSize:"11px"}}  
                        primary="مناسب واریز بالای 50 میلیون تومان"/>     
               </ListItem>
            </List>
         </Box>

       {payment==="bank" &&
            <Box>
                <Box className="border-right-marginboldblue" sx={{px:"1%",mt:"3%"}}>
                 <Typography variant="p" component="div" fontSize="13px">
                      انتخاب کارت بانکی برای پرداخت
                </Typography>
                 </Box>
             <Box sx={{pb:"1%"}}>
            <CardsBank/>
             </Box>
            <Box sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                  مبلغ دلخواه(تومان)
           </Typography>
         </Box>
         <Box sx={{pb:"2%",px:"1%"}}>
            <TextField 
              fullWidth
              sx={textfieldstyle}
              placeholder='50,000,000'
              InputProps={{
                endAdornment: <InputAdornment position="end">تومان</InputAdornment>,
              }}
            />
            <Box className="d-flex justify-content-between">
               <Box sx={price==='5'?boxselected:boxunselected} onClick={()=>setprice('5')}>
                 5,000,000 تومان
               </Box>
               <Box sx={price==='10'?boxselected:boxunselected} onClick={()=>setprice('10')}>
                 10,000,000 تومان 
               </Box>
               <Box sx={price==='25'?boxselected:boxunselected} onClick={()=>setprice('25')}>
                  25,000,000 تومان
               </Box>
            </Box>
           </Box>
           <Box className="bg-light" sx={{borderRadius:"8px",p:"3%",width:"500px",mt:"3%"}}>
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
