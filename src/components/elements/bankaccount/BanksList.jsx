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
    py:"16px",
    fontSize: "14px !important",
    textAlign:"center",
    color: "rgba(164, 166, 180, 1)",
    minWidth:"200px",
    maxWidth:"auto"
  }
  const cellstyle={
    py:"16px",
    fontSize: "14px !important",
    textAlign:"center"
  }
  const cardbtnstyle={
    backgroundColor:'#f1f3fa',
    fontSize:"13px",
    color: "#000",
    borderRadius:'8px',
    '&:hover': {
      backgroundColor:'#f1f3fa',
      color: "#000",
   },
   px:"90px",
   py:"50px",
   mt:"20px",
  }
  return (
    <Box className='row'>
    <TableContainer class="table-cnt overflow-auto" sx={{mb:"0px"}}>
      <Table size="small" className="">
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
    <Box className='mt-3'>
        <Button fullWidth sx={cardbtnstyle} startIcon={<AddCircle />} onClick={opendialog}>
          افزودن کارت بانکی جدید 
        </Button>
     </Box>
    </Box>
  )
}
