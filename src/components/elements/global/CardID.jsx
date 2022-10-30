import React from 'react'
import { Typography, Table, TableRow, TableCell, TableContainer,Box, IconButton} from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
export default function CardID() {
  const rowstyle={
    borderTop:"1px solid #cbe4eb",
  }
  const borderstyle={
    borderBottom:"1px solid #cbe4eb",
    borderRight:"1px solid #cbe4eb"
  }
  return (
    <TableContainer sx={{border:"1px solid #cbe4eb",borderRadius:"8px"}}>
      <Table >
        <TableRow>
          <TableCell sx={borderstyle}>
            <Typography variant="p" component="div">
                مبدا        
            </Typography>
          </TableCell>
          <TableCell sx={{borderBottom:"1px solid #cbe4eb"}} className="d-flex justify-content-between">
              <Typography variant="p" component="div">
                حسین اسدزاده
              </Typography>
              <Typography variant="p" component="div">
                  IR00000000000000000000000
              </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{borderRight:"1px solid #cbe4eb"}}>
            <Typography variant="p" component="div">
              مقصد        
            </Typography>
          </TableCell>
          <TableCell >
                <Box className='d-flex justify-content-between'>
                  <Typography variant="p" component="div">
                      حسین اسدزاده
                      </Typography>
                    <Typography variant="p" component="div">
                        IR00000000000000000000000
                    </Typography>
                    </Box>
                    <Box className='d-flex justify-content-between'>
                      <Box className="d-flex" sx={{pt:"3%"}}>
                      <Typography variant="p" component="div" sx={{color:'#1ed184',fontSize:'12px',mt:'3px'}}>
                          شناسه واریز
                      </Typography>
                      <InfoOutlined fontSize='small' sx={{color:"#1ed184",ml:"8px"}}/>
                      </Box>
                      <Box sx={{pt:"3%"}}>
                      <Typography variant="p" component="div" style={{color:'#1ed184',fontSize:'12px'}}>
                        9900082134458828
                      </Typography>
                      </Box>
                      
                </Box>
          </TableCell>
        </TableRow>
       </Table>
      </TableContainer>

    )
}
