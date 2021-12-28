import React from "react";
import { TextField } from "@mui/material";

const TextOption = (props) => {
  return (
    
    <TextField
      fullWidth
      id="outlined-basic"
      label={`${props.labelText} for ${props.textView}`}
      variant="filled"
      type="text"
      name={props.name}
      value={props.value}
      className={props.textView}
      onChange={props.onChange}
    />
  )
};

export default TextOption;
