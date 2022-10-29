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


export default function AgreementWallet({open,close}) {

  const [issmall, setissmall] = React.useState(false);

  const textfieldstyle={
    mt:"12px",
    fontSize:"13px",
    mx:"2%",
    '& :focus':{
      backgroundColor:"#eef1ff",
      borderRadius:"8px"
    }
   }
   const sizeDialog=()=>{
    if (window.innerWidth < 700) {
      setissmall(true)
    }
   else {
    setissmall(false)
   }
  }
   React.useEffect(() => {
      sizeDialog();
      window.addEventListener('resize',sizeDialog,false);
   },[issmall]);
   
  return (
      <BootstrapDialog
        fullScreen={issmall?true:false}
        sx={{direction:"ltr"}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom boldfont">
        تایید برداشت از کیف پول تومانی
         </BootstrapDialogTitle>
        <DialogContent sx={{width:"520px"}} className='mycontainer'>
            <Box>
              <Box sx={{height:"150px",width:"100%",borderRadius:"8px"}} className="backgroundClr">
              </Box>
            </Box>
          
            <div className='titlemini'>
              <Box className="border-right-marginboldblue titlemindialog">
                <Typography variant="p" component="div" fontSize="13px">
                    کد 6 رقمی نموایش داده شده در گوگل آتنتیکیتور را وارد کنید 
                </Typography>
              </Box>
            </div>
            <FormGroup sx={{mb:"24px"}}>
               <Box className="d-flex">
                       <TextField
                        color="digi"
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        sx={textfieldstyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        sx={textfieldstyle}
                        />
               </Box>
             </FormGroup>
             <Box>
             <Button variant="contained" sx={{ fontSize: "16px", height: "55px",borderRadius:"8px" }} fullWidth>
                تایید برداشت
             </Button>
             </Box>
             
        </DialogContent>
      </BootstrapDialog>
  )
}
