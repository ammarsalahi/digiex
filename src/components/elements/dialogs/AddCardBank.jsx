import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {  Box,InputAdornment ,FormGroup, TextField} from '@mui/material';

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


export default function AddCardBank({open,close,fulling ,sizewidth}) {

  const [issmall, setissmall] = React.useState(fulling);

  const textfieldstyle={
    fontSize:"13px",
    '& :focus':{
      backgroundColor:"#eef1ff",
      borderRadius:"8px"
    }
   }
   const btnbg={
    backgroundColor:"#eef1ff",
    borderRadius:"8px"
  }
  const adornmentstyle={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:-10,
    paddingLeft:4,
  }
   
  const sizeDialog=()=>{
    if(fulling==false){
      if (window.innerWidth < 768) {
        setissmall(true)
      }
     else {
      setissmall(false)
     }
    }
    
  }
   React.useEffect(() => {
      sizeDialog();
      window.addEventListener('resize',sizeDialog,false);
   },[issmall]);
   
  return (
      <BootstrapDialog
        fullScreen={issmall?true:false}
        sx={{direction:"ltr",left:0,width:sizewidth}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom boldfont-dialog dialog-title-container">
             افزودن کارت بانکی جدید
        </BootstrapDialogTitle>
        <DialogContent  sx={{width:"100%"}} className='mycontainer'>
            <Typography variant="p" component="div" sx={{mb:"24px",fontSize:14}}>
            حتما کارت بانکی ای را ثبت کنید که به نام صاحب حساب کاربری (خودتان) باشد، در غیر اینصورت بصورت اتوماتیک رد خواهد شد.
            </Typography>
                <div className='titlemini'>
                  <Box className="border-right-marginboldblue titlemindialog">
                    <Typography variant="p" component="div">
                       شماره کارت بانکی
                    </Typography>
                  </Box>
                </div>
            <FormGroup sx={{mb:"24px"}}>
               <Box className="d-flex">
                       <TextField
                        color="digi"
                        variant="outlined"
                        type="tel"
                        inputProps={{ maxLength: 4,disableUnderline: true}}
                        sx={textfieldstyle}
                        style={{marginLeft:"16px"}}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        type="tel"
                        inputProps={{ maxLength: 4,disableUnderline: true}}
                        sx={textfieldstyle}
                        style={{marginLeft:"16px"}}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        type="tel"
                        inputProps={{ maxLength: 4,disableUnderline: true}}
                        sx={textfieldstyle}
                        style={{marginLeft:"16px"}}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        type="tel"
                        inputProps={{ maxLength: 4,disableUnderline: true}}
                        sx={textfieldstyle}
                        />
               </Box>
             </FormGroup>

               <div className='titlemini'>
                  <Box className="border-right-marginboldblue titlemindialog">
                    <Typography variant="p" component="div">
                       شماره‌شبا 
                    </Typography>
                  </Box>
                </div>
               <FormGroup sx={{mb:"24px"}}>
                    <TextField 
                      color="digi"
                      fullWidth
                      sx={{'& :focus':btnbg}} 
                      type="number"
                      InputProps={{
                        endAdornment:( 
                          <Box sx={adornmentstyle}>
                             <InputAdornment position="end">IR</InputAdornment>
                          </Box>
                        ),
                      }}
                    />
               </FormGroup>
               {fulling===false &&<Box sx={{pt:"24px"}}>

           <Button variant="contained" sx={{ fontSize: "16px", height: "55px" ,borderRadius:"8px"}} fullWidth>
                ثبت کارت بانکی جدید
             </Button>
             </Box>}
             
        </DialogContent>
        {fulling===true && <DialogActions>
          <Button variant="contained" sx={{ fontSize: "16px", height: "55px" ,borderRadius:"8px"}} fullWidth>
                ثبت کارت بانکی جدید
             </Button>
        </DialogActions>}
      </BootstrapDialog>
  )
}
