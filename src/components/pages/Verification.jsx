import React from 'react'
import StepOne from '../elements/verification/StepOne';
import StepThree from '../elements/verification/StepThree';
import StepTwo from '../elements/verification/StepTwo';
import { Stepper,Step,Typography,Box } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import StepLabel ,{stepLabelClasses} from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';

 const MyConnector = styled(StepConnector)(({ theme }) => ({
   [`&.${stepConnectorClasses.alternativeLabel}`]: {
     top: 15,
     marginLeft:"16px",
     marginRight:"16px",
   },
   
   [`&.${stepConnectorClasses.active}`]: {
     [`& .${stepConnectorClasses.line}`]: {
       border:"1px dashed #424BFB",
     },
   },
   [`&.${stepConnectorClasses.completed}`]: {
     [`& .${stepConnectorClasses.line}`]: {
      border:"1px solid rgba(81, 184, 168, 1)",
     },
   },
   [`&.${stepConnectorClasses.disabled}`]: {
    [`& .${stepConnectorClasses.line}`]: {
     border:"1px dashed rgba(193, 194, 220, 1)",
     color:"#fff"
    },
  },
}));

const stepstyle={
  '& .MuiStepLabel-root .Mui-completed': {
    color: 'rgba(81, 184, 168, 1)',
  },
  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
    {
      color: 'rgba(81, 184, 168, 1)', // Just text label (COMPLETED)
    },
  '& .MuiStepLabel-root .Mui-active': {
    color: '#424BFB', // circle color (ACTIVE)
  },
  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel': {
      color: '#424BFB', // Just text label (ACTIVE)
    },
  '& .MuiStepLabel-root .MuiStepIcon-text': {
    fontSize:"12px",
    
  },
  // "& .Mui-disabled .MuiStepIcon-root": { 
  //   color: "#fff" ,
  // },
  '& .MuiStepLabel-root .MuiStepIcon-root': {
    width:"32px",
    height:"32px",
    justifyContent:"center"
  },
}


export default function Verification() {
  
  const steps = ['تطبیق اطلاعات هویتی', 'قبول قوانین', 'بارگذاری مدارک'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
   
  const handleNext=()=>{
    setActiveStep((newStep)=>newStep+1);
  }

  return (
    <div>
      <div className='d-lg-block d-none'>
      <Box  className="row d-flex justify-content-center stepcontent-desk backgroundClr">
      <Stepper activeStep={activeStep} 
        connector={<MyConnector/>}
        
      >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} 
                    sx={stepstyle}
                    >
                     <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
            </Stepper>
      </Box>
      </div>
       <div className='d-lg-none d-block'>
      <Box className="row d-flex justify-content-center stepcontent-mob bg-light">
      <Stepper activeStep={activeStep} alternativeLabel
        connector={<MyConnector />}
      >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step 
                    sx={stepstyle}
                    key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
            </Stepper>
      </Box>
      </div> 
      
            
      <Box className="mycontainer">
        {activeStep === 0 &&  <StepOne onNext={handleNext}/>}
        {activeStep === 1 &&  <StepTwo onNext={handleNext}/>}
        {activeStep === 2 &&  <StepThree onNext={handleNext}/>}

      </Box>
    </div>
  )
}
