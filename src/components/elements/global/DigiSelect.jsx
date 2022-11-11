import React from 'react'
import { TextField,InputAdornment ,MenuItem,Box,Select,ListItem,ListItemText} from '@mui/material';
import {Search} from '@mui/icons-material'
import Svg from '../../utils/Svgs';
import inputFontSize from './inputFontSize';
import Api from '../ApiConfig/Api';
import {WALLET_CRYPTO} from '../ApiConfig/Endpoints'
import {authpost} from '../ApiConfig/ApiHeaders';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const tetstyle={
  pt:"3px",height: "30px", width: "30px",
  borderRadius:"8px",
  backgroundColor:"rgba(217, 243, 232, 1)",
}

const daistyle={
  pt:"3px",height: "30px", width: "30px",
  borderRadius:"8px",
  backgroundColor:"#fbf4c6",
 
}
const fonsizes={
  fontSize:"14px"
}

const textfieldstyle={
  width:"96%",mr:"2%",my:"2%",fontSize:"14px",
  boxShadow:"unset",
}

const muilist={
  boxShadow:"unset",
}

export default function DigiSelect({options}) {

   const [optionstate, setoptionstate] = React.useState(options);
   const [open, setopen] = React.useState(false)
   const [search, setsearch] = React.useState("");
   const [isSearch, setisSearch] = React.useState(false);
   const [crypto,setCrypto]=React.useState(null);
   const {auth} =useSelector(state=>state.authtoken);
  
   const handleSearch=(event)=>{
    setoptionstate(
        options.filter((item)=>{
            if(item.label===event.target.value){
                return item
            }
            else{
              setisSearch(false)
            }
        })
    )
   }
   const handleClose=(event)=>{
    if(isSearch===false){
      setopen(false);
      setoptionstate(options);
    }
    else{
      setopen(true);
      setoptionstate(options)
    }
}
   const getCryptos=async()=>{
        await Api.get(WALLET_CRYPTO,{
          headers: authpost(auth)
        }).then(res=>{
          console.log(res.data)
          setCrypto(res.data.data.results);
        })
   }
   useEffect(()=>{
      getCryptos();
   },[crypto]);
   
  return (
    <div>
        <Select
            color='digi'
            fullWidth
            open={open}
            onOpen={()=>setopen(true)}
            onClose={handleClose}
            defaultValue={optionstate[0].label}
            onChange={(e)=>console.log(e.target.value)}
            >
            {crypto && <TextField 
            color="digi"
            sx={textfieldstyle}
            size="small"
            onFocus={()=> setisSearch(true)} 
            onBlur={()=>setisSearch(false)}  
            value={search} onChange={handleSearch}
             InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                     <Search/>
                  </InputAdornment>
                ),
                style:{
                  direction:"rtl",
                  fontSize:inputFontSize
                }
              }}
            />}
            {crypto!=null 
            ? 
            (crypto.map((item)=>(
                <MenuItem button key={item.id} sx={muilist} value={item.namePer}>
                  <div  dir="rtl">
                  <div className="d-flex justify-content-start">
                        <Box className="text-center" 
                         sx={ item.namePer==="تتر" || item.label==="یو اس دی کوین" ? tetstyle : daistyle }
                        >
                        <Svg Component={item.icon} style={{ height: "23px", width: "23px" }} />
                        </Box>
                        <div className="mx-2 mt-1" style={fonsizes}>{item.namePer}</div>
                     </div>
                  </div>
                 </MenuItem>                
            )))
            :<Box className="fontbold"sx={{py:"2%",textAlign:"center",fontSize:"14px"}}> 
             <p>هیچ آیتمی وجود ندارد</p>
            </Box>}
        </Select>
    </div>
   
  )
}
