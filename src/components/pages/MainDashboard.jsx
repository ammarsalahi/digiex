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
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
    createData('۲۳ بهمن ۱۴۰۱','تتر','خرید','۸۷۵','۲۹،۲۰۰','۷۱،۸۶۷،۰۹۹','۵۲۶،۰۰۰','۷۶۵۶۷۵','تکمیل شده'),
]
const infodata = [
    createDatainfo(TET, 'تتر', '136', '%42'),
    createDatainfo(BC, 'بایننس کوین', '136', '%42'),
    createDatainfo(USD, 'یو اس دی کوین', '136', '%42'),
    createDatainfo(DAI, 'دای', '136', '%42'),
]

export default function Wallet() {
    const [userdata, setUserdata] = React.useState({
        name: "حسین اسدزاده",
        level: "سطح طلایی",
        withdraw: "۱۰۰ میلیون تومان",
        deposit: "نامحدود",
        values: "کمتر از ۳،۰۰۰ تتر",
        distance: "۱،۲۰۰ تتر",
    });
    return (
        <div>
            <HeaderInfo userdata={userdata} svgsDash={true}/>
            <WalletInfo infos={infodata} />
            <div className='row bg-light'>
                <br />
            </div>
            <MainList rows={rows} />
        </div>
    )
}
