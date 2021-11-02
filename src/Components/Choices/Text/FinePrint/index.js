import React from 'react';

const FinePrint = (props) => {
  return (
    <>
    <label htmlFor='finePrint-text' className='form-label'>Fine Print Text for {props.textView}</label>&nbsp;
    <input type='text' name={props.name} value={props.value} className={props.textView} onChange={props.onFinePrintChange}/>
    </>
  )
}

export default FinePrint;