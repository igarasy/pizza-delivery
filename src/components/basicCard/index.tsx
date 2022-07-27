import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ControlledRadioButtonsGroup from '../../radio'

interface basicCardprops {
  text: string,
  label: string
}

export default function BasicCard(props: basicCardprops) {
  return (
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
      <CardContent sx={{display: 'flex', alignItems: 'center'}}>
        <ControlledRadioButtonsGroup label={props.label}/>
      </CardContent>
    </Card>
  )
}
