import React from 'react'
import { Box, Typography, Toolbar, AppBar, IconButton, Badge,ListItemText, MenuItem, Menu } from '@mui/material'
import { Close, ExpandMore } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import { ReactComponent as Notify } from '../../../img/icons/notification.svg';
import { ReactComponent as LOGO } from '../../../img/icons/logo-fa.svg';
import { ReactComponent as USER } from '../../../img/icons/Group 7.svg';
import MenuIcon from '@mui/icons-material/menu'
import Svg from '../../utils/Svgs';

export default function Navbar({ isSide, LoadSide, LoadMobile}) {
  let navigate = useNavigate()
  const appbarstyle = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    maxHeight: '73px',
    minHeight: '73px',
    borderBottom: "1px solid #cbe4eb",
    pt: "5px"
  }
  const menistyle={
    mt: "10px", borderRadius: "8px", width: "165px", cursor: "pointer" ,
    display:{
      xs:'none',md:"block",lg:"block",xl:"block",
    }
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [ismoblemenu,setIsmobilemenu]=React.useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goLogin = (event) => {
    navigate('/login')
  }

  const showMenuIcon=()=>{
    if(window.innerWidth < 993 && window.innerWidth > 768){
       setIsmobilemenu(false);
    }else{
      setIsmobilemenu(true);
    }
  }
  React.useEffect(()=>{
    showMenuIcon()
    window.addEventListener('resize',showMenuIcon,false);

  },[ismoblemenu]);


  return (
    <Box sx={{ flexGrow: 1, direction: 'ltr', width: '100%' }}>
      <AppBar position='fixed' elevation={0} sx={appbarstyle}>
        <Toolbar>
          {ismoblemenu?
             <div className="d-lg-none"> 
              <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="primary"
              sx={{ mr: 2, }}
              onClick={LoadMobile}
              >
              <MenuIcon  fontSize="large" />
            </IconButton>
            </div>
            :<IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="primary"
              sx={{ mr: 2,display:{xs:'none',md:"block",lg:"none",xl:"none"} }}
              onClick={LoadSide}
            >
              {isSide ? <Close fontSize="medium"  /> : <MenuIcon fontSize="medium"/>}
            </IconButton>}
          <Typography component={Link} to='/' sx={{ flexGrow: 1 }} className="textcenter">
            <Svg Component={LOGO} className="logosize"/>
          </Typography>
          <Box dir='rtl' className=" d-flex align-items-center" sx={{ mx: "7px", mt: "7px" }}>
            <Badge color='primary' badgeContent={5} anchorOrigin={{ vertical: 'top', horizontal: 'left', }}>
              <Svg Component={Notify} />
            </Badge>
          </Box>
            <Box className='text-dark mx-1' onClick={handleClick} sx={menistyle}>
              <Box className="d-flex justify-content-between" >
                <Box sx={{ mr: "7px" }} className=" d-flex align-items-center">
                  <Svg Component={USER} />
                </Box>
                <ListItemText sx={{ mx: "2px" }} primary="حسین اسدزاده" secondary="کاربر طلایی"
                  primaryTypographyProps={{ pb: "3px" }} secondaryTypographyProps={{ fontSize: "11px", color: "gold" }}
                />
                <ExpandMore style={{ color: "#a4a6b4", marginTop: "7px" }} />
              </Box>
            </Box>
          <div className='d-lg-none d-md-none d-flex  align-items-center mt-2' >
            <IconButton size="small" onClick={goLogin}><Svg Component={USER} /></IconButton>
          </div>
          <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
                sx:{width:"167px",padding:'8px 0px'}
              }}
            >
              <MenuItem onClick={goLogin}>خروج</MenuItem>
            </Menu>
            
        </Toolbar>
      </AppBar>
    </Box>
  )
}
