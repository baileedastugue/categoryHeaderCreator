import React from 'react';
import Typography from '@mui/material/Typography';

const PrimaryHeading = (props) => {
  return (
    <Typography component='h1' variant='h1'>{props.children}</Typography>
  )
}

export default PrimaryHeading;