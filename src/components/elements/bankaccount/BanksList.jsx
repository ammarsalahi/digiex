import React from 'react'
import {Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button, IconButton,Typography} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import AddCardBank from '../dialogs/AddCardBank';
import Svg from '../../utils/Svgs';
import {ReactComponent as AddCircle} from '../../../img/icons/circle-add.svg';
import {ReactComponent as Trash} from '../../../img/icons//trash.svg';
import {authpost} from '../ApiConfig/ApiHeaders';
import { useSelector } from 'react-redux';
import Api from '../ApiConfig/Api';
import { USER_BANK } from '../ApiConfig/Endpoints';
import { useEffect } from 'react';
import {ReactComponent as Saman} from '../../../img/icons/bank-saman.svg';
import DeleteBank from '../dialogs/DeleteBank';

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


export default function BanksList() {


  const {auth} =useSelector(state=>state.authtoken);
  const [banks,setBanks]=React.useState(null);
  const [len,setLen]=React.useState(0)
  let isload=false;
  const [open,setopen]=React.useState(false);
  const [opendel,setOpenDel]=React.useState(false)
  const [selectedBank,setSelectedBank]=React.useState(null);
  const opendialog=(event)=>{
    setopen(true)
  }
  const closedialog=(event)=>{
    setopen(false)
  }

  const getBanks=async()=>{
       await Api.get(USER_BANK,{
          headers:authpost(auth)
        }).then(res=>{
          if(res.data.statusCode===200){
            setBanks(res.data.data.result)
            setLen(res.data.data.result.length)
    
            if(banks!=[]){
              isload=true
            } 
          }
          else{
            setBanks(null)
          }
        });
  }
  useEffect(()=>{
      getBanks();
  },[]);
  

  
  const handleDelete=(id)=>(event)=>{
    setSelectedBank(banks[0])
    setOpenDel(true);
  }
   const StrToArray=(text,sidx,eidx)=>{
    let strarray=[]
     for(let i=0; i<=text.length;i++){
        strarray.push(text[i])
     }
     return strarray.slice(sidx,eidx).join('')
  }
  return (
    <Box className='row'>
    <TableContainer className="table-cnt overflow-auto" sx={{mb:"0px"}}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={headstyle}>بانک</TableCell>
            <TableCell sx={headstyle}>شماره‌کارت</TableCell>
            <TableCell sx={headstyle}>شماره‌شبا</TableCell>
            <TableCell sx={headstyle}>وضعیت</TableCell>

          </TableRow>
        </TableHead>
        {len >0?<TableBody>
          {banks.map((row,idx) => (
            <TableRow
              key={row.bankId}
              sx={rowstyle}
            >
              <TableCell sx={cellstyle} >
                 <Svg Component={Saman} style={{marginLeft:"2%"}}/> 
                 {row.bankName}
                </TableCell>
              <TableCell  sx={cellstyle}>
                {StrToArray(row.cardNumber,0,4)}-{StrToArray(row.cardNumber,4,8)}-{StrToArray(row.cardNumber,8,12)}-{StrToArray(row.cardNumber,12,16)}
              </TableCell>
              <TableCell sx={cellstyle}>{row.iBan}</TableCell>
              <TableCell sx={cellstyle}>
                <IconButton onClick={handleDelete(idx)}>
                  <Svg Component={Trash} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
            
        </TableBody>:
        <Box className="d-flex justify-content-center align-items-center pt-3" sx={{width:'100%'}}>
            <Typography variant="p" component="div">هیچ کارت بانکی وجود ندارد</Typography>
        </Box>}
      </Table>

     
    </TableContainer>
    <Box className='mt-3' sx={{mb:"32px",px:3}}>
        <Button fullWidth sx={cardbtnstyle} startIcon={<AddCircle />} onClick={opendialog}>
          افزودن کارت بانکی جدید 
        </Button>
     </Box>
     <AddCardBank open={open} close={closedialog} fulling={false} getbank={getBanks}/> 

     {banks !=null &&<DeleteBank open={opendel} close={()=>setOpenDel(false)} fulling={false} getbank={getBanks} bank={selectedBank}/>}
    </Box>
  )
}
