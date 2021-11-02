import React from 'react';

const PrimaryText = (props) => {
  return (
    <>
    <label htmlFor='primary-text' className='form-label'>Primary Text for {props.textView}</label>&nbsp;
    <input type='text' name={props.name} value={props.value} className={props.textView} onChange={props.onChange}/>
    </>
  )
}

export default PrimaryText;