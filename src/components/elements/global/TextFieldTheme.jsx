import {createTheme} from '@mui/material/styles';
const  textTheme = createTheme({
    direction:'rtl',
    palette:{
      digi: {
        main: '#a4a6b4',
      },
      primary:{
        main:"#424BFB"
      },
      whiteNo:{
        light: '#fff',
        main: '#fff',
        dark: '#fff',
        contrastText: '$fff',
      }
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
              "& fieldset": {
                border: "1px solid #a4a6b4",
                borderRadius:"8px",
              },
              
          },
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
              "& fieldset": {
                border: "1px solid #a4a6b4",
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
      //   MuiStepIcon: {
      //     styleOverrides: {
      //       root: {
      //          color: 'red',
      //       },
      //       active:{
      //          color:"green"
      //       }
      //   } 
      //  }
      }
  });

export default textTheme;  