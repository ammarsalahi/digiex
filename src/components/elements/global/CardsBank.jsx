import React from 'react'
import {Box,Button ,List,ListItem,ListItemText,ListItemIcon,IconButton} from '@mui/material'
import { Delete, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import AddCardBank from '../dialogs/AddCardBank';
import {ReactComponent as AddCircle} from '../../../img/icons/circle-add.svg';
import {ReactComponent as Trash} from '../../../img/icons/trash.svg';
import Svg from '../../utils/Svgs';
import {ReactComponent as Saman} from '../../../img/icons/bank-saman.svg';

export default function CardsBank() {

  const [open,setOpen]=React.useState(false);
  const [show,setShow]=React.useState(false);


  const opendialog=(event)=>{
    setOpen(true);
  }
  const closedialog=(event)=>{
    setOpen(false);
  }
  const handleArrow=(event)=>{
    if(show){
      setShow(false)
    }
    else{
      setShow(true);
    }
  }
  const listdata=[
    {'bank':"بانک سامان",'number':"6104337391508790"},
    {'bank':"بانک سامان",'number':"6104337391508790"},

  ] 
  const StrToArray=(text)=>{
    let strarray=[]
     for(let i=0; i<=text.length;i++){
        strarray.push(text[i])
     }
     return strarray 
  } 
    const cardstyle={
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: '8px'
      }
      const btnstyle={
        width: '100%',
        height: '57px',
        borderRadius: '0px 0px 8px 8px',
        bottom:"0px",
        backgroundColor:'#f1f3fa',
        color: "#000",
        '&:hover': {
          backgroundColor:'#f1f3fa',
          color: "#000",
       },
      }
  return (
    <Box sx={cardstyle} className="full-border">
         <List>
            <ListItem onClick={handleArrow} sx={{cursor:"pointer",py:"16px"}}>
                  <Svg Component={Saman} />
                <ListItemText primary="بانک سامان" sx={{ml:'16px'}}/>
                <ListItemText primary="6104337391508790" />
                <div style={{paddingLeft:"5px"}}>
                  {show?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
                </div>
            </ListItem>
           {show? listdata.map((item,idx)=>(
            <ListItem key={idx} className="bordertop" sx={{cursor:"pointer",py:"16px"}}>
                  <Svg Component={Saman} />
                
                <ListItemText primary={item.bank} sx={{ml:'16px'}}/>
                <ListItemText primary={`${StrToArray(item.number).slice(0,4)}`} />
                    <IconButton>
                      <Svg Component={Trash} />
                    </IconButton>
            </ListItem>
           )):null}
        </List>
        <Button sx={btnstyle} startIcon={<AddCircle/>} onClick={opendialog}>
            افزودن کارت بانکی
        </Button>
        <AddCardBank open={open} close={closedialog}/>
    </Box>
  )
}
