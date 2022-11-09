import { Typography, Box } from '@mui/material'
import React from 'react'
import svgsicon from '../../../img/icons/copy-clipboard.svg'

export default function HeaderInfo({ userdata, svgsDash }) {
    const infobox = {
        backgroundColor: "#424BFB"
    }
    const minibox = {
        padding: " 16px 0px",
        fontSize: "12px",
        textAlign: "left"
    }
    const headtext = {
        color: "#fff",
        fontSize: "14px"
    }
    const typecss = {
        mt: "14px",
        color: "#fff",
        fontSize: "16px"
    }
    return (
        <Box sx={infobox} className="row d-flex justify-content-center mycontainer " >
            <Box className="row justify-content-between align-items-center">
                <Box className="col-lg-8 col-12 g-0" sx={minibox} >
                    <Box className="row">
                        <Box className="col-lg-8 col-12">
                            <Box className="row">
                                <Box className="col-4 box-data">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        کد دعوت پیشفرض
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        {/* {userdata.withdraw} */}
                                        {/* <img src={svgsicon} fill="#fff" alt="" /> */}
                                        <span>
                                            BFOHBFFBFB
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="col-7 box-data">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        لینک دعوت پیشفرض
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        {/* {userdata.deposit} */}
                                        <span>
                                            https://mui.com/material-ui/material-icons/
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col-lg-4 col-12">
                            <Box className="row">
                                <Box className="col-6">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        سهم شما
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        {/* {userdata.values} */}
                                        <span>
                                            10%
                                        </span>
                                    </Typography>
                                </Box>
                                <Box className="col-6">
                                    <Typography variant="p" component="div" sx={headtext}>
                                        سهم دوست شما
                                    </Typography>
                                    <Typography variant="p" component="div" sx={typecss}>
                                        {/* {userdata.distance} */}
                                        <span>
                                            10%
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
