import React from 'react'
import {Box,IconButton} from '@mui/material';

export default function SpacialPagination({PageCount,PageNumber}) {
   const [activebtn, setactivebtn] = React.useState(PageNumber)
    const pagebtnactive={
        height: "35px",
        width: "35px",
        borderRadius:"8px",
        fontSize:'14px',
        color:"#fff",
        backgroundColor:"#0f1628",
        '&:hover': {
          backgroundColor: "#0f1628",
          color:"#fff"
       },
      }
      const pagebtn={
        height: "30px",
        width: "30px",
        borderRadius:"7px",
        fontSize:'14px',
        my:"3px",
        color:"#000",
      }
      const boxpagetyle={
        border:"1px solid #a4a6b4",
        borderRadius:"8px",
        height:"48px",
        width:"165px",
        px:"5px",
        py:"5px",
        display:"flex",
        my:"10px"
      }

    const handlePageClick=(props)=>(event)=>{
        setactivebtn(props)
    }  
  return (
    <Box sx={boxpagetyle}>
              <IconButton
                sx={activebtn===1?pagebtnactive:pagebtn}
                onClick={handlePageClick(1)}
              >1</IconButton>
              <IconButton 
                sx={activebtn===2?pagebtnactive:pagebtn}
                onClick={handlePageClick(2)}
              >2</IconButton>
              <IconButton
                sx={activebtn===3?pagebtnactive:pagebtn}
                onClick={handlePageClick(3)}
              >3</IconButton>
              <IconButton 
                disabled={true}
                sx={activebtn===4?pagebtnactive:pagebtn}
                onClick={handlePageClick(4)}
              >...</IconButton>
                <IconButton 
                sx={activebtn===6?pagebtnactive:pagebtn}
                onClick={handlePageClick(6)}
              >6</IconButton>
    </Box>
  )
}
