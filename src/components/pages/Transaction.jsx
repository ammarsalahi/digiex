import { Box } from '@mui/material'
import React from 'react'
import TransactionHead from '../elements/transaction/TransactionHead'
import TransactionList from '../elements/transaction/TransactionList'

function createData(date, operation, bank,price,station) {
  return { date, operation, bank,price,station};
}
const rows = [
  createData("۲۳ بهمن ۱۴۰۱","withdraw","5022-2910-5977-0485","۳۹،۰۰۰،۰۰۰ تومان","ثبت شده"),
  createData("۲۳ بهمن ۱۴۰۱","deposit","5022-2910-5977-0485","۳۹،۰۰۰،۰۰۰ تومان","درحال پردازش"),
  createData("۲۳ بهمن ۱۴۰۱","withdraw","6104-3373-7054-2696","۳۹،۰۰۰،۰۰۰ تومان","لغو شده"),
  createData("۲۳ بهمن ۱۴۰۱","withdraw","5022-2910-5977-0485","۳۹،۰۰۰،۰۰۰ تومان","ثبت شده"),
  createData("۲۳ بهمن ۱۴۰۱","withdraw","6104-3373-7054-2696","۳۹،۰۰۰،۰۰۰ تومان","درحال پردازش"),
  createData("۲۳ بهمن ۱۴۰۱","deposit","5022-2910-5977-0485","۳۹،۰۰۰،۰۰۰ تومان","رد شده"),
  createData("۲۳ بهمن ۱۴۰۱","withdraw","5022-2910-5977-0485","۳۹،۰۰۰،۰۰۰ تومان","ثبت شده"),
  
]
export default function Transaction() {
  return (
    <div>
     <Box sx={{textAlign:'left'}}>
         <TransactionHead/>
         <Box>
            <TransactionList rows={rows}/>
         </Box>
     </Box>
    </div>
  )
}
