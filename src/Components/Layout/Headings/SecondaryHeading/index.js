import React from 'react';
import Typography from '@mui/material/Typography';

const SecondaryHeading = (props) => {
  return (
    <Typography variant='h2' component='h2'>{props.children}</Typography>
  )
}

export default SecondaryHeading;