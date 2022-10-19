import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {  Box ,FormGroup, TextField} from '@mui/material';

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


export default function AgreementWallet({open,close}) {

  const [issmall, setissmall] = React.useState(false);

    const textfieldstyle={
    "& .MuiOutlinedInput-root.Mui-disabled":{
      "& > fieldset": {border: '1px solid #a4a6b4',borderRadius:'8px'},
    },
    mt:"12px",
    fontSize:"13px",
    mx:"2%",
   }
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
        sx={{direction:"ltr"}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom">
        تایید برداشت از کیف پول تومانی
         </BootstrapDialogTitle>
        <DialogContent dividers sx={{width:"520px"}}>
            <Box sx={{px:"2%"}}>
            <Box sx={{height:"150px",width:"100%",borderRadius:"8px"}} className="bg-light">
            </Box>
            </Box>
          
          <Box sx={{borderRadius:"14px",py:"3%",px:"2%"}}>
           <Box className="border-right-marginboldblue px-1">
                <Typography variant="p" component="div" fontSize="13px">
                       کد 6 رقمی نموایش داده شده در گوگل آتنتیکیتور را وارد کنید 
                </Typography>
                </Box>
            <Box>
            <FormGroup sx={{mb:"4%"}}>
               <Box className="d-flex">
                       <TextField
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        variant="outlined"
                        sx={textfieldstyle}
                        />
               </Box>
             </FormGroup>
            </Box>    
             <Box sx={{px:"2%"}}>
             <Button variant="contained" sx={{ fontSize: "16px", backgroundColor: "#424BFB", height: "55px",borderRadius:"8px" }} fullWidth>
                تایید برداشت
             </Button>
             </Box>
             
          </Box>
        </DialogContent>
      </BootstrapDialog>
  )
}
