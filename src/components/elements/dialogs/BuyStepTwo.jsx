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
import {  Box ,Checkbox, ListItem, ListItemIcon, ListItemText,List} from '@mui/material'
import { Wallet } from '@mui/icons-material';
import CardsBank from '../global/CardsBank';
import CardID from '../global/CardID';
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const heighttt = {
  height : "56px",
  marginBottom : "16px"
}
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
              right: '20px',
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
  border:"1.5px solid #424BFB",borderRadius:"8px",my:"1%",height:"50px",
}
const boxunselected={
  border:"1.5px solid #a4a6b4",borderRadius:"8px",my:"1%",height:"50px",
}

const subbtnstyle={
  fontSize:"16px", backgroundColor: "#424BFB", height: "55px",borderRadius:'8px'
}

export default function BuyStepTwo({open,close,opendialogd}) {

  const [sizewidth, setSizewidth] = React.useState('auto');

  const [deposit, setDeposit] = React.useState("");
  const [withdraw,setWithdraw]=React.useState("");
  React.useEffect(() => {
    if (window.innerWidth < 700) {
      setSizewidth('auto')
    }
    else if(window.innerWidth >= 1281) {
      setSizewidth('650px')
    }
    else{
      setSizewidth('500px')
    }
  },[sizewidth,window.innerWidth]);
   
 
  return (
      <BootstrapDialog
        fullScreen
        sx={{direction:"ltr",left:0,width:sizewidth}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
        >
         <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom" sx={{ fontSize: "14px" }}>
        انتخاب نحوه دریافت و شبکه      
         </BootstrapDialogTitle>
        <DialogContent className='px-32 px-24'>
         <Box className="border-right-marginboldblue"sx={{px:"1%", mb: "16px"}}>
           <Typography variant="p" component="div" fontSize="13px">
              روش دریافت ارز
           </Typography>
         </Box>
         <Box sx={{pb:"2%"}}>
            <List sx={{padding: "0"}}>
                <ListItem button sx={deposit==="type1"?boxselected:boxunselected} onClick={()=>{setDeposit("type1")}} style={heighttt}>
                    <ListItemIcon>
                        <Checkbox checked={deposit==="type1"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} sx={{padding: "0"}}/>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={deposit==='type1'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}}   
                     primary={
                        <div className="d-flex mt-3">
                        <Wallet/>
                         <p>واریز به کیف پول ارزی در دیجیکس 24</p>
                        </div>
                    }/>
                    <ListItemText primary="0BUSD" primaryTypographyProps={deposit==='type1'?{color:"#424BFB",fontSize:"11px"}:{color:"#5f5f62",fontSize:"11px"}} />
                </ListItem>

                <ListItem button sx={deposit==="type2"?boxselected:boxunselected} onClick={()=>{setDeposit("type2")}} style={heighttt}>
                    <ListItemIcon>
                        <Checkbox checked={deposit==="type2"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} sx={{padding: "0"}}/>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={deposit==='type2'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}} 
                     primary={
                        <div className="d-flex mt-3">
                        <Wallet/>
                         <p>واریز به کیف پول خودم</p>
                        </div>
                    }/>
                </ListItem>
            </List>
         </Box>
         <Box className="border-right-marginboldblue px-1">
           <Typography variant="p" component="div" fontSize="13px">
              روش پرداخت
           </Typography>
         </Box>
         <Box sx={{pb:"2%"}}>
            <List>
                <ListItem button sx={withdraw==="type1"?boxselected:boxunselected} onClick={()=>{setWithdraw("type1")}} style={heighttt}>
                    <ListItemIcon>
                        <Checkbox checked={withdraw==="type1"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} sx={{padding: "0"}}/>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={withdraw==='type1'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}}  
                     primary={
                        <div className="d-flex mt-3">
                        <Wallet/>
                         <p>پرداخت از طریق کیف پول تومانی</p>
                        </div>
                    }/>
                    <ListItemText primaryTypographyProps={withdraw==='type1'?{color:"#424BFB",fontSize:"11px"}:{color:"#5f5f62",fontSize:"11px"}} 
                     primary="5,282,050 تومان" />
                </ListItem>
                <ListItem button sx={withdraw==="type2"?boxselected:boxunselected} onClick={()=>{setWithdraw("type2")}} style={heighttt}>
                    <ListItemIcon>
                        <Checkbox checked={withdraw==="type2"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} sx={{padding: "0"}}/>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={withdraw==='type2'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}}
                      primary={
                        <div className="d-flex mt-3">
                        <Wallet/>
                         <p>پرداخت از طریق درگاه بانکی</p>
                        </div>
                    }/>
                    <ListItemText primaryTypographyProps={withdraw==='type2'?{color:"#424BFB",fontSize:"11px"}:{color:"#5f5f62",fontSize:"11px"}}  
                     primary="0BUSD" />
                </ListItem>
                <ListItem button sx={withdraw==="type3"?boxselected:boxunselected} onClick={()=>{setWithdraw("type3")}} style={heighttt}>
                    <ListItemIcon>
                        <Checkbox checked={withdraw==="type3"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} sx={{padding: "0"}}/>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={withdraw==='type3'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}}    
                    primary={
                        <div className="d-flex mt-3">
                        <Wallet/>
                         <p>پرداخت با شناسه</p>
                        </div>
                    }/>
                    <ListItemText primaryTypographyProps={withdraw==='type3'?{color:"#424BFB",fontSize:"11px"}:{color:"#5f5f62",fontSize:"11px"}}  
                     primary="مناسب واریز بالای 50 میلیون تومان"/>
                </ListItem>
            </List>
         </Box>
        
          <Box sx={{my:"2%",px:"1%"}}>
          {withdraw==='type2' &&<Box>
              <Box className="border-right-marginboldblue" sx={{px:"1%",my:"2%"}}>
                <Typography variant="p" component="div" fontSize="13px">
                      انتخاب کارت بانکی برای پرداخت
                </Typography>
              </Box>
              <CardsBank />
          </Box>
          }
          {withdraw==='type3'&& <CardID />}
          </Box>
        

        </DialogContent>
        <DialogActions sx={{px:"2%"}}>
          <Button variant="contained" onClick={opendialogd} sx={subbtnstyle} fullWidth>
              ثبت و پرداخت
          </Button>
          
        </DialogActions>
      </BootstrapDialog>
  )
}
