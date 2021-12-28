import React, { Fragment } from "react";
import FinePrint from "./FinePrint";
import SecondaryText from "./SecondaryText";
import PrimaryText from "./PrimaryText";

const Text = ({ setPrimaryText, setSecondaryText, setFinePrintText }) => {
  return (
    <Fragment>
      <PrimaryText setPrimaryText={setPrimaryText}/>
      <SecondaryText setSecondaryText={setSecondaryText}/>
      <FinePrint setFinePrintText={setFinePrintText}/>
    </Fragment>
  );
};

export default Text;
