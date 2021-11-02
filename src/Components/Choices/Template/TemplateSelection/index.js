import React, { useState, useEffect } from "react";
import templateData from "../../../../Templates/TemplateData/templateData";
import TemplateCard from "../TemplateCard";
import { Grid } from "@mui/material";

const TemplateSelection = ({ setActiveTemplate }) => {

  const [templateSelected, selectTemplate] = useState({});
  const chooseTemplate = (event, temp) => {
    event.preventDefault();
    if (temp) {
      selectTemplate({ ...temp });
    }
  };

  useEffect(() => {
    setActiveTemplate(templateSelected);
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={2} 
    >
      {templateData.map((temp) => (
        <Grid item xs={4} >
          <TemplateCard
            key={temp.id}
            heading={temp.name}
            about={temp.about}
            onClick={(event) => chooseTemplate(event, temp)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TemplateSelection;
