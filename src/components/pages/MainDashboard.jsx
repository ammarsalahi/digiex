import React from 'react'
import HeaderInfo from '../elements/bankaccount/HeaderInfo';
import WalletInfo from '../elements/wallet/WalletInfo'
import WalletList from '../elements/wallet/WalletList'
import { ReactComponent as DAI } from '../../img/icons/coin/dai.svg';
import { ReactComponent as BC } from '../../img/icons/coin/Group 2.svg';
import { ReactComponent as USD } from '../../img/icons/coin/Group 3.svg';
import { ReactComponent as TET } from '../../img/icons/coin/Shape.svg';
import MainList from '../elements/maindashboard/MainList';
function createData(date, name, operation, count, price, sum, subsit,refcode,station) {
    return { date, name, operation, count, price, sum, subsit,refcode,station };
}
function createDatainfo(icon, name, number, percend) {
    return { icon, name, number, percend };
}


const rows = [
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
    createData('23 بهمن 1401','تتر','خرید','875','29,200','71,867,099','526,000','765675','تکمیل شده'),
]
const infodata = [
    createDatainfo(TET, 'تتر', '136', '%42'),
    createDatainfo(BC, 'بایننس کوین', '136', '%42'),
    createDatainfo(USD, 'یو اس دی کوین', '136', '%42'),
    createDatainfo(DAI, 'دای', '136', '%42'),
]
const options = [
    { "label": 'بایننس کوین', "icon": BC },
    { "label": 'تتر', "icon": TET },
    { "label": 'دای', "icon": DAI },
    { "label": 'یو اس دی کوین', "icon": USD },
  ]

export default function Wallet() {

    return (
        <div >
              <HeaderInfo  svgsDash={true}/>
              <WalletInfo infos={infodata}  options={options} />            
            <div className='row backgroundClr'>
                <br />
            </div>
            <MainList rows={rows} />           
        </div>
    )
}
