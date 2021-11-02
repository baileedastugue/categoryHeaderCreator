import React from 'react';
import TertiaryHeading from '../../../Layout/Headings/TertiaryHeading';

const Template = (props) => {
  return (
    <div className='card col-4' onClick={props.onClick}>
      <TertiaryHeading>{props.heading}</TertiaryHeading>
      <p>{props.about}</p>
    </div>
  )  

}

export default Template;