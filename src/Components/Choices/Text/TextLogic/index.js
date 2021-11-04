import React, { Fragment } from "react";
import TextOption from "../TextOption";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const TextLogic = ({
  textChange,
  both,
  mobile,
  desktop,
  onChange,
  sameText,
  labelText
}) => {
  return (
    <Fragment>
    <FormGroup>
        <FormControlLabel
          onChange={textChange}
          control={<Checkbox />}
          label={`Same ${labelText} for Mobile and Desktop?`}
        />
      </FormGroup>
      {sameText ? (
        <TextOption
          name="both"
          value={both}
          textView="Mobile and Desktop"
          onChange={onChange}
          labelText={labelText}
        />
      ) : (
        <Fragment>
          <TextOption
            name="mobile"
            value={mobile}
            textView="Mobile"
            onChange={onChange}
            labelText={labelText}
          />
          <TextOption
            name="desktop"
            value={desktop}
            textView="Desktop"
            onChange={onChange}
            labelText={labelText}
          />
        </Fragment>
      )}
      </Fragment>
  );
};

export default TextLogic;
