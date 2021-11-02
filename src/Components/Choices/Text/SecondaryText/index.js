import React from 'react';

const SecondaryText = (props) => {
  return (
    <>
    <label htmlFor='secondary-text' className='form-label'>Secondary Text for {props.textView}</label>&nbsp;
    <input type='text' name={props.name} value={props.value} className={props.textView} onChange={props.onSecondaryChange}/>
    </>
  )
}

export default SecondaryText;