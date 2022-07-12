import React from 'react';
import * as S from './styled'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  children?: React.ReactNode
}

const Button = (props: ButtonProps) => {
  return <S.Button onClick={props.onClick}>{props.children}</S.Button>;
};

export default Button;
