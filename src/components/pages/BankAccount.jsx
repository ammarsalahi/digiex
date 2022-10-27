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
  const [open,setopen]=React.useState(false);

  const opendialog=(event)=>{
    setopen(true)
  }
  const closedialog=(event)=>{
    setopen(false)
  }
  const [userdata, setUserdata] = React.useState({
    name:"حسین اسدزاده",
    level:"سطح طلایی",
    withdraw:"100 میلیون تومان",
    deposit:"نامحدود",
    values:"کمتر از 3,000 تتر",
    distance:"1,200 تتر",
  });
  return (
    <div>
      <Box sx={{textAlign:'left'}}>
            <HeaderInfo userdata={userdata}/>
         <Box>
            <BanksList rows={rows} opendialog={opendialog}/>
         </Box>
         <AddCardBank open={open} close={closedialog}/> 
      </Box>
    </div>
  )
}
