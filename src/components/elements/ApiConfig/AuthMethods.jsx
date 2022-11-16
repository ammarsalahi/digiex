import Api from './Api';
import { PHONE_CODE } from './Endpoints';
import {authpost} from './ApiHeaders';

const PhoneLogin=(number)=>{
    let resdata=""
    Api.post(PHONE_CODE,{
        'phoneNumber':number
    }).then(res=>{
        resdata=res.data;
    });
    return resdata
}

export {
    PhoneLogin
}