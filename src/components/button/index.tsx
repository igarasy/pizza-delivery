import React from 'react';

export interface ButtonProps {
  onClick: () => void;
  buttonName: string;
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.buttonName}</button>;
};

export default Button;
