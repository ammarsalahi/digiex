import { Box, Typography ,FormGroup,FormLabel,TextField,Button} from '@mui/material'
import React from 'react'
import SignLayout from '../elements/global/SignLayout'
import MobileNumberPage from '../elements/login/MobileNumberPage'
import SecureCodePage from '../elements/login/SecureCodePage'
import { LOGIN_PHONE,LOGIN_CODE } from '../elements/ApiConfig/Endpoints';
import { Navigate } from 'react-router-dom';

export default function Login() {
  return (
    <SignLayout>
        <MobileNumberPage  phoneurl={LOGIN_PHONE}/>
    </SignLayout>

  )
}
