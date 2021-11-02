import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TertiaryHeading from '../../../Layout/Headings/TertiaryHeading';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    "&:hover": {
      cursor: "pointer"
    } 
  },
});



const Template = (props) => {
  const classes = useStyles();
  return (
    <Card onClick={props.onClick} className={classes.root}>
      <CardContent>
        <TertiaryHeading>{props.heading}</TertiaryHeading>
        <p>{props.about}</p>
      </CardContent>
    </Card>
  )  

}

export default Template;