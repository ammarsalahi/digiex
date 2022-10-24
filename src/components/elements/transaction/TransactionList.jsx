import { Box,Table,TableBody,TableHead,TableCell,TableContainer,TableRow, Typography,Button } from '@mui/material'
import {SouthWest,NorthEast} from '@mui/icons-material'
import React from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import SpacialPagination from '../global/SpacialPagination';

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
  }
  const cellstyle={
    py:"32px",
    px:"32px",
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
    my:"25px"
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
   const [btntext, setbtntext] = React.useState("withdraw")
   const handleBoxbtn=(props)=>(event)=>{
      setbtntext(props);
   }
  return (
    <div>
      <Box>
        <Box className='d-flex justify-content-between' sx={{px:"32px"}}>
          <Typography component="div" variant="p" className='transaction-header'>
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
        <Box className='row maincontent'>
          <TableContainer>
            <Table sx={{ minWidth: 500}} size="small" aria-label="a dense table">
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
                        sx={{fontSize:"13px"}}>
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
        <div className='d-flex justify-content-center' dir="ltr">
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
