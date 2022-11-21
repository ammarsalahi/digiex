import React from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from '../global/Navbar';
import Sidebar from '../global/Sidebar';
import { Box } from '@mui/material'
import SideMobileDialog from './SideMobileDialog';
import Api from '../ApiConfig/Api';
import {useSelector,useDispatch} from 'react-redux';
import {VERIFICATION_STATE_ID} from '../ApiConfig/Endpoints'
import {authpost} from '../ApiConfig/ApiHeaders';
import { addUserState } from '../redux/actions';

export default function PrivateRoute({children}) {
  const [isSide, setisSide] = React.useState(false);
  const [colClass, setcolClass] = React.useState("");
  const [isSideClick,setisSideClick]=React.useState(false);
  const [isMobile,setIsMobile]=React.useState(false);

  const {auth} =useSelector(state=>state.authtoken); 
  const {userid}=useSelector(state=>state.profile);
  const dispatch=useDispatch();
  // const auth="jjj";
  const LoadNavMobile=(event)=>{
    setIsMobile(true);
  }
  const UnLoadMobile=(event)=>{
    setIsMobile(false)
  }
  
  const loadingSideScreen=()=>{
    if(window.innerWidth>993){
      setisSide(true);
      setcolClass("col-lg-9 col-md-7");
  }
  else{
    if(isSideClick){
      setisSide(true);
      setcolClass("col-lg-9 col-md-7");
    }else{
      setisSide(false);
      setcolClass('');
    }
      
    }
  }
  const getUserState=async()=>{
      await Api.get(VERIFICATION_STATE_ID(userid),{
        headers:authpost(auth)
      }).then(res=>{
        dispatch(addUserState(res.data.data.result))
      })
  }

   React.useEffect(() => {
      loadingSideScreen();
      window.addEventListener('resize',loadingSideScreen,false); 
      getUserState();
   }, [isSide,colClass]);
  
  const LoadSideDesk = (event) => {
    if (isSide) {
      setcolClass("");
      setisSide(false);
      setisSideClick(false)
    }
    else {
      setcolClass("col-lg-9 col-md-7");
      setisSide(true)
      setisSideClick(true)

    }
  }
  return (auth!=null?
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
