import React, { useState, useEffect } from 'react';
import PrimaryText from './PrimaryText';
import SecondaryText from './SecondaryText';
import FinePrint from './FinePrint';

const Text = ({ setPrimaryText, setSecondaryText, setFinePrintText }) => {
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

  const { mobile, desktop, both } = primaryTextData;
  const { secondaryMobile, secondaryDesktop, secondaryBoth } = secondaryTextData;
  const { finePrintMobile, finePrintDesktop, finePrintBoth } = finePrintTextData;

  const onPrimaryChange = (event) => {
    setPrimaryTextData({ ...primaryTextData, [event.target.name]: event.target.value });
  };

  const primaryTextChange = () => {
    setSamePrimaryText(!samePrimaryText);
    setPrimaryTextData({ ...primaryTextData, mobile: '', desktop: '', both: '' });
  };

  const onSecondaryChange = (event) => {
    setSecondaryTextData({ ...secondaryTextData, [event.target.name]: event.target.value });
  };

  const secondaryTextChange = () => {
    setSameSecondaryText(!sameSecondaryText);
    setSecondaryTextData({ ...secondaryTextData, secondaryMobile: '', secondaryDesktop: '', secondaryBoth: '' });
  };

  const onFinePrintChange = (event) => {
    setFinePrintTextData({ ...finePrintTextData, [event.target.name]: event.target.value });
  };

  const finePrintTextChange = () => {
    setSameFinePrintText(!sameFinePrintText);
    setFinePrintTextData({ ...finePrintTextData, finePrintMobile: '', finePrintDesktop: '', finePrintBoth: '' });
  };

  return (<>
    <label htmlFor='primary-text' className='form-label'>Same primary text for mobile and desktop?</label>&nbsp;
    <input type='checkbox' name='same' onChange={primaryTextChange} /><br />
    { samePrimaryText ? 
      (<PrimaryText name='both' value={both} textView='Mobile and Desktop' onChange={onPrimaryChange} />) : 
      (<><PrimaryText name='mobile' value={mobile} textView='Mobile' onChange={onPrimaryChange} /><br />
      <PrimaryText name='desktop' value={desktop} textView='Desktop' onChange={onPrimaryChange} /></>)}


    <br />

    <label htmlFor='secondary-text' className='form-label'>Same secondary text for mobile and desktop?</label>&nbsp;
    <input type='checkbox' name='same' onChange={secondaryTextChange} /><br />
    {sameSecondaryText ? 
      (<SecondaryText name='secondaryBoth' value={secondaryBoth} textView='Mobile and Desktop' onSecondaryChange={onSecondaryChange} />) :
      (<><SecondaryText name='secondaryMobile' value={secondaryMobile} textView='Mobile' onSecondaryChange={onSecondaryChange} /><br />
      <SecondaryText name='secondaryDesktop' value={secondaryDesktop} textView='Desktop' onSecondaryChange={onSecondaryChange} /></>)}
<br/>

<label htmlFor='finePrint-text' className='form-label'>Same fine print text for mobile and desktop?</label>&nbsp;
    <input type='checkbox' name='same' onChange={finePrintTextChange} /><br />
    {sameFinePrintText ? 
      (<FinePrint name='finePrintBoth' value={finePrintBoth} textView='Mobile and Desktop' onFinePrintChange={onFinePrintChange} />) :
      (<><FinePrint name='finePrintMobile' value={finePrintMobile} textView='Mobile' onFinePrintChange={onFinePrintChange} /><br />
      <FinePrint name='finePrintDesktop' value={finePrintDesktop} textView='Desktop' onFinePrintChange={onFinePrintChange} /></>)}




  </>)
}

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