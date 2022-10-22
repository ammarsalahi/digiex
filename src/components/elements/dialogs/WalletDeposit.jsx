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

const textfieldstyle={
    "& .MuiOutlinedInput-root.Mui-disabled":{
      "& > fieldset": {border: '1px solid #a4a6b4',borderRadius:'8px'},
    }
}
const subbtnstyle={
  fontSize:"16px", backgroundColor: "#424BFB", height: "55px",borderRadius:"8px"
}
export default function WalletDesposit({open,close,options}) {

  const [issmall, setissmall] = React.useState(false);

  
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
        sx={issmall?{}:{width:"500px"}}
        PaperProps={{
          sx:issmall?{}:{right:0,position:"fixed",width:'500px'}
        }}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom">
            واریز ارز به کیف پول
        </BootstrapDialogTitle>
        
        <DialogContent>
        
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
                انتخاب شبکه پرداخت
           </Typography>
         </Box>
         <Box>
          
         </Box>
         <Box>
         <FormGroup sx={{my:"2%"}}>
            <FormLabel className="mb-2">تعداد</FormLabel>
            <TextField
            color='digi'
             sx={textfieldstyle}
             type="number"
             fullWidth variant='outlined' placeholder='۰.۰۰'
              InputProps={{
                endAdornment: <InputAdornment position="end">BUSD</InputAdornment>,
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
