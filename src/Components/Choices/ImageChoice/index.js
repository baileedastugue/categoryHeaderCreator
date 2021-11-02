import React, { useState, useEffect } from 'react';
import Image from './Image';

const ImageChoice = ({ setMobileURL, setDesktopURL }) => {
  const [imageURLData, setImageURLData] = useState({
    desktopImageURL: '',
    mobileImageURL: ''
  });

  const { desktopImageURL, mobileImageURL } = imageURLData;

  useEffect(() => {
    setDesktopURL(imageURLData.desktopImageURL);
    setMobileURL(imageURLData.mobileImageURL);
  });


  const onChange = (event) => {
    setImageURLData({ ...imageURLData, [event.target.name]: event.target.value });
  };

  return (
    <>
    <Image name='mobileImageURL' value={mobileImageURL} view='Mobile' onChange={onChange} /><br />
    <Image name='desktopImageURL' value={desktopImageURL} view='Desktop' onChange={onChange} /><br />
    </>
    )
}

export default ImageChoice;


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