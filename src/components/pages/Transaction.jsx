import { Box } from '@mui/material'
import React from 'react'
import TransactionHead from '../elements/transaction/TransactionHead'
import TransactionList from '../elements/transaction/TransactionList'

function createData(date, operation, bank,price,station) {
  return { date, operation, bank,price,station};
}
const rows = [
  createData("23 بهمن 1401","withdraw","5022-2910-5977-0485","39,000,000 تومان","ثبت شده"),
  createData("23 بهمن 1401","deposit","5022-2910-5977-0485","39,000,000 تومان","درحال پردازش"),
  createData("23 بهمن 1401","withdraw","6104-3373-7054-2696","39,000,000 تومان","لغو شده"),
  createData("23 بهمن 1401","withdraw","5022-2910-5977-0485","39,000,000 تومان","ثبت شده"),
  createData("23 بهمن 1401","withdraw","6104-3373-7054-2696","39,000,000 تومان","درحال پردازش"),
  createData("23 بهمن 1401","deposit","5022-2910-5977-0485","39,000,000 تومان","رد شده"),
  createData("23 بهمن 1401","withdraw","5022-2910-5977-0485","39,000,000 تومان","ثبت شده"),
  
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
