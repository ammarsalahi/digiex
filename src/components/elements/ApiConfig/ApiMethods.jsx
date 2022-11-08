import Api from './Api';
import {loginAction} from '../redux/actions';
import { formLabelClasses } from '@mui/material';


const SendNumberLogin=(url,phone,dispatch)=>{
    let rettype=false
    Api.post(url,{"phoneNumber":phone}).then(res=>{
        if(res.data.statusCode==200){
         let token=res.data.data.result.tempToken;
          dispatch(loginAction(token,phone));
          rettype=true
        }
      }).catch(err=>{
        console.log(err)
    });
    return rettype
}

export {SendNumberLogin}