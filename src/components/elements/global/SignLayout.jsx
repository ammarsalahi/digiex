import React from 'react'
import { Box, Typography ,MobileStepper} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination,EffectFlip,Autoplay } from 'swiper';
import Svg from '../../utils/Svgs'
import { ReactComponent as Logo} from '../../../img/icons/logo-fa-white.svg';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Pagination,EffectFlip,Autoplay]);
const stepSlides=[
  {'name':"مهران صبوری",'text':"یکی از بهترین صرافی ها با قیمت های خوب و رابط کاربری آسان هست که دارم باهاشون معامله میکنم و راضی هستم."},
  {'name':"آرش زرندی",'text':"من از این صرافی برای معاملات خودم استفاده میکنم و بسیار راضی هستم"},
  {'name':"مهران صبوری",'text':"یکی از بهترین صرافی ها با قیمت های خوب و رابط کاربری آسان هست که دارم باهاشون معامله میکنم و راضی هستم."}
]
  
const boxstyle={
  borderRadius:"8px",
  height:"163px",
  width:"100%",
  backgroundColor:"rgba(46, 67, 228, 1)",
  paddingTop:"32px",
  paddingBottom:"32px",
}
const mobstepstyle={
  my:"2%",
  height:"20px",
  width:"70px",
  backgroundColor:"#424BFB",
  '& .MuiMobileStepper-dotActive':{
       backgroundColor:"#fff"
  }

}

export default function SignLayout({children}) {
     const [active, setActive] = React.useState(0)
  return (
    <div className='container-fluid ' >
    <Box className="row" dir="rtl">
      
      <Box className="col-lg-6 col-md-6 d-lg-block d-md-block d-sm-none d-none" sx={{backgroundColor:"#424BFB",pt:"5%"}}>
           <Box sx={{pl:"48px"}}>
              <Svg  Component={Logo} />
            </Box> 
           <Box sx={{pl:"7%"}}>
           <Typography variant="p" compoent="div" sx={{color:"#fff",textAlign:"center",fontSize:"42px"}}>
           با بهترین قیمت و سرعت بالا معامله کنید
           </Typography>
           </Box>
           <Box sx={{pl:"7%",pr:"11%",pt:"48px"}}>
             <Typography variant="p" component="div" sx={{color:"#fff",fontSize:"13.4px"}}>
             با هر معامله، بخشی از معامله شما به کیف پولتان به عنوان هدیه (Cash Back) واریز میگردد که میتوانید در معاملات آتی از آن استفاده نمایید.
             </Typography>
           </Box>
           <div>
            <Box className="container d-flex justify-content-center slidbox" sx={{px:"15%"}}>
            <Swiper
              style={boxstyle}
              effect="fade"
              spaceBetween={8}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            >
              {stepSlides.map((item,idx)=>(
                <SwiperSlide key={idx} style={{width:"100%"}}>
                    <Box sx={{px:"35px"}}>
                        <Box>
                          <Typography variant="p" component="div" sx={{color:"#fff",fontSize:"12px"}}>
                             {item.text}
                          </Typography>
                          <Typography variant="b" component="div" sx={{pt:"38px",fontSize:"14px",color:"#fff"}}>
                              {item.name}
                          </Typography>
                        </Box>
                    </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            </Box>
            <Box className="container d-flex justify-content-center" sx={{pl:'5%',pb:"5%"}}>
              <MobileStepper
                sx={mobstepstyle}
                  position='static'
                  steps={3}
                  activeStep={active}
                /> 
            </Box>
           </div>
           
         
    </Box>
    <Box className="col-lg-6 col-md-6 col-12" sx={{height:"100vh"}}>
             {children}
             <div>
                <Box className="d-lg-block d-md-block d-sm-none d-none text-center fixed-bottom" sx={{pb:"32px",pl:"52%"}}>
                  <Typography variant="p" component="div" fontSize="16px" >
                  &#169; تمام حقوق این پلتفرم محفوظ میباشد 
                  </Typography>
                </Box>
                <Box className="d-lg-none d-md-none d-sm-block d-block text-center" sx={{pt:"30%",pb:"5%"}}>
                  <Typography variant="p" component="div" fontSize="16px" >
                  &#169; تمام حقوق این پلتفرم محفوظ میباشد 
                  </Typography>
                </Box>
              </div>
     </Box>
    </Box>
    </div>
    )
}
