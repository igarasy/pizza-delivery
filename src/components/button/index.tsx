import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: () => void
  children?: React.ReactNode
}

const ButtonOrder = (props: ButtonProps) => {
  const navigate = useNavigate()
  return (
    <Button
      variant="outlined"
      onClick={()=> navigate('second-step')}
      style={{
        margin: '100px 650px',
        width: '200px',
        cursor: 'pointer',
        height: '100px',
       
      }}
    >
    Peça uma pizza
    </Button>
  )
}

export default ButtonOrder
