import { Typography, Box } from '@mui/material'
import React from 'react'
import svgsicon from '../../../img/logos/level-star.svg'

export default function HeaderInfo({ userdata, svgsDash }) {
  const infobox = {
    minHeight: "110px",
    width: "100%",
    backgroundColor: '#e8ebef',
    borderRadius: "8px",
  }
  const minibox = {
    padding: "32px",
    fontSize: "12px",
    textAlign: "center"
  }
  const headtext = {
    color: "rgba(164, 166, 180, 1)",
    mb: 1,
    fontSize:"12px"

  }

  return (
    <div className="row d-flex justify-content-center bg-light" style={{ padding: "32px", paddingTop: "52px" }} >
      <Box sx={infobox} className="row justify-content-between">
        <Box className="col-lg-3 col-12" sx={minibox}>
          <div className='d-flex justify-content-center'>
            {svgsDash ? <div className='ms-2'>
              <img src={svgsicon} alt="star-icon" />
            </div> : <div></div>}
            <div>
              <Typography variant="p" component="div">
                {userdata.name}
              </Typography>
              <Typography variant="p" component="div" className='text-end py-1' sx={{ color: "#e9ab00" }}>
                {userdata.level}
              </Typography>
            </div>
          </div>
        </Box>
      
        <Box className="col-lg-8 col-12" sx={minibox} >
          <Box className="row">
            <Box className="col-lg-6 col-12">
                <Box className="row" sx={{py:"3%"}}>
                <Box className="col-6 ">
                  <Typography variant="p" component="div" sx={headtext}>
                    واریز ریال (روزانه)
                  </Typography>
                  <Typography variant="p" component="div" >
                    {userdata.withdraw}
                  </Typography>
                </Box>
                <Box className="col-6">
                  <Typography variant="p" component="div" sx={headtext}>
                    برداشت ریال (روزانه)
                  </Typography>
                  <Typography variant="p" component="div" >
                    {userdata.deposit}
                  </Typography>
                </Box>
                </Box>
            </Box>
            <Box className="col-lg-6 col-12">
            <Box className="row"  sx={{py:"3%"}}>
            <Box className="col-6">
              <Typography variant="p" component="div" sx={headtext}>
                حجم معاملات (۳۰ روز)
              </Typography>
              <Typography variant="p" component="div" >
                {userdata.values}
              </Typography>
            </Box>
            <Box className="col-6">
              <Typography variant="p" component="div" sx={headtext}>
                فاصله تا سطح نقره ای
              </Typography>
              <Typography variant="p" component="div" >
                {userdata.distance}
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
