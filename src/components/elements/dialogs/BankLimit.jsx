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
import Svg from '../../utils/Svgs';
import { ArrowDownward, Wallet } from '@mui/icons-material';

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


export default function BankLimit({open,close}) {

  const [issmall, setissmall] = React.useState(false);
  const listsdata=[
    {'name':"حداقل واریز",'price':"2000,000 تومان"},
    {'name':"حداکثر واریز",'price':"50,000,000 تومان"},
    {'name':"کارمزد واریز ریالی",'price':"رایگان"},

  ]
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
        <BootstrapDialogTitle id="customized-dialog-title" onClose={close} className="borderbottom boldfont-dialog dialog-title-container ">
        محدودیت های پرداخت از طریق درگاه بانکی
         </BootstrapDialogTitle>
        <DialogContent className='mycontainer'>
          <Box className="backgroundClr" sx={{borderRadius:"14px",p:"16px"}}>
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
          ۱. بنابر محدودیت های بانکی اعمال شده از جانب بانک مرکزی ، با کد ملی احراز شده درسایت، در شبانه روز میتواند حداکثر مبلغ ۱۰۰،۰۰۰،۰۰۰ تومان از طریق درگاه واریز نماید. (این مبلغ میتواند از چندین کارت بانکی که به نام شما میباشد به درگاه واریز گردد) ۲. برای خرید مبالغ بالای ۱۰۰،۰۰۰،۰۰۰ تومان در روز، میتوانید از قسمت کیف پول، به کمک قابلیت "پرداخت با شناسه" میتوانید اقدام به شارژ کیف پول خود از طریق پایا، ساتنا، حساب به حساب و همینطور از طریق ابزار‌های موبایل بانک، اینترنت بانک، دستگاه‌های ATM و ابزار‌های متعدد دیگر نمایید. (حتما شناسه واریز باید در فیش درج شود) ۳. برای تسهیل خرید و فروش خود در آینده، میتوانید بدون برداشت ریال از کیف پول خود، با سرعت بیشتری اقدام به پرداخت های مجوه معاملات نمایید. ۴. چنانچه هنگام واریز، شناسه واریز را در فیش خود ثبت نکنید، پس از کسر کارمزد، وجه به حساب واریز کننده استرداد داده خواهد شد. ۵. واریز وجه از روش‌هایی مانند انتقال چک به حساب، واریز پول نقد، چک بین بانکی و ... منجر به استرداد وجه به حساب واریزکننده خواهد شد. ۶. چنانچه از حساب دیگری بجز حساب متصل به شناسه اقدام به واریز وجه نمایید، استرداد وجه به حساب شما، پس از ۷۲ساعت و کسر کارمزد پایا انجام خواهد شد. ** چنانچه در هر مرحله سوالی داشتید، میتوانید با کارشناسان ما با شماره 02128423915 تماس حاصل فرمایید. کارشناسان ما ۲۴ ساعته و ۷ روز هفته آماده پاسخگویی به شما کاربران گرامی هستند.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
  )
}
