import React from 'react'
import WalletHead from '../elements/wallet/WalletHead'
import WalletInfo from '../elements/wallet/WalletInfo'
import WalletList from '../elements/wallet/WalletList'
import { ReactComponent as DAI } from '../../img/icons/coin/dai.svg';
import { ReactComponent as BC } from '../../img/icons/coin/Group 2.svg';
import { ReactComponent as USD } from '../../img/icons/coin/Group 3.svg';
import { ReactComponent as TET } from '../../img/icons/coin/Shape.svg';

function createData(date, name, operation,count,address,txid,station) {
  return { date, name, operation,count,address,txid,station };
}
function createDatainfo(icon,name,number,percend) {
  return { icon,name,number,percend };
}

const rows=[
  createData('۲۳ بهمن ۱۴۰۱','تتر','واریز','875','TKavR…RKkSjm','a81813115b...f8c5b286','تکمیل شده'),
  createData('۲۳ بهمن ۱۴۰۱','تتر','واریز','875','TKavR…RKkSjm','a81813115b...f8c5b286','تکمیل شده'),
]
const infodata=[
  createDatainfo(TET,'تتر','136','%42'),
  createDatainfo(BC,'بایننس کوین','136','%42'),
  createDatainfo(USD,'یو اس دی کوین','136','%42'),
  createDatainfo(DAI,'دای','136','%42'),

]
const options = [
  { "label": 'بایننس کوین', "icon": BC },
  { "label": 'تتر', "icon": TET },
  { "label": 'دای', "icon": DAI },
  { "label": 'یو اس دی کوین', "icon": USD },
]

export default function Wallet() {
  return (
    <div>
        <WalletHead/>
        <WalletInfo infos={infodata} options={options}/>
        <div className='row bg-light'>
          <br/>
        </div>
        <WalletList rows={rows}/>
    </div>
  )
}
