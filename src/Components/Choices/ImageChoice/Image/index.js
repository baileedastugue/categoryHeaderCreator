import React from 'react';

const Image = (props) => {
  return (
    <>
    <label  className='form-label'>{props.view} Image URL</label>&nbsp;
    <input type='text' name={props.name} value={props.value} className={props.view} onChange={props.onChange}/>
    </>
  )
}

export default Image;