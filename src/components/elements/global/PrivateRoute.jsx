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
  
  const loadingSideScreen=()=>{
    if(window.innerWidth>992){
      setisSide(true);
      setcolClass("col-lg-9 col-md-7");
  }
  else{
    if(isSideClick){
      setisSide(isSide);
      setcolClass(colClass);
    } 
  }
  }
   React.useEffect(() => {
      loadingSideScreen();
      window.addEventListener('resize',loadingSideScreen,false);      
   }, [isSide,colClass]);
  
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
                  {isSide && <div className='col-lg-3 col-md-5 border-left-d' style={{minWidth:"auto",maxWidth:"312px",height:"100%",position:"fixed" }}>
                    <div className="d-none d-sm-none d-md-block d-lg-block ">
                      <Sidebar/>
                    </div>
                  </div>}
                <div className={colClass + " col-12"} style={{minWidth:"calc(100% - 312px)",maxWidth:"100%",marginRight:"auto"}}>
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
