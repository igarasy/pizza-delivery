import React from 'react';
import { usePizzaService } from '../usePizzaService/index';

export interface FirstStepProps {
  name?: string;
  description?: string;
  title?: string;
}

const CentralCard = (props: FirstStepProps) => {
  const { data } = usePizzaService();
  const [step,setStep] = React.useState()

  console.log(data);
// regra para renderizar apenas o id do step que estou, criar estado para o step atual 
//mudar o step no clique do botao 

  return (
    <>
      <h1>{props.name} Tamanho</h1>
      <p>{props.description} Descricao</p>
      <span></span>
      {data?.map(()=>{})}
      
    
    </>
  );
};

export default CentralCard;
