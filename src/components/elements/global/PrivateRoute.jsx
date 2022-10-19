import React from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from '../global/Navbar';
import Sidebar from '../global/Sidebar';
import { Box } from '@mui/material'
import SideMobileDialog from './SideMobileDialog';
export default function PrivateRoute({children}) {

  const [auth, setauth] = React.useState(true);
  const [isSide, setisSide] = React.useState(false);
  const [colClass, setcolClass] = React.useState("");
  const [isSideClick,setisSideClick]=React.useState(true);
  const [isMobile,setIsMobile]=React.useState(false);

  const LoadNavMobile=(event)=>{
    setIsMobile(true);
  }
  const UnLoadMobile=(event)=>{
    setIsMobile(false)
  }
   React.useEffect(() => {
    if(isSideClick){
          if(window.innerWidth>=992){
            setisSide(true);
            setcolClass("col-lg-9 col-md-7");
        }
        else{
            setisSide(false);
            setcolClass("");
        }
    }
     
   }, [isSide]);
  
  const LoadSideDesk = (event) => {
    setisSideClick(false);
    if (isSide) {
      setcolClass("");
      setisSide(false);
    }
    else {
      setcolClass("col-lg-9 col-md-7");
      setisSide(true)
    }
  }
  return (auth?
    <Box>
        <Navbar isSide={isSide} LoadSide={LoadSideDesk} LoadMobile={LoadNavMobile}/>
             <Box style={{ marginTop: '58px' }}>
              <div className="container-fluid">
                <div className="row" dir="rtl">
                  {isSide && <div className='col-lg-3 col-md-5 col-12 border-left'>
                    <div className="sticky-top d-none d-sm-none d-md-block d-lg-block" style={{ top: '110px' }}>
                      <Sidebar />
                    </div>
                  </div>}
                <div className={colClass + " col-12"}>
                  {children}
                </div>
              </div>
             </div>
         </Box>
         <SideMobileDialog open={isMobile} close={UnLoadMobile} />
      </Box>
    : <Navigate to="/login"/>
    )
}
