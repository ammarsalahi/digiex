import React from 'react'
import {Box} from '@mui/material';
import HeaderInfo from '../elements/bankaccount/HeaderInfo';
import BanksList from '../elements/bankaccount/BanksList';
import AddCardBank from '../elements/dialogs/AddCardBank';
import AddWalletAddress from '../elements/dialogs/AddWalletAddress';
import AgreementWallet from '../elements/dialogs/AgreementWallet';
import {ReactComponent as Saman} from '../../img/icons/bank-saman.svg';
function createData(bank, cardnumber, sheba,icon) {
  return { bank,cardnumber,sheba,icon};
}
const rows = [
  createData('بانک سامان',"5022-2910-5977-0485","IR37012002000000345896437",Saman),
  createData('بانک سامان',"5022-2910-5977-0485","IR37012002000000345896437",Saman),
  createData('بانک سامان',"5022-2910-5977-0485","IR37012002000000345896437",Saman),

]
export default function BankAccount() {
  

  return (
    <div>
      <Box sx={{textAlign:'left'}}>
            <HeaderInfo/>
         <Box>
            <BanksList/>
         </Box>
         
      </Box>
    </div>
  )
}
