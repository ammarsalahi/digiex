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
import {  Box ,Checkbox, ListItem, ListItemIcon, ListItemText,List,Card, CardActions} from '@mui/material'
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

export default function IndentityBuy({open,close}) {

  const [issmall, setissmall] = React.useState(false);
  const [opt,setOpt]=React.useState("");

  const [get, setget] = React.useState("");
  const [put,setput]=React.useState("");
   const listsdata=[
     {'name':"حداقل واریز",'price':"1,000,000 تومان"},
     {'name':"حداکثر واریز",'price':"3,000,000,000 تومان"},
     {'name':"کارمزد واریز ریالی به ازای هر 1 میلیون تومان",'price':"5,000 تومان"},

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
      fullScreen={issmall?true:false}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom">
           پرداخت با شناسه       
         </BootstrapDialogTitle>
        <DialogContent sx={{width:"100%"}}>
          <Box className="bg-light" sx={{borderRadius:"8px",p:"2%",mt:"3%"}}>
            {listsdata.map((item, idx) => (
                <div className='d-flex justify-content-between info-list' key={idx}>
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
          <Typography variant="p" component="div" fontSize="13px">
          ۱. برای خرید مبالغ بالای ۱۰۰،۰۰۰،۰۰۰ تومان در روز، میتوانید از قسمت کیف پول، به کمک قابلیت "پرداخت با شناسه" میتوانید اقدام به شارژ کیف پول خود از طریق پایا، ساتنا، حساب به حساب و همینطور از طریق ابزار‌های موبایل بانک، اینترنت بانک، دستگاه‌های ATM و ابزار‌های متعدد دیگر نمایید. (حتما شناسه واریز باید در فیش درج شود) ۲. چنانچه هنگام واریز، شناسه واریز را در فیش خود ثبت نکنید، پس از کسر کارمزد، وجه به حساب واریز کننده استرداد داده خواهد شد. ۳. واریز وجه از روش‌هایی مانند انتقال چک به حساب، واریز پول نقد، چک بین بانکی و ... منجر به استرداد وجه به حساب واریزکننده خواهد شد. ۴. چنانچه از حساب دیگری بجز حساب متصل به شناسه اقدام به واریز وجه نمایید، استرداد وجه به حساب شما، پس از ۷۲ساعت و کسر کارمزد پایا انجام خواهد شد. چنانچه در هر مرحله سوالی داشتید، میتوانید با کارشناسان ما با شماره 02128423915 تماس حاصل فرمایید. کارشناسان ما ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی به شما کاربران گرامی هستند.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
  )
}
