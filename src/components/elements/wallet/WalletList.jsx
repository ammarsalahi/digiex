import React from 'react'
import {Box,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Typography,Button} from '@mui/material'
import {ThemeProvider, createTheme} from '@mui/material/styles';

export default function WalletList({rows}) {
  const rowstyle={
    '&:last-child td, &:last-child th': { border: 0 },
    borderTop:"1px solid #a4a6b4",
  }
  const headstyle={
    py:"15px",
    fontSize: "14px !important",
    textAlign:"center",
    color: "rgba(164, 166, 180, 1)",
  }
  const cellstyle={
    py:"18px",
    fontSize: "14px !important",
    textAlign:"center"
  }
  const darkbtnstyle={
    height: "35px",
    width: "77px",
    borderRadius:"7px",
  }
  const boxbtnstyle={
    border:"1px solid #a4a6b4",
    borderRadius:"8px",
    height:"48px",
    width:"153px",
    px:"5px",
    py:"5px",
    display:"flex",
    my:"2%"
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
    <Box sx={{pt:"18px",px:"24px"}}>
      <div className='d-flex justify-content-between'>
        <Typography component="div" variant="p" className='transaction-header'>
          واریز و برداشت های اخیر
        </Typography>
        <ThemeProvider theme={theme}>
        <Box sx={boxbtnstyle}>
            <Button variant={btntext==="deposit"?"contained":"standard"} 
              sx={btntext==="deposit"?darkbtnstyle:{}} 
              onClick={handleBoxbtn("deposit")}
            >تومان</Button>
            <Button 
              variant={btntext==="withdraw"?"contained":"standard"} 
              sx={btntext==="withdraw"?darkbtnstyle:{}} 
              onClick={handleBoxbtn("withdraw")}
            >ارزی</Button>
        </Box>
        </ThemeProvider>
        
      </div>
    <Box className='row maincontent'>
    <TableContainer sx={{px:"15px",pb:"14px"}}>
      <Table sx={{ minWidth: 500}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={headstyle}>تاریخ</TableCell>
            <TableCell sx={headstyle}>نام ارز</TableCell>
            <TableCell sx={headstyle}>واریز</TableCell>
            <TableCell sx={headstyle}>تعداد</TableCell>
            <TableCell sx={headstyle}>آدرس ولت مبدا</TableCell>
            <TableCell sx={headstyle}>TXID</TableCell>
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
              <TableCell  sx={cellstyle}>{row.name}</TableCell>
              <TableCell sx={cellstyle}>{row.operation}</TableCell>
              <TableCell sx={cellstyle}>{row.count}</TableCell>
              <TableCell sx={cellstyle}>{row.address}</TableCell>
              <TableCell sx={cellstyle}>{row.txid}</TableCell>
              <TableCell sx={cellstyle}>{row.station}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>
  )
}
