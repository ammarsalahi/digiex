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

  const inputStyle={ style: { textAlign: 'center' ,fontSize:"22px",padding:"10px 0px"}}

export default function AddCardBank({open,close,fulling ,sizewidth,getbank}) {
  
  const {auth}=useSelector(state=>state.authtoken);
  const [issmall, setissmall] = React.useState(fulling);
  const inref=React.useRef([]);
  const [cardnumber,setCardnumber]=React.useState({
    first:"",
    second:"",
    third:"",
    forth:""
  });
  const [checked, setchecked] = React.useState(false);
  const [ifadd,setIfadd]=React.useState(true);
  const [error,setError]=React.useState("")

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
  const handleChange=(props,idx,event)=>{
    setchecked(false)
    if(event.target.value.length <5){
      setCardnumber({...cardnumber,[props]:event.target.value});
      if(event.target.value.length==4){
        if(idx===0){
          setchecked(true)
        }else{
          inref.current[idx].focus();
          }
                
      }
    }
    else{
        inref.current[idx].focus();
    }
  }
   React.useEffect(() => {
      sizeDialog();
      window.addEventListener('resize',sizeDialog,false);
      if(checked===true && cardnumber.forth){
        handleAddCard();
      }
      
      setError("")
   },[issmall,checked,cardnumber]);

  const handleAddCard=()=>{
    let card=`${cardnumber.first}${cardnumber.second}${cardnumber.third}${cardnumber.forth}`;
    Api.post(USER_BANK,{
      "cardNumber":card
    },{
      headers:authpost(auth)
    }).then(res=>{
      if(res.data.statusCode===200){
        setchecked(false)
        if(getbank!=null){
           setIfadd(false)
        }
      }
    }).catch(err=>{
      setError("کارت موردنظر اضافه نشد لطفا اطلاعات را بررسی کنید");
      console.log(err.response)
    })
  }
  const handleCloseDialog=()=>{
    setCardnumber({first:"",second:"",third:"",forth:""})
    getbank();
    close()
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
                        type="number"
                        sx={textfieldstyle}
                        style={{marginLeft:"16px"}}
                        value={cardnumber.forth}
                        inputRef={(ref)=>(inref.current[4]=ref)}
                        onChange={(event)=>{
                          handleChange('forth',0,event)
                         }}
                         inputProps={inputStyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        type="number"
                        sx={textfieldstyle}
                        style={{marginLeft:"16px"}}
                        value={cardnumber.third}
                        inputRef={(ref)=>(inref.current[3]=ref)}
                        onChange={(event)=>{
                          handleChange('third',4,event)
                         }}
                         inputProps={inputStyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        type="number"
                        sx={textfieldstyle}
                        style={{marginLeft:"16px"}}
                        value={cardnumber.second}
                        inputRef={(ref)=>inref.current[2]=ref}
                        onChange={(event)=>{
                          handleChange('second',3,event)
                         }}
                         inputProps={inputStyle}
                        />
                        <TextField
                        color="digi"
                        variant="outlined"
                        type="number"
                        sx={textfieldstyle}
                        value={cardnumber.first}
                        inputRef={(ref)=>(inref.current[1]=ref)}
                        onChange={(event)=>{
                          handleChange('first',2,event)
                         }}
                         inputProps={inputStyle}
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
                      disabled
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
               <Typography variant="p" component="div" color="error" fontSize={14}>
                   {error}
               </Typography>
            {fulling===false &&<Box sx={{pt:"24px"}}>

              <Button variant="contained" disabled={ifadd} onClick={handleCloseDialog}  sx={{ fontSize: "16px", height: "55px" ,borderRadius:"8px"}} fullWidth>
                ثبت کارت بانکی جدید
              </Button>
            </Box>}
             
        </DialogContent>
        {fulling===true && <DialogActions>
          <Button variant="contained" onClick={handleCloseDialog} disabled={ifadd}   sx={{ fontSize: "16px", height: "55px" ,borderRadius:"8px"}} fullWidth>
                ثبت کارت بانکی جدید
             </Button>
        </DialogActions>}
      </BootstrapDialog>
  )
}
