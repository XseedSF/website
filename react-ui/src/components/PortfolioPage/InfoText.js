import React from 'react';

import arrow from '../../images/portfolio/arrow.png';

const InfoText = (props) => {
	return (    
		<div className="p-info-text-container">
			<div className="p-info-text-title-container">
        <div className="p-info-text-arrow-text">
          <img className="p-info-text-arrow" src={arrow} alt="" />
          <p className="p-info-text-smallTitle">{props.smallTitle}</p>
        </div>
        <p className="p-info-text-title">{props.title}</p>
      </div>
			<div className="">
        <div className="p-info-text-description">{props.text}</div>
      </div>
    </div>
	)
}

export default InfoText;
