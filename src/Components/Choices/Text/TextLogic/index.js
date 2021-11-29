import React, { Fragment } from "react";
import TextOption from "../TextOption";
import { Checkbox, FormGroup, FormControlLabel, Grid } from "@mui/material";

const TextLogic = ({
  onSameChange,
  bothValue,
  mobileValue,
  desktopValue,
  onChange,
  sameTextChecked,
  labelText,
  mobileName,
  desktopName,
  bothName,
}) => {
  return (
    <Grid container spacing={2} mb={2}>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            checked={sameTextChecked}
            onChange={onSameChange}
            control={<Checkbox />}
            label={`Same ${labelText} for Mobile and Desktop?`}
          />
        </FormGroup>
      </Grid>
      {sameTextChecked ? (
        <Grid item xs={12}>
          <TextOption
            name={bothName}
            value={bothValue}
            textView="Mobile and Desktop"
            onChange={onChange}
            labelText={labelText}
          />
        </Grid>
      ) : (
        <Fragment>
          <Grid item xs={6}>
            <TextOption
              name={mobileName}
              value={mobileValue}
              textView="Mobile"
              onChange={onChange}
              labelText={labelText}
            />
          </Grid>
          <Grid item xs={6}>
            <TextOption
              name={desktopName}
              value={desktopValue}
              textView="Desktop"
              onChange={onChange}
              labelText={labelText}
            />
          </Grid>
        </Fragment>
      )}
    </Grid>
  );
};

export default TextLogic;
