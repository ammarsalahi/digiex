import {createTheme} from '@mui/material/styles';

const  textTheme = createTheme({
    direction:'rtl',
    palette:{
      digi: {
        main: '#cbe4eb',
        dark: '#cbe4eb',
        light:'#cbe4eb',
      },
      digigrey:{
        main: '#a4a6b4',
        dark: '#a4a6b4',
        contrastText: '#a4a6b4',
        light:'#a4a6b4s',
      },
      primary:{
        main:"#424BFB",
        dark: '#424BFB',
        light:'#424BFB',
      },
      whiteNo:{
        light: '#fff',
        main: '#fff',
        dark: '#fff',
        contrastText: '#fff',
      }
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
              "& fieldset": {
                border: "1px solid #cbe4eb",
                borderRadius:"8px",
                fontSize:'84px',
              },
          },
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
              "& fieldset": {
                border: "1px solid #cbe4eb",
                borderRadius:"8px",
                minHeight:"63px",
                maxHeight:"63px"
              },
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
              "& fieldset": {
                borderRadius:"8px",
              },
          }
        }
      },
     
    }
  });

export default textTheme;  