import { Typography, Box } from '@mui/material'
import React from 'react'
import svgsicon from '../../../img/logos/level-star.svg'
import { useSelector } from 'react-redux'
import {LOYALTY} from '../ApiConfig/Endpoints';
import Api from '../ApiConfig/Api';
import {authpost} from '../ApiConfig/ApiHeaders';

export default function HeaderInfo({ userdata, svgsDash }) {
  const infobox = {
    height: "auto",
    width: "100%",
    backgroundColor: '#e8ebef',
    borderRadius: "8px",
  }
  const minibox = {
    padding: " 16px 0px",
    fontSize: "12px",
    textAlign: "center"
  }
  const headtext = {
    color: "rgba(164, 166, 180, 1)",
    fontSize:"12px"

  }
  const {fullname,level}=useSelector(state=>state.profile)
  const {auth}=useSelector(state=>state.authtoken);
  const [userdatas,setUserdatas]=React.useState({})
  const getLevel=(levels)=>{
    if(levels===1){
        return "کاربر برنزی";
    }else if(levels===2){
        return "کاربر نقره ای";
    }
    else if(levels===3){
      return "کاربر طلایی";
  }else if(levels==="4"){
      return "کاربر پلاتینیوم";
  }
  }
   const get_loyality=async()=>{
     await Api.get(LOYALTY,{
      headers:authpost(auth)
     }).then(res=>{
      setUserdatas(res.data.data.result)
     })
   }

  React.useEffect(()=>{
     get_loyality()
  },[]);

  return (
    <div className="row d-flex justify-content-center mycontainer backgroundClr" >
      <Box sx={infobox} className="row justify-content-between align-items-center">
        <Box className="col-lg-2 col-12 g-0" sx={minibox}>
          <div className='d-flex justify-content-center align-items-center'>
            {svgsDash ? <div className='ms-2'>
              <img src={svgsicon} alt="star-icon" />
            </div> : <div></div>}
            <div>
              <Typography variant="p" component="div">
                {userdatas.fullName}
              </Typography>
              <Typography variant="p" component="div" className='text-end py-1' sx={{ color: "#e9ab00" }}>
                {getLevel(userdatas.level)}
              </Typography>
            </div>
          </div>
        </Box>
      
        <Box className="col-lg-8 col-12 g-0" sx={minibox} >
          <Box className="row">
            <Box className="col-lg-6 col-12">
                <Box className="row">
                <Box className="col-6 box-data">
                  <Typography variant="p" component="div" sx={headtext}>
                    واریز ریال (روزانه)
                  </Typography>
                  <Typography variant="p" component="div" >
                    {userdatas.dailyWithdraw}
                  </Typography>
                </Box>
                <Box className="col-6 box-data">
                  <Typography variant="p" component="div" sx={headtext}>
                    برداشت ریال (روزانه)
                  </Typography>
                  <Typography variant="p" component="div" >
                    {userdatas.dailyDeposit}
                  </Typography>
                </Box>
                </Box>
            </Box>
            <Box className="col-lg-6 col-12">
            <Box className="row">
            <Box className="col-6">
              <Typography variant="p" component="div" sx={headtext}>
                حجم معاملات (30 روز)
              </Typography>
              <Typography variant="p" component="div" >
                {userdatas.dealVolume}
              </Typography>
            </Box>
            <Box className="col-6">
              <Typography variant="p" component="div" sx={headtext}>
                فاصله تا سطح نقره ای
              </Typography>
              <Typography variant="p" component="div" >
                {userdatas.toNextLevel}
              </Typography>
            </Box>
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
