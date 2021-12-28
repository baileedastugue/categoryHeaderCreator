import React, { Fragment, useState, useEffect } from "react";
import TextLogic from "../TextLogic";

const FinePrint = ({ setFinePrintText }) => {
  const [finePrintData, setFinePrintData] = useState({
    finePrintMobile: "",
    finePrintDesktop: "",
    finePrintBoth: "",
  });
  const { finePrintMobile, finePrintDesktop, finePrintBoth } = finePrintData;
  const onFinePrintChange = (event) => {
    setFinePrintData({
      ...finePrintData,
      [event.target.name]: event.target.value,
    });
  };
  const [sameFinePrintChecked, setSameFinePrintChecked] = useState(false);
  useEffect(() => {
    setFinePrintText(finePrintData);
  });
  const handleSameFinePrintChange = () => {
    setSameFinePrintChecked(!sameFinePrintChecked);
    setFinePrintData({
      finePrintMobile: "",
      finePrintDesktop: "",
      finePrintBoth: "",
    });
  };
  return (
    <Fragment>
      <TextLogic
        mobileName="finePrintMobile"
        desktopName="finePrintDesktop"
        bothName="finePrintBoth"
        labelText="Fine Print"
        sameTextChecked={sameFinePrintChecked}
        onSameChange={handleSameFinePrintChange}
        mobileValue={finePrintMobile}
        desktopValue={finePrintDesktop}
        bothValue={finePrintBoth}
        onChange={(event) => onFinePrintChange(event)}
      />
    </Fragment>
  );
};

export default FinePrint;
