import React, { useState, useEffect, Fragment } from "react";
import TextLogic from "./TextLogic";

const Text = ({ setPrimaryText, setSecondaryText, setFinePrintText }) => {
  const [primaryTextData, setPrimaryTextData] = useState({
    primaryMobile: "",
    primaryDesktop: "",
    primaryBoth: "",
  });
  const { primaryMobile, primaryDesktop, primaryBoth } = primaryTextData;
  const onPrimaryChange = (event) => {
    setPrimaryTextData({
      ...primaryTextData,
      [event.target.name]: event.target.value,
    });
  };
  const [samePrimaryTextChecked, setSamePrimaryTextChecked] = useState(false);
  useEffect(() => {
    setPrimaryText(primaryTextData);
  });
  const handleSamePrimaryTextChange = () => {
    setSamePrimaryTextChecked(!samePrimaryTextChecked);
    setPrimaryTextData({
      primaryMobile: "",
      primaryDesktop: "",
      primaryBoth: "",
    });
  };

  const [secondaryTextData, setSecondaryTextData] = useState({
    secondaryMobile: "",
    secondaryDesktop: "",
    secondaryBoth: "",
  });
  const { secondaryMobile, secondaryDesktop, secondaryBoth } =
    secondaryTextData;
  const onSecondaryChange = (event) => {
    setSecondaryTextData({
      ...secondaryTextData,
      [event.target.name]: event.target.value,
    });
  };
  const [sameSecondaryTextChecked, setSameSecondaryTextChecked] =
    useState(false);
  useEffect(() => {
    setSecondaryText(secondaryTextData);
  });
  const handleSameSecondaryTextChange = () => {
    setSameSecondaryTextChecked(!sameSecondaryTextChecked);
    setSecondaryTextData({
      secondaryMobile: "",
      secondaryDesktop: "",
      secondaryBoth: "",
    });
  };

  const [finePrintData, setFinePrintData] = useState({
    finePrintMobile: "",
    finePrintDesktop: "",
    finePrintBoth: "",
  });
  const { finePrintMobile, finePrintDesktop, finePrintBoth } =
    finePrintData;
  const onFinePrintChange = (event) => {
    setFinePrintData({
      ...finePrintData,
      [event.target.name]: event.target.value,
    });
  };
  const [sameFinePrintChecked, setSameFinePrintChecked] =
    useState(false);
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
        mobileName="primaryMobile"
        desktopName="primaryDesktop"
        bothName="primaryBoth"
        labelText="Primary Text"
        sameTextChecked={samePrimaryTextChecked}
        onSameChange={handleSamePrimaryTextChange}
        mobileValue={primaryMobile}
        desktopValue={primaryDesktop}
        bothValue={primaryBoth}
        onChange={(event) => onPrimaryChange(event)}
      />
      <TextLogic
        mobileName="secondaryMobile"
        desktopName="secondaryDesktop"
        bothName="secondaryBoth"
        labelText="Secondary Text"
        sameTextChecked={sameSecondaryTextChecked}
        onSameChange={handleSameSecondaryTextChange}
        mobileValue={secondaryMobile}
        desktopValue={secondaryDesktop}
        bothValue={secondaryBoth}
        onChange={(event) => onSecondaryChange(event)}
      />
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

export default Text;
