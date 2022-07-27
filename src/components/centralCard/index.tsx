import React from 'react'
import BasicCard from '../basicCard'
import { Grid } from '@mui/material'
import { usePizzaService } from '../usePizzaService/index'
import useStep from '../hooks/useStep'
import HorizontalLabelPositionBelowStepper from '../stepsControl'
import * as S from './styled'
import { Box, flexbox } from '@mui/system'

export interface FirstStepProps {
  name?: string
  description?: string
  title?: string
}

const CentralCard = (props: FirstStepProps) => {
  const { data } = usePizzaService()
  const { previousStep, nextStep, step } = useStep()
  const currentStepId = data?.filter((item) => item.id)[step].id
  const currentOptions = data?.filter((item) => item.id === currentStepId)
  console.log(data)
  return (
    <>
    <HorizontalLabelPositionBelowStepper step={step}/>
      {currentOptions?.map(({ options, description, name }) => (
        <>
          <S.Wrapper>
            <S.Title>{description}</S.Title>
            <S.Paragraph>{name}</S.Paragraph>
          </S.Wrapper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '60px',
            }}
          >
            <Grid container rowSpacing={1}>
              {options.map((option) => (
                <Grid item xs={6}>
                  <BasicCard text={option.title} label={option.title} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ))}
      <S.StepsWrapper>
        <S.StepsContainer>
          <S.StepsButtons onClick={() => previousStep(step)} disabled={step === 0}>
            Anterior
          </S.StepsButtons>
          {step}
          <S.StepsButtons onClick={() => nextStep(step)} >
            Avançar
          </S.StepsButtons>
        </S.StepsContainer>
      </S.StepsWrapper>
    </>
  )
}

export default CentralCard
