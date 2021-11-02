import React, {useState, useEffect} from 'react';
import templateData from '../../../../Templates/TemplateData/templateData'
import TemplateCard from '../TemplateCard';

const TemplateSelection = ({setActiveTemplate}) => {
  const [templateSelected, selectTemplate] = useState({});
  const chooseTemplate = (event, temp) => {
    event.preventDefault();
    if (temp) {
      selectTemplate({...temp});
    }
  }

  useEffect (() => {
    setActiveTemplate(templateSelected);
  })

  return (
    <div className='container'>
      <div className='row'>
        {templateData.map((temp) => (
          <TemplateCard key={temp.id} heading={temp.name} about={temp.about} onClick={(event) => chooseTemplate(event, temp)}/>
        ))}
      </div>
    </div>)
}

export default TemplateSelection;