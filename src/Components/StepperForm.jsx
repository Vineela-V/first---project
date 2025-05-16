import { Label } from '@mui/icons-material';
import { Stepper, Step, StepLabel, Button, Typography, Box} from '@mui/material';
import { useState } from 'react';

const steps = ['Account Info', 'Address', 'Confirm'];
export default function StepperForm() {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);

    return (
        <Box sx={{ mt: 4}}>
          <Typography variant='h6'>Singnup</Typography>
          <Stepper activeStep={activeStep} sx={{ mt: 2}}>
             {steps.map((Label) => (
                <Step key={Label}><StepLabel>{Label}</StepLabel></Step>
             ))}
          </Stepper>
          <Box sx={{ mt: 2}}>
            <Typography>Step {activeStep + 1}: {steps[activeStep]}</Typography>
            <Box  sx={{ mt: 2}}>
                <Button onClick={handleBack} disabled={activeStep === 0}>Back</Button>
                <Button variant="contained" onClick={handleNext} disabled={activeStep === steps.length - 1}>Next</Button>
            </Box>
          </Box>
        </Box>
    );
}