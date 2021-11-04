// import logo from './logo.svg';
// import './App.css';
import React, { useState, Fragment } from "react";
import PrimaryHeading from "./Components/Layout/Headings/PrimaryHeading";
import SecondaryHeading from "./Components/Layout/Headings/SecondaryHeading";
import TemplateSelection from "./Components/Choices/Template/TemplateSelection";
import TemplateBase from "./Templates/TemplateBase";
import Text from "./Components/Choices/Text";
import ImageChoice from "./Components/Choices/ImageChoice";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

function App() {
  const [template, setTemplate] = useState({});
  const [primaryTextData, setPrimaryTextData] = useState({
    mobile: "",
    desktop: "",
    both: "",
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

  const [desktopURLData, setDesktopURLData] = useState("");
  const [mobileURLData, setMobileURLData] = useState("");

  let activatingTemplate = (activeTemplate) => {
    setTemplate(activeTemplate);
  };
  let setPrimaryText = (primary) => {
    setPrimaryTextData(primary);
  };
  let setSecondaryText = (secondary) => {
    setSecondaryTextData(secondary);
  };
  let setFinePrintText = (finePrint) => {
    setFinePrintTextData(finePrint);
  };
  let setDesktopURL = (desktopURL) => {
    setDesktopURLData(desktopURL);
  };
  let setMobileURL = (mobileURL) => {
    setMobileURLData(mobileURL);
  };

  return (
    <div className="App">
      <CssBaseline />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Container>
        <PrimaryHeading>Create a Category Header</PrimaryHeading>
        <TemplateSelection setActiveTemplate={activatingTemplate} />
        {JSON.stringify(template) !== "{}" ? (
          <Fragment>
            <SecondaryHeading>{template.name}</SecondaryHeading>
            {/* {template.options.layoutOptions.textAligment ? (
              <>render text alignment options</>
            ) : (
              <>do not render text alignment options</>
            )}
            <br />
            {template.options.layoutOptions.textPosition ? (
              <>render text position options</>
            ) : (
              <>do not render text position options</>
            )}
            <br /> */}
            <Text
              setPrimaryText={setPrimaryText}
              setSecondaryText={setSecondaryText}
              setFinePrintText={setFinePrintText}
            />
            <br />
            <ImageChoice
              setDesktopURL={setDesktopURL}
              setMobileURL={setMobileURL}
            />
            <div className="container">
              <TemplateBase
                template={template}
                primaryTextData={primaryTextData}
                secondaryTextData={secondaryTextData}
                finePrintData={finePrintTextData}
                mobileImg={mobileURLData}
                desktopImg={desktopURLData}
              />
            </div>
          </Fragment>
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  );
}

export default App;
