import React from 'react'
 import CheckCircleIcon from '../../img/payment/success.svg';
import FormInfo from '../elements/buy/FormInfo';
import { Button } from '@mui/material';

export default function Dashboard() {
    const list = [
        {
            'name': 'تعداد بایننس کوین',
            'price': '2150 BUSD'
        },
        {
            'name': 'قیمت هر واحد',
            'price': '30,250 تومان'
        },
        {
            'name': 'مبلغ',
            'price': '63,578,500 تومان'
        },
        {
            'name': 'تخفیف',
            'price': '0 تومان'
        },
        {
            'name': 'کارمزد تبدیل  (0.4%)',
            'price': '278,252 تومان'
        },
        {
            'name': 'نوع تراکنش',
            'price': 'فروش'
        },
        {
            'name': 'کد پیگیری',
            'price': '954256325'
        }
    ]
    return (
        <div className='container'>
            <div className="row  justify-content-center">
                <div className="col-lg-8 text-center py-5">
                    <div className='successIcon pb-5'>
                    <img src={CheckCircleIcon} style={{ fill: "#79e3b0", fontSize: "86px" }} alt="successSale" />
                    </div>
                    <div className="successInfo mt-4">
                        <div className='pb-4'>
                            <h5>سفارش فروش شما با موفقیت ثبت شد.</h5>
                            <small className='text-muted '>پس از تایید واریز ارز ، مبلغ سفارش به حساب شما واریز خواهد شد.</small>
                        </div>
                        <FormInfo listdata={list} />
                        <div className='col-7 m-auto py-3'>
                            <Button variant="contained" sx={{ fontSize: 21, backgroundColor: "#424BFB", height: "55px" }} fullWidth>
                                پیگیری معاملات
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
