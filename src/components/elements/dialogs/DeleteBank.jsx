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
import {  Box} from '@mui/material';
import Api from '../ApiConfig/Api'
import { USER_BANK,USER_BANK_ID } from '../ApiConfig/Endpoints';
import {authpost} from '../ApiConfig/ApiHeaders';
import { useSelector } from 'react-redux';

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



export default function DeleteBank({open,close,fulling ,sizewidth,bank,getbank}) {
  
  const {auth}=useSelector(state=>state.authtoken);
  const [issmall, setissmall] = React.useState(fulling);
   
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

   const StrToArray=(text,sidx,eidx)=>{
    if(text!=""){
      let strarray=[]
      for(let i=0; i<=text.length;i++){
         strarray.push(text[i])
      }
      return strarray.slice(sidx,eidx).join('')
    }
  
  }
   const handleDelete =(event)=>{
      Api.delete(`${USER_BANK}?id=${bank.id}`,{
          headers:authpost(auth),
         }).then(res=>{
          if(res.data.statusCode===200){
            getbank();
            close()
          }
      });
    }

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
             حذف کارت بانکی
        </BootstrapDialogTitle>
        <DialogContent  sx={issmall?{width:"100%"}:{width:"100%",minWidth:"450px"}} className='mycontainer'>
        {bank!=null ?<Box className="pt-2 pb-3 ">
              <Typography variant="p" fontSize={18}>
                آیا می خواهید کارت بانکی را حذف کنید؟
              </Typography>
              <div className='titlemini mt-4'>
                  <Box className="border-right-marginboldblue titlemindialog">
                    <Typography variant="p" component="div">
                      نام بانک
                    </Typography>
                  </Box>
                </div>
              <Typography variant="p" component="div" fontSize={20}>
                  {bank.bankName}
              </Typography>  

            
             <div>
              <div className='titlemini mt-3'>
                  <Box className="border-right-marginboldblue titlemindialog">
                    <Typography variant="p" component="div">
                       شماره کارت بانکی
                    </Typography>
                  </Box>
              </div>
              <Typography variant="p" component="div" fontSize={20}>
                   { StrToArray(bank.cardNumber,0,4)}-{StrToArray(bank.cardNumber,4,8)}-{StrToArray(bank.cardNumber,8,12)}-{StrToArray(bank.cardNumber,12,16)}
              </Typography>
             </div>

          </Box> :null} 


       
             
        </DialogContent>
        <DialogActions>
            <Button variant="contained" color="digi" onClick={close}  sx={{ fontSize: "16px", height: "55px",mr:2 ,borderRadius:"8px"}} fullWidth>
                خیر
             </Button>
             <Button variant="contained" onClick={handleDelete}  sx={{ fontSize: "16px", height: "55px" ,borderRadius:"8px"}} fullWidth>
                بله    
             </Button> 
        </DialogActions>
      </BootstrapDialog>
  )
}
