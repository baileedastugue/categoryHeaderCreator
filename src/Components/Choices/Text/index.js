import React, { useState, useEffect, Fragment } from "react";
import TextLogic from "./TextLogic";

const Text = ({ setPrimaryText, setSecondaryText, setFinePrintText }) => {
  const [primaryTextData, setPrimaryTextData] = useState({
    primaryMobile: "",
    primaryDesktop: "",
    primaryBoth: "",
  });
  const [secondaryTextData, setSecondaryTextData] = useState({
    secondaryMobile: "",
    secondaryDesktop: "",
    secondaryBoth: "",
  });
  const [finePrintTextData, setFinePrintTextData] = useState({
    finePrintMobile: "",
    finePrintDesktop: "",
    finePrintBoth: "",
  });

  const [samePrimaryText, setSamePrimaryText] = useState(false);
  const [sameSecondaryText, setSameSecondaryText] = useState(false);
  const [sameFinePrintText, setSameFinePrintText] = useState(false);

  useEffect(() => {
    setPrimaryText(primaryTextData);
  });
  useEffect(() => {
    setSecondaryText(secondaryTextData);
  });
  useEffect(() => {
    setFinePrintText(finePrintTextData);
  });

  const { primaryMobile, primaryDesktop, primaryBoth } = primaryTextData;
  const { secondaryMobile, secondaryDesktop, secondaryBoth } =
    secondaryTextData;
  const { finePrintMobile, finePrintDesktop, finePrintBoth } =
    finePrintTextData;

  const onPrimaryChange = (event) => {
    setPrimaryTextData({
      ...primaryTextData,
      [event.target.name]: event.target.value,
    });
  };

  const primaryTextChange = () => {
    setSamePrimaryText(!samePrimaryText);
    setPrimaryTextData({
      ...primaryTextData,
      primaryMobile: "",
      primaryDesktop: "",
      primaryBoth: "",
    });
  };

  const onSecondaryChange = (event) => {
    setSecondaryTextData({
      ...secondaryTextData,
      [event.target.name]: event.target.value,
    });
  };

  const secondaryTextChange = () => {
    setSameSecondaryText(!sameSecondaryText);
    setSecondaryTextData({
      ...secondaryTextData,
      secondaryMobile: "",
      secondaryDesktop: "",
      secondaryBoth: "",
    });
  };

  const onFinePrintChange = (event) => {
    setFinePrintTextData({
      ...finePrintTextData,
      [event.target.name]: event.target.value,
    });
  };

  const finePrintTextChange = () => {
    setSameFinePrintText(!sameFinePrintText);
    setFinePrintTextData({
      ...finePrintTextData,
      finePrintMobile: "",
      finePrintDesktop: "",
      finePrintBoth: "",
    });
  };

  return (
    <Fragment>
      <TextLogic
        textChange={primaryTextChange}
        both={primaryBoth}
        mobile={primaryMobile}
        desktop={primaryDesktop}
        onChange={onPrimaryChange}
        labelText="Primary Text"
        sameText={samePrimaryText}
      />
      <TextLogic
        textChange={secondaryTextChange}
        both={secondaryBoth}
        mobile={secondaryMobile}
        desktop={secondaryDesktop}
        onChange={onSecondaryChange}
        labelText="Secondary Text"
        sameText={sameSecondaryText}
      />
      <TextLogic
        textChange={finePrintTextChange}
        both={finePrintBoth}
        mobile={finePrintMobile}
        desktop={finePrintDesktop}
        onChange={onFinePrintChange}
        labelText="Fine Print"
        sameText={sameFinePrintText}
      />
    </Fragment>
  );
};

export default Text;

// template one
// css
// template two
// css
// template three
// css
// text align classes:
// left
// right
// center
// is the mobile and desktop text the same?
// yes
// primary text
// no
// primary text mobile
// primary text desktop
// pass text to template js
// convert text to markdown file that can be copied and pasted
