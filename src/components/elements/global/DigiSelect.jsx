import React from 'react'
import { TextField,InputAdornment ,MenuItem,Box,Select,ListItem,ListItemText} from '@mui/material';
import {Search} from '@mui/icons-material'
import Svg from '../../utils/Svgs';
import inputFontSize from './inputFontSize';
import Api from '../ApiConfig/Api';
import {GET_CRYPTO} from '../ApiConfig/Endpoints'
import {authpost} from '../ApiConfig/ApiHeaders';
import { useEffect } from 'react';
import { ReactComponent as Dai } from '../../../img/icons/coin/dai.svg';
import { ReactComponent as BC } from '../../../img/icons/coin/Group 2.svg';
import { ReactComponent as USD } from '../../../img/icons/coin/Group 3.svg';
import { ReactComponent as Tether } from '../../../img/icons/coin/Shape.svg';
import { addPrice,addCryptoId, addCrypto } from '../redux/actions';
import { useDispatch ,useSelector} from 'react-redux';
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

export default function DigiSelect({sectiontype}) {

   const [open, setopen] = React.useState(false)
   const [search, setsearch] = React.useState("");
   const [isSearch, setisSearch] = React.useState(false);
   const [crypto,setCrypto]=React.useState([]);
   const {auth} =useSelector(state=>state.authtoken);
   const datacryp=useSelector(state=>state.crypto)
   const dispatch=useDispatch();

   const handleSearch=(event)=>{
    setCrypto(
        crypto.filter((item)=>{
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
    }
    else{
      setopen(true);
      getCryptos();
    }
}
   const getCryptos=async()=>{
        await Api.get(GET_CRYPTO,{
          headers: authpost(auth)
        }).then(res=>{
          setCrypto(res.data.data.result);
        })
   }
   useEffect(()=>{
        getCryptos();
   },[]);
   
   const getLogo=(name)=>{
    switch(name){
       case "Dai":
         return Dai
       case "Tether":
         return Tether
       case "Binance usd":
         return USD
       case "Binance":
         return BC
       default:
         return BC       
    }
    
 }
 const handleChangeCrypto=(event)=>{
  const item=event.target.value;
  if(item.price!=null){
    dispatch(addCrypto(
      item.id,
      item.price.toman.buy,
      item.price.toman.sell,
      item.price.id,
      sectiontype
     ));
  }
  else{
    dispatch(addCrypto(
      item.id,
      0,
      0,
      0,
      sectiontype
     ));
  }
}
  return (
    <div>
        <Select
            color='digi'
            fullWidth
            open={open}
            onOpen={()=>setopen(true)}
            onClose={handleClose}
            onChange={handleChangeCrypto}
            >
            {crypto.length >4 && <TextField 
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
            {crypto.length>0
            ? 
            (crypto.map((item)=>(
                <MenuItem button key={item.id} sx={muilist} value={item}>
                  <div  dir="rtl">
                  <div className="d-flex justify-content-start">
                        <Box className="text-center" 
                         sx={ item.namePer==="تتر" || item.namePer==="بایننس یو اس دی" ? tetstyle : daistyle}
                        >
                        <Svg Component={getLogo(item.nameEn)} style={{ height: "23px", width: "23px" }} />
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
