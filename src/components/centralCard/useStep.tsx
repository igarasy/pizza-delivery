import React from 'react'

const useStep = () => {
  const [step, setStep] = React.useState<number>(0)

  const nextStep = (step: number) => {
    if(step < 3)
    return setStep(step + 1)
  }

  const previousStep = (step: number) => {
    if (step > 0) {
      return setStep(step - 1)
    }
    return step
  }

  return {
    step,
    nextStep,
    previousStep
  }
}

export default useStep
