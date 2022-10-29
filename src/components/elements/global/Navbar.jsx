import React from 'react'
import { Box, Typography, Toolbar, AppBar, IconButton, Badge,ListItemText, MenuItem, Menu } from '@mui/material'
import { Close, ExpandMore } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import { ReactComponent as Notify } from '../../../img/icons/notification.svg';
import { ReactComponent as LOGO } from '../../../img/icons/logo-fa.svg';
import { ReactComponent as USER } from '../../../img/icons/Group 7.svg';
import MenuIcon from '@mui/icons-material/menu'
import Svg from '../../utils/Svgs';

export default function Navbar({ isSide, LoadSide, LoadMobile }) {
  let navigate = useNavigate()
  const appbarstyle = {
    backgroundColor: "rgba(255, 255, 255, 1)",
    maxHeight: '73px',
    minHeight: '73px',
    borderBottom: "1px solid #cbe4eb",
    pt: "5px"
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goLogin = (event) => {
    navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1, direction: 'ltr', width: '100%' }}>
      <AppBar position='fixed' elevation={0} sx={appbarstyle}>
        <Toolbar>
          <div className='d-lg-none d-sm-block d-md-none'>
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
          <div className='d-lg-block d-none d-sm-none d-md-block'>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="primary"
              sx={{ mr: 2 }}
              onClick={LoadSide}
            >
              {isSide ? <Close fontSize="medium"  /> : <MenuIcon fontSize="medium"/>}
            </IconButton>
          </div>

          <Typography component={Link} to='/' sx={{ flexGrow: 1 }}>

            <Svg Component={LOGO} style={{ height: "28px" }} />
          </Typography>
          <Box dir='rtl' className=" d-flex align-items-center" sx={{ mx: "7px", mt: "7px" }}>
            <Badge color='primary' badgeContent={5} anchorOrigin={{ vertical: 'top', horizontal: 'left', }}>
              <Svg Component={Notify} />
            </Badge>
          </Box>
          <div className='d-none d-sm-none d-md-none d-lg-block text-dark mx-1'>
            <Box onClick={handleClick} sx={{ mt: "10px", borderRadius: "8px", width: "165px", cursor: "pointer" }}>
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
          </div>
          <div className='d-lg-none d-flex  align-items-center mt-2' >
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
