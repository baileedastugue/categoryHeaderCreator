import React, { Fragment, useState, useEffect } from "react";
import TextLogic from "../TextLogic";

const SecondaryText = ({setSecondaryText}) => {
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

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default SecondaryText;
