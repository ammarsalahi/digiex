import React from 'react';
import SignLayout from '../elements/global/SignLayout';
import SecureCodePage from '../elements/login/SecureCodePage';
import { Navigate } from 'react-router-dom';
import { LOGIN_CODE } from '../elements/ApiConfig/Endpoints';
import { useDispatch,useSelector } from 'react-redux';

export default function Confirm() {
   
   const {token,phone}=useSelector(state=>state.login);
  return (
    <div>
    {phone!=null ?
    <SignLayout>
          <SecureCodePage  codeurl={LOGIN_CODE} number={phone} token={token}/> 
    </SignLayout>
     :<Navigate to="/login"/>}
    </div>
    
    )
}
