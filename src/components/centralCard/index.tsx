import React from 'react'
import BasicCard from '../card'
import { usePizzaService } from '../usePizzaService/index'
import useStep from './useStep'

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

  // regra para renderizar apenas o id do step que estou, criar estado para o step atual
  //mudar o step no clique do botao

  return (
    <>
      {currentOptions?.map(({ options, description, name }) => (
        <>
          <h1>{description}</h1>
          <p>{name}</p>
          {options.map((option) => (
            <BasicCard text={option.title}/>
          ))}
        </>
      ))}
      <div>
        <button onClick={() => previousStep(step)}>Anterior</button>
        {step}
        <button onClick={() => nextStep(step)}>Avançar</button>
        
      </div>
    </>
  )
}

export default CentralCard
