import { Box,Table,TableBody,TableHead,TableCell,TableContainer,TableRow, Typography,Button } from '@mui/material'
import {SouthWest,NorthEast} from '@mui/icons-material'
import React from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import SpacialPagination from '../global/SpacialPagination';
import Api from '../ApiConfig/Api';
import { authpost } from '../ApiConfig/ApiHeaders';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function TransactionList({rows}) {
  const rowstyle={
    '&:last-child td, &:last-child th': { border: 0 },
    borderTop:"1px solid #a4a6b4",
  }
  const headstyle={
    py:"24px",
    fontSize: "14px !important",
    textAlign:"center",
    color: "rgba(164, 166, 180, 1)",
    minWidth:"120px",
    maxWidth:"150px"
  }
  const cellstyle={
    py:"15px",
    px:"15px",
    fontSize: "14px !important",
    textAlign:"center"
  }
  const boxbtnstyle={
    border:"1px solid #a4a6b4",
    borderRadius:"10px",
    height:"48px",
    width:"153px",
    px:"5px",
    py:"5px",
    display:"flex",
  }
 
  const darkbtnstyle={
    height: "35px",
    width: "77px",
    borderRadius:"7px",
  }
 

 
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0f1628',
      },
    },
  });
   const [btntext, setbtntext] = React.useState("withdraw");
   const {auth}=useSelector(state=>state.authtoken);

   const handleBoxbtn=(props)=>(event)=>{
      setbtntext(props);
   }

   
  return (
    <div>
      <Box>
        <Box className='d-flex justify-content-between header-title'>
          <Typography className='boldfont' component="div" variant="p" sx={{pt:"10px"}}>
           تراکنش های مالی
          </Typography>
          <ThemeProvider theme={theme}>
          <Box sx={boxbtnstyle}>
              <Button variant={btntext==="deposit"?"contained":"standard"} 
                sx={btntext==="deposit"?darkbtnstyle:{}} 
                onClick={handleBoxbtn("deposit")}
              >واریز</Button>
              <Button 
                variant={btntext==="withdraw"?"contained":"standard"} 
                sx={btntext==="withdraw"?darkbtnstyle:{}} 
                onClick={handleBoxbtn("withdraw")}
              >برداشت</Button>
          </Box>
          </ThemeProvider>
          
        </Box>
        <Box className='row'>
          <TableContainer class="table-cnt overflow-auto" sx={{px:"24px"}}>
            <Table size="small" >
              <TableHead>
                <TableRow>
                  <TableCell sx={headstyle}>تاریخ</TableCell>
                  <TableCell sx={headstyle}>نوع‌عملیات</TableCell>
                  <TableCell sx={headstyle}>شماره‌حساب</TableCell>
                  <TableCell sx={headstyle}>مبلغ</TableCell>
                  <TableCell sx={headstyle}>وضعیت</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row,idx) => (
                  <TableRow
                    key={idx}
                    sx={rowstyle}
                  >
                    <TableCell sx={cellstyle}>{row.date}</TableCell>
                    <TableCell  sx={cellstyle}>
                      {row.operation==="withdraw"? <SouthWest sx={{color:"#68c888"}}/>:<NorthEast sx={{color:"#e43737"}}/>}
                    </TableCell>
                    <TableCell sx={cellstyle}>{row.bank}</TableCell>
                    <TableCell sx={cellstyle}>{row.price}</TableCell>

                    <TableCell sx={cellstyle}>
                      <div className='d-flex justify-content-center'>
                        <Box className={row.station==="ثبت شده"?'green-state':(row.station==='درحال پردازش'?'yellow-state':"red-state") }
                        sx={{fontSize:"13px",pt:1}}>
                          {row.station} 
                        </Box>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
        <div className='d-flex justify-content-center mb-3' dir="ltr">
            <SpacialPagination 
              data={rows} 
              buttonConst={3}
              contentPerPage={1}
              siblingCount={1}
            />
        </div>
      </Box>
    </div>
  )
}
