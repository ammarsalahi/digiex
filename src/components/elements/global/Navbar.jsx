import React from 'react'
import {Button,Box,Typography,Toolbar,AppBar,IconButton, Badge,List,ListItem,ListItemText,MenuItem} from '@mui/material'
import AlarmIcon from '@mui/icons-material/Notifications'
import {Person,Menu,Close,ExpandMore} from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import SidebarMobileMenu from './SidebarMobileMenu';
import { useNavigate ,Link} from 'react-router-dom';
import { ReactComponent as Notify } from '../../../img/icons/notification.svg';
import { ReactComponent as LOGO } from '../../../img/icons/logo-fa.svg';
import { ReactComponent as USER } from '../../../img/icons/Group 7.svg';
import Svg from '../../utils/Svgs';

export default function Navbar({isSide,LoadSide,LoadMobile}) {
  let navigate =useNavigate()
  const appbarstyle={
    backgroundColor:"rgba(255, 255, 255, 1)",
    maxHeight:'83px',
    minHeight:'83px',
    borderBottom: "1px solid #a4a6b4",
    pt:"10px"
  }
 
  const goLogin=(event)=>{
      navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 ,direction:'ltr',width:'100%'}}>
        <AppBar position='fixed' elevation={0}  sx={appbarstyle}>
        <Toolbar>
        <div className='d-lg-none d-sm-block d-md-none'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,color:"#0642df" }}
            onClick={LoadMobile}
          >
            <Menu sx={{color:'#0642df'}}/>
          </IconButton> 
        </div> 
        <div className='d-lg-block d-none d-sm-none d-md-block'>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={LoadSide}
          >
            {isSide ?<Close sx={{color:"#0642df"}}/>:<Menu sx={{color:'#0642df'}}/>}
          </IconButton> 
        </div>   
        
       <Typography  component={Link} to='/' sx={{ flexGrow: 1 }}>
       <Svg Component={LOGO} />
       </Typography> 
       <IconButton dir='rtl'>
        <Badge color='primary' badgeContent={5} anchorOrigin={{vertical: 'top',horizontal: 'left',}}>
         <Svg Component={Notify} />
        </Badge>
        </IconButton>
        <div className='d-none d-sm-none d-md-none d-lg-block text-dark'>
            <MenuItem onClick={goLogin} sx={{mt:"14px",borderRadius:"8px"}}>
              <Box className="d-flex justify-content-between" >
              <Svg Component={USER}/>
               <ListItemText sx={{mx:"2px"}} primary="حسین اسدزاده" secondary="کاربر طلایی" 
                primaryTypographyProps={{pb:"3px"}} secondaryTypographyProps={{fontSize:"11px",color:"gold"}}
               />
               <ExpandMore style={{color:"#a4a6b4"}}/>
              </Box> 
            </MenuItem>
        </div>
        <div className='d-lg-none d-flex'>
          <IconButton  size="small" onClick={goLogin}><Svg Component={USER} /></IconButton>
        </div>
        </Toolbar>
        {/* {isload && 
          <SidebarMobileMenu heightSize={LoadNavMobile}/>
        } */}
       
        </AppBar>
    </Box>
  )
}
