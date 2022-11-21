import React from 'react'
import SuccessPayment from '../elements/payment/SuccessPayment';
import UnSuccessPayment from '../elements/payment/UnSuccessPayment';
import SuccessSales from '../elements/payment/SuccessSales';
import UnSuccessSales from '../elements/payment/UnSuccessSales';
export default function Payment() {
  const SuccessPay=()=>{
    return <SuccessPayment/>
  }
  const UnSuccessPay=()=>{
    return <UnSuccessPayment/>
  }
  const SuccessSale=()=>{
    return <SuccessSales/>
  }
  const UnSuccessSale=()=>{
    return <UnSuccessSales/>
  }
  return (
    <div>
      <SuccessPayment/>
    </div>
  )
}
