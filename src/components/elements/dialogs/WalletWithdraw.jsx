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
import {  Box ,FormGroup,FormLabel,InputAdornment,TextField} from '@mui/material'
import DigiSelect from '../global/DigiSelect';
import CardWallet from '../global/CardWallet';

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
const subbtnstyle={
  fontSize:"16px", backgroundColor: "#424BFB", height: "55px",borderRadius:"8px"
}
export default function WalletWithdraw({open,close,options}) {


  const [sizewidth, setSizewidth] = React.useState('auto');
  
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom">
           برداشت ارز از  کیف پول
        </BootstrapDialogTitle>
        
        <DialogContent className='px-32'>
        
        <Box className="border-right-marginboldblue" sx={{px:"1%",mt:"3%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                انتخاب  ارز
           </Typography>
         </Box>
        <Box sx={{pb:"1%"}}>
            <DigiSelect options={options}/>
        </Box>
         <Box className="border-right-marginboldblue" sx={{px:"1%"}}>
           <Typography variant="p" component="div" fontSize="13px">
                انتخاب آدرس کیف پول
           </Typography>
         </Box>
         <Box>
          <CardWallet options={options} />
         </Box>
         <Box>
         <FormGroup sx={{my:"2%"}}>
            <FormLabel className="mb-2">تعداد</FormLabel>
            <TextField
            color='digi'
             type="number"
             sx={{"& :focus":btnbg}}
             fullWidth variant='outlined' placeholder='۰.۰۰'
              InputProps={{
                endAdornment:(
                  <Box sx={adornmentstyle}>
                      <InputAdornment position="end">BUSD</InputAdornment>
                  </Box>
                ),
              }}
              
            />
            </FormGroup>
         </Box>
    
        </DialogContent>
        <DialogActions sx={{p:"2%"}}>
                <Button variant="contained" sx={subbtnstyle} fullWidth>
                    ثبت درخواست برداشت 
                </Button>
         </DialogActions>
      </BootstrapDialog>
  )
}
