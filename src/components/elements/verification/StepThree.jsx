import { Card, CardContent,Typography,Box,Button } from '@mui/material'
import React from 'react'
import UploadButton from './UploadButton'

export default function StepThree({onNext}) {
    const cardstyle={
        border:"1px dashed #a4a6b4",
        borderRadius:"8px",
        width:"440px",
        height:"322px",
        mx:"10px",
        my:'2%',
        p:"32px",
        fontSize:"14px",
        
    }
    
  return (
    <div className='maincontent'>
        <Box className="d-flex justify-content-start">
            <Typography variant="h6" component="div" className="boldfont">
            بارگذاری مدارک
            </Typography>
        </Box>
        <Box className="row d-flex justify-content-center" sx={{py:"32px"}}>
          <Box sx={cardstyle} className="col-lg-6 col-12">
              <Box className="d-flex">
                <Box sx={{borderRadius:"15px",width:"72px",height:"72px",backgroundColor:"rgba(236, 237, 247, 1)"}}/>
                <Box sx={{width:"300px",pl:"20px"}}>
                <Typography variant='p' component="div" sx={{color:"#505159"}}>
                سلفی با کارت ملی و دست نوشته
                </Typography>
                <Typography variant='p' component="div" sx={{color:"#a4a6b4",fontSize:"13px",py:1}}>
                طبق نمونه زیر، تصویر را آپلود نمایید. دقت کنید که حجم تصویر زیر ۱۶ مگابایت باشد.
                </Typography>
                 </Box>
              </Box>
              <Box className='d-flex justify-content-center ' sx={{pt:"73px",pb:"16px"}}>
                    <UploadButton text="آپلود تصویر"/>
              </Box>
              <Box className='d-flex justify-content-center' sx={{pb:"32px"}}>
                <Button fontSize={12} sx={{color:"#a4a6b4"}}>
                مشاهد نمونه
                </Button>
              </Box>
              
             
          </Box>
          <Box sx={cardstyle} className="col-lg-6 col-12">
              <Box className="d-flex">
                <Box sx={{borderRadius:"15px",maxWidth:"72px",minWidth:"72px",maxHeight:"72px",minHeight:"72px",backgroundColor:"rgba(236, 237, 247, 1)"}}/>
                <Box sx={{width:"300px",pl:"20px"}}>
                    <Typography variant='p' component="div" sx={{color:"#505159"}}>
                    ویدئو چهره و دست نوشته               
                    </Typography>
                    <Typography variant='p' component="div" sx={{color:"#a4a6b4",fontSize:"13px",py:1}}>
                    هنگامی که چهره خود را در ویدئو نشان میدهید، متن دست نوشته را قرائت کنید و در پایان ویدئو مدارک (کارت ملی + دست نوشته) خود را نیز نشان دهید.
                    </Typography>
                </Box>
              
              </Box>
              <Box className='d-flex justify-content-center ' sx={{pt:"30px",pb:"16px"}}>
                    <UploadButton text="آپلود ویدیو"/>
              </Box>
              <Box className='d-flex justify-content-center'>
                <Button fontSize={12} sx={{color:"#a4a6b4"}}>
                مشاهد نمونه
                </Button>
              </Box>
           
             
          </Box>
          
        </Box>
        <div className='d-lg-block d-md-none d-sm-none d-none'>
           <Box className="d-flex justify-content-end" sx={{py:"2%"}}>
            <Button 
                variant="contained" 
                sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"205px",mt:"85px",borderRadius:"8px"}}
                onClick={onNext}  
            >
            قبول قوانین و مرحله بعد            
            </Button>
          </Box>
        </div>
        <div className='d-lg-none d-md-block d-sm-block d-block'>
           <Box className="d-flex justify-content-end" sx={{py:"2%"}}>
            <Button 
                variant="contained" 
                sx={{ fontSize: 14, backgroundColor: "#424BFB", height: "55px" ,width:"100%",mt:"10%",mx:"3%",borderRadius:"8px"}}
                onClick={onNext}  
            >
            قبول قوانین و مرحله بعد            
            </Button>
          </Box>
        </div>
    </div>
  )
}
