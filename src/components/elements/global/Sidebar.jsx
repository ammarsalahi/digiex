import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Svg from '../../utils/Svgs';
import {ReactComponent as AuthIcon} from '../../../img/menu-icon/Auth.svg';
import {ReactComponent as AssistIcon} from '../../../img/menu-icon/Assist.svg';
import {ReactComponent as BankCardIcon} from '../../../img/menu-icon/BankCard.svg';
import {ReactComponent as DashboardIcon} from '../../../img/menu-icon/Dashboard.svg';
import {ReactComponent as HistoryIcon} from '../../../img/menu-icon/History.svg';
import {ReactComponent as ShoppingIcon} from '../../../img/menu-icon/Shopping.svg';
import {ReactComponent as TransactionsIcon} from '../../../img/menu-icon/Transactions.svg';
import {ReactComponent as WalletIcon} from '../../../img/menu-icon/Wallet.svg';
import {Link,useLocation} from 'react-router-dom';

export default function Sidebar() {
  const location=useLocation();
  const menuItems = [
    { name: 'داشبورد', address: '/main-dashboard', icon: DashboardIcon },
    { name: 'خریدوفروش', address: '/', icon: ShoppingIcon },
    { name: 'کیف‌پول', address: '/wallet', icon: WalletIcon },
    { name: 'تاریخچه معاملات', address: '/orderhistory', icon: HistoryIcon },
    { name: 'تراکنش‌های‌مالی', address: '/transactions', icon: TransactionsIcon },
    { name: 'کارت‌های‌بانکی', address: '/bankaccount', icon: BankCardIcon },
    { name: 'همکاری‌در‌فروش', address: '/', icon: AssistIcon },
    { name: 'احراز‌هویت', address: '/verification', icon: AuthIcon },


  ]
  return (
    <Box style={{ width: '100%' }}>
      <List component="nav" sx={{marginTop:"46.5px",px:"4%"}} aria-label="main mailbox folders">
        {menuItems.map((item, idx) => (
          <ListItem
            button 
            component={Link}
            to={item.address}
            key={idx}
            sx={{borderRadius:"8px",my:"1%"}}
            selected={location.pathname === item.address}
          >
            <ListItemIcon>
              <Svg Component={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.name} className={location.pathname === item.address ? "mini-btn-active" : "text-dark"} />
          </ListItem>
        ))}
      </List>

    </Box>
  )
}
