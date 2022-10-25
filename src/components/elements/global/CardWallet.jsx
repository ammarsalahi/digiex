import React from 'react'
import {Box,Button ,List,ListItem,ListItemText,ListItemIcon,IconButton} from '@mui/material'
import {ReactComponent as AddCircle} from '../../../img/icons/circle-add.svg';
import {ReactComponent as Trash} from '../../../img/icons/trash.svg';
import Svg from '../../utils/Svgs';
import AddWalletAddress from '../dialogs/AddWalletAddress';
import { ReactComponent as TET } from '../../../img/icons/coin/Shape.svg';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export default function CardWallet({options}) {

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
    {'name':"mywallet",'address':"TRCddKRNFMGdjfkdFDKJVksjskfY2JJDM"},
    {'name':"mywallet",'address':"TRCddKRNFMGdjfkdFDKJVksjskfY2JJDM"},

  ]
  
    const cardstyle={
        width: '100%',
        height: '100%',
        border: '1px solid #cbe4eb',
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
      const tetstyle={
        pt:"3px",height: "30px", width: "30px",
        borderRadius:"8px",
        backgroundColor:"rgba(217, 243, 232, 1)"
      }
  return (
    <Box sx={cardstyle}>
         <List sx={{p:"1%",direction:"rtl",minHeight:"55px",maxHeight:"auto"}}>
            <ListItem onClick={handleArrow} button sx={{py:"0%"}}>
                <ListItemIcon>
                    <Box className="text-center" sx={tetstyle}>
                        <Svg Component={TET} />
                    </Box>
                </ListItemIcon>
                <ListItemText 
                 className='text-start'
                 primaryTypographyProps={{color:"#a4a6b4",fontSize:"12px"}}
                 secondaryTypographyProps={{color:"#001"}}
                 primary="mywallet"
                 secondary="TRCddKRNFMGdjfkdFDKJVksjskfY2JJDM"
                />
                <ListItemIcon>
                     {show?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
                    </ListItemIcon>
            </ListItem>
           {show? listdata.map((item,idx)=>(
             <ListItem sx={{py:"0%"}} key={idx} className="bordertop">
             <ListItemIcon>
                 <Box className="text-center" sx={tetstyle}>
                     <Svg Component={TET} />
                 </Box>
             </ListItemIcon>
             <ListItemText 
              className='text-start'
              primaryTypographyProps={{color:"#a4a6b4",fontSize:"12px"}}
              secondaryTypographyProps={{color:"#001"}}
              primary={item.name}
              secondary={item.address}
             />
             <ListItemIcon>
                      <IconButton>
                      <Svg Component={Trash} />
                        </IconButton>
                    </ListItemIcon>
          </ListItem>
           )):null}
        </List>
        <Button sx={btnstyle} startIcon={<AddCircle/>} onClick={opendialog}>
            افزودن آدرس ولت
        </Button>
        <AddWalletAddress open={open} close={closedialog} options={options} />
    </Box>
  )
}
