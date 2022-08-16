import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 1330px;
`;

export const CardWrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  max-height: 180px;
  display: flex;
  flex-wrap: nowrap;
  
  align-items: center;
  margin-top: 10px;

  border: solid 1px red;
`

export const StepsWrapper = styled.div`
  display: flex;
  margin-left: 70px;
`

export const StepsButtons = styled.button`
 border-radius: 5px;
 border: none;
 cursor: pointer;
 padding: 10px;
 
 &:hover{
  background-color: grey;
  
 }
`
export const StepsContainer = styled.div`
width: 1330px ;
display: flex;
margin-top: 10px;
justify-content: space-between;
`