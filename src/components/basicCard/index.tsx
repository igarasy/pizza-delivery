import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Radio from '@mui/material/Radio'
import { FormControlLabel, RadioGroup } from '@mui/material'

interface basicCardprops {
  text: string
  label: string
  id: string
  checked: boolean
  onClick: (id: string) => void
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
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup>
          <FormControlLabel
            value="female"
            control={<Radio />}
            label={props.text}
            checked={props.checked}
            onClick={() => props.onClick}
          />
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
