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
import {Box,Checkbox,FormGroup,FormControlLabel, TextField, FormLabel} from '@mui/material'
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';
import DigiSelect from '../global/DigiSelect';
import {ReactComponent as qrcode} from '../../../img/icons/qr.svg';
import {ReactComponent as copyicon} from '../../../img/icons/copy-clipboard.svg';
import Svg from '../../utils/Svgs';
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

const walletboxstyle={
  height: '55px',
  backgroundColor:"#f1f3fa",
  border:"1px solid #cbe4eb",
  borderRadius:"8px",
  px:"16px",
  width:"auto"
}

const subbtnstyle={
  fontSize:"16px", height: "55px",borderRadius:'8px'
}
export default function WalletDesposit({open,close,options,sizewidth}) {


  const [coin,setCoin]=React.useState("")
  
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom boldfont-dialog dialog-title-container">
         واریز ارز به کیف پول
        </BootstrapDialogTitle>
        
        <DialogContent className='mycontainer'>
        
         <div className='titlemini'>
            <Box className="border-right-marginboldblue titlemindialog">
            <Typography variant="p" component="div">
               انتخاب  ارز   
            </Typography>
          </Box>
          </div>
        <Box sx={{mb:"24px"}}>
            <DigiSelect options={options}/>
        </Box>
          <div className='titlemini'>
            <Box className="border-right-marginboldblue titlemindialog">
            <Typography variant="p" component="div">
            انتخاب شبکه پرداخت
            </Typography>
            </Box>
          </div>
         
         <Box className="d-flex overflow-auto" sx={{mb:"10px",pb:"14px"}}>
         <Box sx={coin==="erc-20"?boxselected:boxunselected} className="d-flex justify-content-start">
            <FormGroup className='d-flex align-items-start mt-2'>
              <FormControlLabel 
                sx={{ml:'8px'}}
                control={<Checkbox checked={coin==="erc-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
                onClick={()=>setCoin("erc-20")} label="ERC-20"
              />
            </FormGroup>
          </Box>
          <Box sx={coin==="trc-20"?boxselected:boxunselected} className="d-flex justify-content-start" style={{marginInline:"16px"}}>
          <FormGroup className='d-flex align-items-start mt-2'>
              <FormControlLabel 
                sx={{mx:'8px'}}
              control={<Checkbox checked={coin==="trc-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setCoin("trc-20")} label="TRC-20" 
            />
            </FormGroup>
          </Box>
          <Box sx={coin==="bep-20"?boxselected:boxunselected} className="d-flex justify-content-start">
            <FormGroup className='d-flex align-items-start mt-2'>
              <FormControlLabel 
                sx={{mx:'8px'}}
              control={<Checkbox checked={coin==="bep-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setCoin("bep-20")} label="BEP-20" 
            />
            </FormGroup>
          </Box>
         </Box>
         <div className='titlemini'>
            <Box className="border-right-marginboldblue titlemindialog">
            <Typography variant="p" component="div" >
            مقدار 250تتر به آدرس ولت زیر ارسال کنید
            </Typography>
          </Box>
          </div>
         <Box sx={{mb:"24px"}}>
          <Box className="d-flex justify-content-between align-items-center" sx={walletboxstyle}>
            <Typography variant="p" component="div">
                TPNFDKDJDMrjgkdnskfk763jd83h
            </Typography>
            <Box className="d-flex">
                <Svg Component={copyicon} style={{cursor:"pointer"}}/>
                <Svg Component={qrcode} style={{marginRight:"16px",cursor:"pointer"}}/>
            </Box>
          </Box>
         </Box>
         <FormGroup>
          <FormLabel sx={{color:"#000"}}>
            کد پیگیری (TXID) را وارد کنید
          </FormLabel>
            <TextField
              color="digi"
              fullWidth
              sx={{
                '& :focus':{
                  backgroundColor:"#eef1ff",
                  borderRadius:"8px"
                }

              }}
              InputProps={{
                  style:inputFontSize,
              }}
            />
         </FormGroup>         
        </DialogContent>
        <DialogActions>
                <Button variant="contained" sx={subbtnstyle} fullWidth>
                    ثبت سفارش 
                </Button>
         </DialogActions>
      </BootstrapDialog>
  )
}
