import React, { Fragment, useState, useEffect } from "react";
import TextLogic from "../TextLogic";

const PrimaryText = ({setPrimaryText}) => {
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
    </Fragment>
  )
}

export default PrimaryText
