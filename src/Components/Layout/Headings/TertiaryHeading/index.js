import React from 'react';
import Typography from '@mui/material/Typography';

const TertiaryHeading = (props) => {
  return (
    <Typography variant='h3' component='h3'>{props.children}</Typography>
  )
}

export default TertiaryHeading;