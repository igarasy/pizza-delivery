import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface basicCardprops {
  text: string
}

export default function BasicCard(props: basicCardprops ) {
  return (
    <Card sx={{ width: 250 , backgroundColor: '#3071b6', borderRadius: '10px', display: 'inline-block', margin:'10px'}}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}