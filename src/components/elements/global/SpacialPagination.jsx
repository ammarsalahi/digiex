import React,{useState,useEffect} from 'react'
import {Box,IconButton} from '@mui/material';
import { usePaginationRange, DOTS } from "./usePaginationRange";

const pagebtnactive={
  height: "35px",
  width: "35px",
  borderRadius:"8px",
  fontSize:'14px',
  color:"#fff",
  backgroundColor:"#0f1628",
  '&:hover': {
    backgroundColor: "#0f1628",
    color:"#fff"
 },
}
const pagebtn={
  height: "30px",
  width: "30px",
  borderRadius:"7px",
  fontSize:'14px',
  my:"3px",
  color:"#000",
}
const boxpagetyle={
  border:"1px solid #a4a6b4",
  borderRadius:"8px",
  height:"48px",
  width:"auto",
  px:"5px",
  py:"5px",
  display:"flex",
  my:"10px"
}


export default function SpacialPagination({
  data,
  buttonConst,
  contentPerPage,
  siblingCount
}) {
  const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  const paginationRange = usePaginationRange({
    totalPageCount,
    buttonConst,
    siblingCount,
    currentPage,
  });

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: "0px",
    });
  }, [currentPage]);

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  


  return (
    <Box sx={boxpagetyle}>
          {paginationRange.map((item, index) => {

              if (item === DOTS) {
                return (
                  <IconButton key={index} disabled={true} sx={pagebtn}>
                    &#8230;
                  </IconButton>
                );
              }
          return (
              <IconButton 
              sx={ currentPage === item?pagebtnactive:pagebtn} 
              key={index} onClick={changePage}
              >
                  {item}
              </IconButton>          
            );
          })}
    </Box>
  )
}
