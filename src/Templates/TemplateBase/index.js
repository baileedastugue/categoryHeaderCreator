/* eslint-disable no-lone-blocks */
// import React from 'react';

const TemplateBase = (props) => {

let layoutOptions = props.template.options.layoutOptions;

let primaryText = ''; 
let secondaryText = ''; 
let finePrintText = ''; 
let mobileImgURL = props.mobileImg;
let desktopImgURL = props.desktopImg;

console.log(props);

let layoutImageOptions;

if (layoutOptions.image[0]) {
  layoutImageOptions = layoutOptions.image[0];
} else {
  layoutImageOptions = '';
}

let mobileCSS = `
@import url("https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@400;700&family=Lato:wght@400;700&family=Libre+Baskerville:wght@400;700&display=swap");
#categoryHeader p {
  padding: 0;
  margin: 0;
}
#categoryHeader .content {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  line-height: 0;
}
#categoryHeader .finePrint {
  font-size: 2.6vw;
  font-weight: 500;
  line-height: 1;
  font-family: 'Lato', sans-serif;
}
#categoryHeader .primary,
#categoryHeader .secondary {
  margin: 0;
}
#categoryHeader .primary {
  font-size: 4vw;
  font-weight: 400;
  line-height: 1.2;
  font-family: 'Libre Baskerville', serif;
}
#categoryHeader .secondary {
  font-size: 3.2vw;
  font-weight: 400;
  line-height: 1.4;
  font-family: 'Lato', sans-serif;
}
#categoryHeader .view-desktop {
  display: none;
}
#categoryHeader .view-mobile {
  display: inline-block;
}
.un-assistive #categoryHeader .outer-text-container {
  background-color: #fff;
  color: #000;
}
`

let desktopCSS = `
#categoryHeader .finePrint {
  font-size: 1vw;
}

#categoryHeader .primary {
  font-size: 2.1vw;
}

#categoryHeader .secondary {
  font-size: 1.5vw;
}
#categoryHeader .view-desktop {
  display: block;
}
#categoryHeader .view-mobile {
  display: none;
}
`

if (props.template.class === 'template-1') {
  mobileCSS += `
  #categoryHeader.template-1 .image-container img {
    width: 100%;
    height: auto;
  }

  #categoryHeader .content {
    background-color: #f7f0eb;
  }
  
  #categoryHeader.template-1.right .outer-text-container {
    color: #3a3a3a;
    width: 60%;
  }
  #categoryHeader.template-1 .image-container {
    float: ${layoutImageOptions};
    width: 40%;
  }
  #categoryHeader .secondary {
    padding: 0 10% 0 0;
  }
  #categoryHeader .primary {
    padding: 0 0 3%;
  }
  #categoryHeader .finePrint {
    padding: 3% 5% 0 0;
  }
  `
  desktopCSS += `
  #categoryHeader.template-1 .outer-text-container {
    width: 55%;
  }
  #categoryHeader.template-1 .image-container {
    width: 45%;
  }
  `
}

if (props.template.class === 'template-2') {
  mobileCSS += `
  #categoryHeader img {
    width: 100%;
    height: auto;
  }
  #categoryHeader .image-container {
    width: 100%;
  }
  #categoryHeader .content {
    position: relative;
  }
  #categoryHeader .text-container {
        color: #3a3a3a;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 67%;
      }
    #categoryHeader .primary, 
    #categoryHeader .secondary {
      padding: 0 1%;
    }

    #categoryHeader .finePrint {
      padding: 2% 0 0;
    }
  `
  desktopCSS += `
  #categoryHeader .text-container {
    padding: 5%;
    width: 90%;
  }
`
}


if (props.primaryTextboth) {
  primaryText = `<h1 class='primary'>${props.primaryTextData.both}</h1>`  
} 
if (props.primaryTextData.mobile) {
  primaryText += `<h1 class='view-mobile primary'>${props.primaryTextData.mobile}</h1>`
} 
if (props.primaryTextData.desktop) {
  primaryText += `<h1 class='view-desktop primary'>${props.primaryTextData.desktop}</h1>`
} 
if (props.secondaryTextData.secondaryBoth) {
  secondaryText = `<h2 class='secondary'>${props.secondaryTextData.secondaryBoth}</h2>`  
} 
if (props.secondaryTextData.secondaryMobile) {
  secondaryText += `<h2 class='view-mobile secondary'>${props.secondaryTextData.secondaryMobile}</h2>`
} 
if (props.secondaryTextData.secondaryDesktop) {
  secondaryText += `<h2 class='view-desktop secondary'>${props.secondaryTextData.secondaryDesktop}</h2>`
} 
if (props.finePrintData.finePrintBoth) {
  finePrintText = `<p class='finePrint'>${props.finePrintData.finePrintBoth}</p>`  
} 
if (props.finePrintData.finePrintMobile) {
  finePrintText += `<p class='view-mobile finePrint'>${props.finePrintData.finePrintMobile}</p>`
} 
if (props.finePrintData.finePrintDesktop) {
  finePrintText += `<p class='view-desktop finePrint'>${props.finePrintData.finePrintDesktop}</p>`
} 


  return (

    
    `<section id='categoryHeader' class='${props.template.class} ${layoutImageOptions}'>
      <style>
        ${mobileCSS}
        @media only screen and (min-width: 768px) {
          ${desktopCSS}
        }
      </style>
      <div class='content'>
        <div class='outer-text-container'>
          <div class='text-container'>
            ${primaryText}
            ${secondaryText}
            ${finePrintText}
          </div>
        </div>
        <div class='image-container'>
          <picture>
            <source media='(max-width:767px)'
              srcSet='${mobileImgURL}' />
            <source media="(min-width:768px)"
              srcSet='${desktopImgURL}' />
            <img alt='' src='${mobileImgURL}' />
          </picture>
        </div>
      </div>
    </section>`


  )
}

export default TemplateBase;
