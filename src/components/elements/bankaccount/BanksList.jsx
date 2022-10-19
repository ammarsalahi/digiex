import React from 'react'
import {Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button, IconButton} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import AddCardBank from '../dialogs/AddCardBank';
import Svg from '../../utils/Svgs';
import {ReactComponent as AddCircle} from '../../../img/icons/circle-add.svg';
import {ReactComponent as Trash} from '../../../img/icons//trash.svg';

export default function BanksList({rows,opendialog}) {
  
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
    py:"15px",
    fontSize: "14px !important",
    textAlign:"center"
  }
  const cardbtnstyle={
    backgroundColor:'#e8ebef',
    fontSize:"13px",
    color: "#000",
    borderRadius:'8px',
    '&:hover': {
      backgroundColor:'#e8ebef',
      color: "#000",
   },
   px:"90px",
   py:"50px",
   mb:"15%",
   mt:"20px",
  }
  return (
    <Box className='row maincontent'>
    <TableContainer sx={{px:"15px"}}>
      <Table sx={{ minWidth: 500}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={headstyle}>بانک</TableCell>
            <TableCell sx={headstyle}>شماره‌کارت</TableCell>
            <TableCell sx={headstyle}>شماره‌شبا</TableCell>
            <TableCell sx={headstyle}>وضعیت</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={rowstyle}
            >
              <TableCell sx={cellstyle} >
                 <Svg Component={row.icon} style={{marginLeft:"2%"}}/>
                 {row.bank}
                </TableCell>
              <TableCell  sx={cellstyle}>{row.cardnumber}</TableCell>
              <TableCell sx={cellstyle}>{row.sheba}</TableCell>
              <TableCell sx={cellstyle}>
                <IconButton>
                  <Svg Component={Trash} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Box sx={{px:'5%'}}>
        <Button fullWidth sx={cardbtnstyle} startIcon={<AddCircle />} onClick={opendialog}>
          افزودن کارت بانکی جدید 
        </Button>
     </Box>
    </Box>
  )
}
