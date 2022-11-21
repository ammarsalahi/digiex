import React from 'react'
import { Box, Typography, Toolbar, AppBar, IconButton, Badge,ListItemText, MenuItem, Menu } from '@mui/material'
import { Close, ExpandMore } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import { ReactComponent as Notify } from '../../../img/icons/notification.svg';
import { ReactComponent as LOGO } from '../../../img/icons/logo-fa.svg';
import { ReactComponent as USER } from '../../../img/icons/Group 7.svg';
import MenuIcon from '@mui/icons-material/menu'
import Svg from '../../utils/Svgs';
import { useDispatch ,useSelector} from 'react-redux';
import {logoutAction,profilelogAction} from '../redux/actions'
import Api from '../ApiConfig/Api';
import { ACCOUNT_PROFILE,LOGOUT } from '../ApiConfig/Endpoints';
import {authpost} from '../ApiConfig/ApiHeaders';

const appbarstyle = {
  backgroundColor: "rgba(255, 255, 255, 1)",
  maxHeight: '73px',
  minHeight: '73px',
  borderBottom: "1px solid #cbe4eb",
  pt: "5px"
}
const menistyle={
  mt: "4px", borderRadius: "8px", width: "165px", cursor: "pointer" ,
}


export default function Navbar({ isSide, LoadSide, LoadMobile}) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {auth}=useSelector(state=>state.authtoken);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userdata,setuserdata]=React.useState({
    level:"",
    fullname:""
  })
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  


  const goLogin = (event) => {
    Api.delete(LOGOUT,{
      headers:authpost(auth)
    }).then(res=>{
       if(res.data.statusCode===200){
        localStorage.clear()
        event.preventDefault()
        navigate('/login')
       }
    });
  }
  const getLevel=(level)=>{
    if(level===1){
        return "کاربر برنزی";
    }else if(level===2){
        return "کاربر نقره ای";
    }
    else if(level===3){
      return "کاربر طلایی";
  }else if(level===4){
      return "کاربر پلاتینیوم";
  }
  }
  const initialvalues=async()=>{
    await Api.get(ACCOUNT_PROFILE,{
      headers:authpost(auth)
    }).then(res=>{
      if(res.data.statusCode===200){
          const {fullName,userId,level} =res.data.data.result
          dispatch(profilelogAction(level,userId,fullName));
          setuserdata({
            level:level,
            fullname:fullName
          });
      }
    })
  }
  React.useEffect(()=>{
      initialvalues();
  },[])
  return (
    <Box sx={{ flexGrow: 1, direction: 'ltr', width: '100%' }}>
      <AppBar position='fixed' elevation={0} sx={appbarstyle}>
        <Toolbar>
             <div className="mobile-icon"> 
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
            <div className='menu-icon'>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="primary"
              sx={{ mr: 2}}
              onClick={LoadSide}
            >
              {isSide ? <Close fontSize="medium"  /> : <MenuIcon fontSize="medium"/>}
            </IconButton>
            </div>
          <Box sx={{ flexGrow: 1 }} className="textcenter">
            <Box component={Link} to='/'>
            <Svg Component={LOGO} className="logosize"/>
            </Box>
          </Box>
          <Box dir='rtl' className=" d-flex align-items-center" sx={{ mx: "7px", mt: "7px" }}>
            <Badge color='primary' badgeContent={5} anchorOrigin={{ vertical: 'top', horizontal: 'left', }}>
              <Svg Component={Notify} />
            </Badge>
          </Box>
            <Box className=' d-lg-block d-md-block d-sm-none d-none text-dark mx-1' onClick={handleClick} sx={menistyle}>
              <Box className="d-flex justify-content-between" >
                <Box sx={{ mr: "7px" }} className=" d-flex align-items-center">
                  <Svg Component={USER} />
                </Box>
                <ListItemText sx={{ mx: "2px" }} primary={userdata.fullname} secondary={getLevel(userdata.level)}
                  primaryTypographyProps={{ pb: "3px" }} secondaryTypographyProps={{ fontSize: "11px", color: "gold" }}
                />
                <ExpandMore style={{ color: "#a4a6b4", marginTop: "7px" }} />
              </Box>
            </Box>
          <div className='d-lg-none d-md-none d-sm-block d-block d-flex  align-items-center mt-2' >
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
