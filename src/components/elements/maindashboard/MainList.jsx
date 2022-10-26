import React from 'react'
import {Box,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Typography,Button} from '@mui/material'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { ArrowBackIos } from '@mui/icons-material'

export default function MainList({rows}) {
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
    py:"24px",
    fontSize: "14px !important",
    textAlign:"center"
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
    <Box sx={{pt:"18px"}}>
      <Box className='d-flex justify-content-between boldfont' sx={{p:"32px"}} >
        <Typography component="div" variant="p">
             لیست معاملات    
         </Typography>
        <ThemeProvider theme={theme}>
        <Box>
           <Button sx={{fontSize:"14px",color:"#000"}}endIcon={<ArrowBackIos/>} >
                مشاهده بیشتر 
            </Button>  
        </Box>
        </ThemeProvider>
        
      </Box>
    <Box className='row maincontent'>
    <TableContainer sx={{px:"15px",pb:"14px"}}>
      <Table sx={{ minWidth: 500}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={headstyle}>تاریخ</TableCell>
            <TableCell sx={headstyle}>نام ارز</TableCell>
            <TableCell sx={headstyle}>نوع عملیات</TableCell>
            <TableCell sx={headstyle}>تعداد</TableCell>
            <TableCell sx={headstyle}>نرخ</TableCell>
            <TableCell sx={headstyle}>مجموع (تومان)</TableCell>
            <TableCell sx={headstyle}>کارمزد</TableCell>
            <TableCell sx={headstyle}>کد پیگیری</TableCell>
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
              <TableCell sx={cellstyle}>{row.price}</TableCell>
              <TableCell sx={cellstyle}>{row.sum}</TableCell>
              <TableCell sx={cellstyle}>{row.subsit}</TableCell>
              <TableCell sx={cellstyle}>{row.refcode}</TableCell>
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
