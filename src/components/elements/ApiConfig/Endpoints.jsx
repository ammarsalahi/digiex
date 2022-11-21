
let base="http://157.90.74.62:4321/";

export const BASE_URL=base;

const _ =(url)=>{return BASE_URL + "api/v2"+url} 

export const ACCOUNT_PROFILE= _("/accounts/profile/")

export const GET_ACOUNTS= _("/accounts/accounts/");

export const LOGOUT= _("/accounts/logout/");

export const LOGIN_PHONE= _("/accounts/phone/otp/")

export const LOGIN_CODE = _("/accounts/otp/confirm")

export const PHONE_CODE =(phonenumber)=> _("/accounts/otp/ttl/"+phonenumber+"/")

export const GET_VERIFICATION_STATE = _("/accounts/verifications/state/")

export const VERIFICATION_STATE_ID =(id)=> _("/accounts/verifications/state/"+id)

export const VERIFICATION_INFO = _("/accounts/verifications/info/")

export const VERIFICATION_RULE = _("/accounts/verifications/rule/")

export const VERIFICATION_DOCUMENTS = _("/accounts/verifications/documents/")

export const SELFIE_IMAGE = _("/accounts/selfie/image/")

export const SELFIE_VIDEO = _("/accounts/selfie/video/")

export const VERIFY_IMAGE =(id)=> _("/accounts/selfie/image/"+id)

export const VERIFY_VIDEO =(id)=> _("/accounts/selfie/video/"+id)

export const BANKS =_("/banks/")

export const BANKS_ID =(id)=>_("/banks/"+id)

export const REQUEST_BUY =(id)=>_("/requests/buy/"+id)

export const REQUEST_BUY_PAGE =(size,number)=>_("/requests/buy/"+size+"/"+number)

export const REQUEST_BUY_STEP1 =_("/requests/buy/step1/")

export const BUY_STEP2_CREDIT =(id)=>_("/requests/buy/step2/"+id+"/creditcard/digiexwallet/")

export const BUY_STEP2_DIRECT =(id)=>_("/requests/buy/step2/"+id+"/directdebit/digiexwallet/")

export const BUY_STEP2_INTERNAL =(id)=>_("/requests/buy/step2/"+id+"/internalwallet/digiexwallet/")

export const BUY_STEP2_CREDIT_SELF =(id)=>_("/requests/buy/step2/"+id+"/creditcard/selfcryptowallet/")

export const BUY_STEP2_DIRECT_SELF =(id)=>_("/requests/buy/step2/"+id+"/directdebit/selfcryptowallet/")

export const BUY_STEP2_INTERNAL_SELF =(id)=>_("/requests/buy/step2/"+id+"/internalwallet/selfcryptowallet/")

export const BUY_VERIFY_DIRECT =(id)=> _("/requests/buy/verify/"+id+"/directdebit/")

export const BUY_VERIFY_SELFCRYPTO =(id)=> _("/requests/buy/verify/"+id+"/selfcryptowallet/")

export const DISCOUNDS_TYPES = _('/discounts/types/');

export const DISCOUNDS = _('/discounts/');

export const DISCOUNDS_ID =(id)=> _('/discounts/types/'+id+"/");

export const GET_CRYPTO =_("/cryptocurrencies/");

export const GET_CRYPTO_ID =(id)=>_("/wallet/cryptocurrencies/"+id);

export const CRYPTO_PRICE_ID =(id)=>_("/cryptocurrencies/"+id+"/price/");

export const GET_CRYPTO_FEE_ID_STANDARD =(id,standard)=>_("/cryptocurrencies/fees/"+id+"/"+standard+"/standard");

export const LOYALTY =_("/loyalties/");

export const LOYALTY_PAYMENT =(payment)=>_("/loyalties/payment-method/"+payment);

export const PAYMENTS =_("/payments/callback/");

export const USER_BANK =_("/users/bank-accounts/");

export const USER_BANK_ID =(id)=>_("/users/bank-accounts/"+id);


export const WALLET_CRYPTO =_("/wallet/cryptocurrencies/");

export const WALLET_CRYPTO_ID =(id)=>_("/wallet/cryptocurrencies/"+id);

export const WALLET_CRYPTO_NETWORK =(cryptoid,networkstandard)=>_("/wallet/cryptocurrencies/"+cryptoid+"/crypto/"+networkstandard+"/network");

export const WALLET_FIAT =_("/wallets/fiats");





















