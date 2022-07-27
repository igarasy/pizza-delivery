import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Ecolha o tamanho',
  'Escolha a massa',
  'Escolha o recheio',
  'Escolha a borda',
];

interface Props {
  step: number,
}

export default function HorizontalLabelPositionBelowStepper({step}: Props) {
 
  return (
    <Box sx={{ width: '100%', marginTop: '5%' }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
