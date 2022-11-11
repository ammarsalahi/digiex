import React from 'react'
import { Typography,Box } from '@mui/material'
import { ArrowDownward } from '@mui/icons-material'

export default function UploadButton({text,click}) {
    const uploadbtnstyle={
        height:"49px",
        width:"162px",
        backgroundColor: "#424BFB",
        color:"#fff",
        borderRadius:"30px",
        fontSize:"12px",      
        '&:hover': {
            mouse:"pointer"
        },  
    }
    const iconbtnstyle={
        backgroundColor:"#fff",
        color:"#424BFB",
        width:"38px",
        height:"38px",
        borderRadius:'50%',
        m:"6px",
        pt:"7px",
        textAlign:"center"
    }
  return (
    <Box type="button" className='d-flex justify-content-between' sx={uploadbtnstyle} onClick={click}>
        <Typography fontSize="14px" sx={{p:"14px"}}>
            {text}
         </Typography>
        <Box sx={iconbtnstyle}>
            <ArrowDownward />
        </Box>
    </Box>
  )
}
