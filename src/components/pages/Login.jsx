import React from 'react'
import SignLayout from '../elements/global/SignLayout'
import MobileNumberPage from '../elements/login/MobileNumberPage'
import { LOGIN_PHONE } from '../elements/ApiConfig/Endpoints';

export default function Login() {
  return (
    <SignLayout>
        <MobileNumberPage  phoneurl={LOGIN_PHONE}/>
    </SignLayout>

  )
}
