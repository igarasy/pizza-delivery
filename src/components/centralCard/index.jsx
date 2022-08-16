import React from 'react'
import { usePizzaService } from '../usePizzaService/index'
import useStep from '../hooks/useStep'
import HorizontalLabelPositionBelowStepper from '../stepsControl'
import { FormControlLabel, RadioGroup,Radio, CardContent, Card, Grid, Typography } from '@mui/material'
import * as S from './styled'
import { Box } from '@mui/system'

/* export interface FirstStepProps {
  name?: string
  description?: string
  title?: string
}

export interface Options{
  id?: number
  name?: string
  checked?: boolean
} */

const CentralCard = (props) => {
  const { data } = usePizzaService()
  const { previousStep, nextStep, step } = useStep()
  const [optionsSteps, setOptionsSteps] = React.useState({})
  const currentStepId = React.useMemo(
    () => data?.filter((item) => item.id)[step].id,
    [data, step],
  )
  const currentOptions = data?.filter((item) => item.id === currentStepId)

  React.useEffect(() => {
    const options = {}
    data?.map(
      (step) =>
        (options[step.id] = {
          options: step.options.map((option) => {
            return {
              ...option,
              checked: false,
            }
          }),
        }),
    )
    setOptionsSteps(options)
  }, [data])

  const handleCheckedOption = (optionId) => {
    const newOptions = optionsSteps[step+1].options

    newOptions.map((option) => {
      if (option.id === optionId) {
        option.checked = !option.checked
      }
    })
    const newOptionsSteps = {
      ...optionsSteps,
      [step+1]: {
        options: newOptions,
      },
    }
    setOptionsSteps(newOptionsSteps)
  }

  // saber o step que estou alterando
  // saber qual a opcao selecionda
  // adicionar o checked em todos os steps
  // guardo os steps com o state dentro de um effect
  // no clique a funcao irá pegar o step e dará checked na option do id que cliquei
  //criar um novo objeto que recebe as opcoes e adiciona um campo checked para elas
  //criar hook para enviar as opcoes e o que está checkado atualmente

  return (
    <>
      <HorizontalLabelPositionBelowStepper step={step} />
      {currentOptions?.map(({ description }) => (
        <>
          <S.Wrapper>
            <Typography variant="h4" gutterBottom>
              {description}
            </Typography>
          </S.Wrapper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '60px',
            }}
          >
            <Grid container spacing={2} alignItems="center" justify="center">
              {optionsSteps[step + 1]?.options?.map((option) => (
                <Grid item xs={4}>
                  <Card
                    sx={{
                      width: '300px',
                      backgroundColor: '#3071b6',
                      borderRadius: '10px',
                      display: 'flex',
                      height: '80px',
                      margin: '10px',
                    }}
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                      <RadioGroup>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label={option.title}
                          checked={option.checked}
                          onClick={() => handleCheckedOption(option.id)}
                        />
                      </RadioGroup>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ))}
      <S.StepsWrapper>
        <S.StepsContainer>
          <S.StepsButtons
            onClick={() => previousStep(step)}
            disabled={step === 0}
          >
            Anterior
          </S.StepsButtons>
          <S.StepsButtons onClick={() => nextStep(step)}>
            Avançar
          </S.StepsButtons>
        </S.StepsContainer>
      </S.StepsWrapper>
    </>
  )
}

export default CentralCard
