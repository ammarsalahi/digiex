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
import {  Box ,FormGroup,FormControlLabel,Checkbox} from '@mui/material'
import DigiSelect from '../global/DigiSelect';
import { CheckCircle,RadioButtonUnchecked } from '@mui/icons-material';

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


const formbtnstyle={
  textAlign:'left',
  marginBottom:'5%',
}

const boxselected={
  border:"2px solid blue",borderRadius:"10px",px:"2%",py:"1%",mx:"1%",
}
const boxunselected={
  border:"2px solid grey",borderRadius:"10px",px:"2%",py:"1%",mx:"1%"
}

export default function BuyFee({open,close,optionsdata}) {

  const [issmall, setissmall] = React.useState(false);
  const [bep, setbep] = React.useState("bep-20");
  
  const data=[
    {"name":"کارمزد واریز","price":"0BUSD"},
    {"name":"کارمزد برداشت مستقیم","price":"0.4BUSD"},
    {"name":"کارمزد دریافت ارز در کیف پول digiex24","price":"۰تومان"},
    {"name":"زمان انتقال","price":"2 دقیقه"},
   ]
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
        sx={issmall?{}:{left:0,width:"500px"}}
        PaperProps={{
          sx:issmall?{}:{right:0,position:"fixed",width:'500px'}
        }}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom">
          کارمزد ارسال و دریافت       
         </BootstrapDialogTitle>
        <DialogContent>
          <Typography variant="p" component="div" sx={{fontSize:"14px" ,mt:"2%"}}>
          از آنجا که در صرافی دیجیکس ۲۴ ارزهای متنوعی معامله میشود،کارمزد ارسال و دریافت هر کدام از این ارزها مختلف میباشد. به کمک لیست زیر میتوانید با انتخاب هر ارز، اطلاعاتی مانند سقف واریز و برداشت، کارمزد نقل و انتقال و … را مشاهده کنید.
          </Typography>
          <FormGroup className="pt-3" sx={formbtnstyle}>
           <DigiSelect options={optionsdata} />
          </FormGroup>
          <Box className="d-flex justify-content-start">
          <Box sx={bep==="bep-20"?boxselected:boxunselected}>
            <FormGroup>
              <FormControlLabel 
                control={<Checkbox checked={bep==="bep-20"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
                onClick={()=>setbep("bep-20")} label="BEP-20"
              />
            </FormGroup>
          </Box>
          <Box sx={bep==="bep-2"?boxselected:boxunselected}>
            <FormGroup>
            <FormControlLabel 
              control={<Checkbox checked={bep==="bep-2"} icon={<RadioButtonUnchecked/>} checkedIcon={<CheckCircle/>} />} 
              onClick={()=>setbep("bep-2")} label="BEP-2" 
            />
            </FormGroup>
          </Box>
          </Box>
         
          <Box sx={{py:"4%"}}>
            {data.map((item, idx) => (
              <div className='d-flex justify-content-between'>
                <Typography variant="p" component="div" sx={{fontSize : "14px"}}>
                  {item.name}
                </Typography>
                <hr />
                <Typography variant="p" component="div"  sx={{fontSize : "14px"}}>
                  {item.price}
                </Typography>
              </div>
            ))}
            </Box>
        </DialogContent>
      </BootstrapDialog>
  )
}
