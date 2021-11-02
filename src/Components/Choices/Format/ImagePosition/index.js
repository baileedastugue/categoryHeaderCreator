import react, {useEffect, useState} from 'react';

const ImagePosition = ({ props }) => {
  const layoutOps = props.options.layoutOptions;
  const [imagePosition, setImagePosition] = useState("right")
  console.log(layoutOps);
  const onChange = (id) => {
    setImagePosition(id)
  }

  // useEffect(() => {
  //   parentCall(imagePosition)
  // })
  return (
    <>
      <div className='col-2'>
        Image is to the:
      </div>
      <div className='col-2'>
        {layoutOps.image.variations.map((imagePos, index) => {
          return (<div className="form-check" key={index}>
            <input className="form-check-input" type="radio" name="image-position" id={imagePos} onChange={(event) => onChange(imagePos, event)} />
            <label className="form-check-label" htmlFor={imagePos} >
              {imagePos}
            </label>
          </div>)
        })}


      </div>
    </>
  )
}

export default ImagePosition;