import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import React from 'react'
import SignLayout from '../elements/global/SignLayout'
import MobileNumberPage from '../elements/login/MobileNumberPage'
import SecureCodePage from '../elements/login/SecureCodePage'
export default function Login() {
  
   const [isSend, setIsSend] = React.useState(false);
   const sendCode=(event)=>{
      if(isSend){
        setIsSend(false)
      }
      else{
        setIsSend(true)
      }
   }
  return (
    <SignLayout>
        {isSend 
          ? <SecureCodePage send={sendCode}/> 
          :<MobileNumberPage send={sendCode}/>
        }
    </SignLayout>

  )
}
