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
import {  Box ,Checkbox,FormGroup,FormControlLabel,List,ListItem,ListItemText,ListItemIcon} from '@mui/material'
import { WalletOutlined} from '@mui/icons-material';
import CardsBank from '../global/CardsBank';
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';
import {ReactComponent as qrcode} from '../../../img/icons/qr.svg';
import {ReactComponent as copyicon} from '../../../img/icons/copy-clipboard.svg';
import Svg from '../../utils/Svgs';
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
  border:"1.5px solid #424BFB",borderRadius:"8px",mx:".5%",my:"1%",height:"50px",pl:"1%",
}
const boxunselected={
  border:"1.5px solid #a4a6b4",borderRadius:"8px",mx:".5%",my:"1%",height:"50px",pl:"1%",
}

const walletboxstyle={
  height: '57px',
  backgroundColor:"lightgrey",
  border:"1px solid #a4a6b4",
  borderRadius:"8px",
  p:"3%",
  my:"2%"
}
const codeboxstyle={
    height: '57px',
    border:"1px solid #cbe4eb",
    borderRadius:"8px",
    p:"3%",
    my:"2%"
  }

const subbtnstyle={
  fontSize:"16px", backgroundColor: "#424BFB", height: "55px"
}
export default function ShopStep({open,close,sizewidth}) {

 

  const [withdraw,setWithdraw]=React.useState("")
  const [coin,setCoin]=React.useState("")
  const [sizew, setSizew] = React.useState(sizewidth);
  React.useEffect(() => {
    setSizew(sizewidth)
  }, [sizewidth])
 
  return (
      <BootstrapDialog
        fullScreen
        sx={{direction:"ltr",left:0,width:sizewidth}}       
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
       <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom">
        انتخاب نحوه دریافت و شبکه      
         </BootstrapDialogTitle>
        <DialogContent className='mycontainer'>
         <Box className="border-right-marginboldblue" sx={{px:"1%",mt:"3%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                انتخاب شبکه پرداخت
           </Typography>
         </Box>
         <Box className="d-flex" sx={{pb:"2%"}}>
         <Box sx={coin==="erc-20"?boxselected:boxunselected}>
            <FormGroup>
              <FormControlLabel 
                control={<Checkbox checked={coin==="erc-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
                onClick={()=>setCoin("erc-20")} label={<Typography fontSize={14}>ERC-20</Typography>}
              />
            </FormGroup>
          </Box>
          <Box sx={coin==="trc-20"?boxselected:boxunselected}>
            <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={coin==="trc-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setCoin("trc-20")} label={<Typography fontSize={14}>TRC-20</Typography>}
            />
            </FormGroup>
          </Box>
          <Box sx={coin==="bep-20"?boxselected:boxunselected}>
            <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={coin==="bep-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setCoin("bep-20")} label={<Typography fontSize={14}>BEP-20</Typography>}
            />
            </FormGroup>
          </Box>
          <Box sx={coin==="bep-2"?boxselected:boxunselected}>
            <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={coin==="bep-2"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setCoin("bep-2")} label={<Typography fontSize={14}>BEP-2</Typography>} 
            />
            </FormGroup>
          </Box>
         </Box>
         <Box className="border-right-marginboldblue" sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                مقدار 250تتر به آدرس ولت زیر ارسال کنید
           </Typography>
         </Box>
         <Box sx={{pb:"2%"}}>
          <Box className="d-flex justify-content-between" sx={walletboxstyle}>
            <Typography variant="p" component="div">
                TPNFDKDJDMrjgkdnskfk763mfkdhgjd83h
            </Typography>
            <Box className="d-flex">
              <IconButton>
              <Svg Component={copyicon}/>
              </IconButton>
              <IconButton>
              <Svg Component={qrcode}/>
              </IconButton>
            </Box>
          </Box>
         </Box>

         <Box sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                مقدار 250تتر به آدرس ولت زیر ارسال کنید
           </Typography>
         </Box>
         <Box sx={{pb:"2%"}}>
          <Box sx={codeboxstyle}>
            <Typography variant="p" component="div">
                6725562285654124445853216498461548454
            </Typography>
         </Box>
         </Box>
        
         
         <Box className="border-right-marginboldblue"sx={{px:"1%"}} >
           <Typography variant="p" component="div" fontSize="13px">
              روش واریز مبلغ سفارش
           </Typography>
         </Box>
         
         <Box sx={{pb:"2%"}}>
            <List>
                <ListItem button sx={withdraw==="type1"?boxselected:boxunselected} onClick={()=>{setWithdraw("type1")}}>
                    <ListItemIcon>
                        <Checkbox checked={withdraw==="type1"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={withdraw==='type1'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}}   
                     primary={
                        <div className="d-flex mt-3">
                        <WalletOutlined/>
                         <p>واریز به کیف پول ارزی در دیجیکس 24</p>
                        </div>
                    }/>
                    <ListItemText primary="0BUSD" primaryTypographyProps={withdraw==='type1'?{color:"#424BFB",fontSize:"11px"}:{color:"#5f5f62",fontSize:"11px"}} />
                </ListItem>

                <ListItem button sx={withdraw==="type2"?boxselected:boxunselected} onClick={()=>{setWithdraw("type2")}}>
                    <ListItemIcon>
                        <Checkbox checked={withdraw==="type2"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={withdraw==='type2'?{color:"#424BFB",fontSize:"15px"}:{color:"#5f5f62",fontSize:"15px"}} 
                     primary={
                        <div className="d-flex mt-3">
                        <WalletOutlined/>
                         <p>واریز به کیف پول خودم</p>
                        </div>
                    }/>
                </ListItem>
            </List>
         </Box>
          <Box sx={{my:"2%",px:"1%"}}>
          {withdraw==="type2" && <CardsBank />}
          </Box>
        

        </DialogContent>
        <DialogActions sx={{p:"2%"}}>
        <Button variant="contained" sx={subbtnstyle} fullWidth>
               ثبت سفارش 
          </Button>
        </DialogActions>
      </BootstrapDialog>
  )
}
