import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {  Box,List,ListItem,ListItemIcon,ListItemText} from '@mui/material';
import { ReactComponent as LOGO } from '../../../img/icons/logo-fa.svg';
import Svg from '../../utils/Svgs';
import {Link,useLocation} from 'react-router-dom';
import {ReactComponent as AuthIcon} from '../../../img/menu-icon/Auth.svg';
import {ReactComponent as AssistIcon} from '../../../img/menu-icon/Assist.svg';
import {ReactComponent as BankCardIcon} from '../../../img/menu-icon/BankCard.svg';
import {ReactComponent as DashboardIcon} from '../../../img/menu-icon/Dashboard.svg';
import {ReactComponent as HistoryIcon} from '../../../img/menu-icon/History.svg';
import {ReactComponent as ShoppingIcon} from '../../../img/menu-icon/Shopping.svg';
import {ReactComponent as TransactionsIcon} from '../../../img/menu-icon/Transactions.svg';
import {ReactComponent as WalletIcon} from '../../../img/menu-icon/Wallet.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
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
              left: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon color="primary" fontSize="large"/>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


export default function AddCardBank({open,close}) {

  const [issmall, setissmall] = React.useState(false);
  const location=useLocation();

  const menuItems=[
      { name: 'داشبورد', address: '/dashboard', icon: DashboardIcon },
      { name: 'خریدوفروش', address: '/buy', icon: ShoppingIcon },
      { name: 'کیف‌پول', address: '/wallet', icon: WalletIcon },
      { name: 'تاریخچه‌سفارشات', address: '/orderhistory', icon: HistoryIcon },
      { name: 'تراکنش‌های‌مالی', address: '/transactions', icon: TransactionsIcon },
      { name: 'کارت‌های‌بانکی', address: '/bankaccount', icon: BankCardIcon },
      { name: 'همکاری‌در‌فروش', address: '/', icon: AssistIcon },
      { name: 'احراز‌هویت', address: '/verification', icon: AuthIcon },


    ]
   
  return (
      <BootstrapDialog
       fullScreen
        sx={{direction:'ltr'}}
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        <BootstrapDialogTitle  id="customized-dialog-title" onClose={close} className="borderbottom">
          <Box className="d-flex justify-content-center align-items-center">
            <Typography  component={Link} to='/' className="textcenter pt-1 pb-2">
           <Svg Component={LOGO} style={{ height: "20px",textAlign:'center',marginTop:'5px' }} />
          </Typography>
          </Box>
        </BootstrapDialogTitle>
        <DialogContent  sx={{width:"100%"}} className='mycontainer'>
            <Box sx={{ width: '100%'}}>
                <List component="nav" aria-label="main mailbox folders" sx={{py:"16px"}}>
                    {menuItems.map((item, idx) => (
                    <ListItem
                        button 
                        component={Link}
                        to={item.address}
                        key={idx}
                        sx={{borderRadius:"8px",my:"1%"}}
                        selected={location.pathname === item.address}
                        onClick={close}
                    >
                        <ListItemIcon>
                        <Svg Component={item.icon} />
                        </ListItemIcon>
                        <ListItemText primary={item.name} className={location.pathname === item.address ? "mini-btn-active" : "text-dark"} />
                    </ListItem>
                    ))}

                </List>
            </Box>
        </DialogContent>
      </BootstrapDialog>
  )
}
