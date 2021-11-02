// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import PrimaryHeading from './Components/Layout/Headings/PrimaryHeading';
import SecondaryHeading from './Components/Layout/Headings/SecondaryHeading';
import TemplateSelection from './Components/Choices/Template/TemplateSelection'
import TemplateOne from './Templates/TemplateOne';
// import ImagePosition from './Components/Choices/Format/ImagePosition'
import Text from './Components/Choices/Text';
import ImageChoice from './Components/Choices/ImageChoice'


function App() {
  const [template, setTemplate] = useState({});
  const [primaryTextData, setPrimaryTextData] = useState({
    mobile: '',
    desktop: '',
    both: ''
  });
  const [secondaryTextData, setSecondaryTextData] = useState({
    secondaryMobile: '',
    secondaryDesktop: '',
    secondaryBoth: ''
  });
  const [finePrintTextData, setFinePrintTextData] = useState({
    finePrintMobile: '',
    finePrintDesktop: '',
    finePrintBoth: ''
  });

  const [desktopURLData, setDesktopURLData] = useState('');
  const [mobileURLData, setMobileURLData] = useState('');

  let activatingTemplate = (activeTemplate) => {
    setTemplate(activeTemplate);
  }

  let setPrimaryText = (primary) => {
    setPrimaryTextData(primary)
  }
  let setSecondaryText = (secondary) => {
    setSecondaryTextData(secondary)
  }
  let setFinePrintText = (finePrint) => {
    setFinePrintTextData(finePrint)
  }
  let setDesktopURL = (desktopURL) => {
    setDesktopURLData(desktopURL)
  }
  let setMobileURL = (mobileURL) => {
    setMobileURLData(mobileURL)
  }

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <PrimaryHeading>Create a Category Header</PrimaryHeading>
      <TemplateSelection setActiveTemplate={activatingTemplate} />
      {JSON.stringify(template) !== '{}' ? (
        <>
          <SecondaryHeading>{template.name}</SecondaryHeading>
          {/* {template.options.layoutOptions.image ? (<ImagePosition props={template}/>) : (<>do not render image options</>)}<br/> */}
          {template.options.layoutOptions.textAligment ? (<>render text alignment options</>) : (<>do not render text alignment options</>)}<br/>
          {template.options.layoutOptions.textPosition ? (<>render text position options</>) : (<>do not render text position options</>)}
          <br/><Text setPrimaryText={setPrimaryText} setSecondaryText={setSecondaryText} setFinePrintText={setFinePrintText}/><br/>
          <ImageChoice setDesktopURL={setDesktopURL} setMobileURL={setMobileURL}  />

          <br/><br/><br/>
          <div className='container'>
          <TemplateOne template={template} primaryTextData={primaryTextData} secondaryTextData={secondaryTextData} finePrintData={finePrintTextData} mobileImg={mobileURLData} desktopImg={desktopURLData}/><br/>
          </div>
        </>
        ) : (<div></div>)}

    </div>
  );
}

export default App;
