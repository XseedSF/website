import React from 'react';

import arrowNext from '../../images/icon-next.png';

const InfoText = (props) => {
	return (
		<div className="p-info-text-container">
			<div className="p-info-text-title-container">
        <img className="p-info-text-arrow" src={arrowNext}/>
        <p className="p-info-text-smallTitle">{props.smallTitle}</p>
        <p className="p-info-text-title">{props.title}</p>
      </div>
			<div className="">
        <div className="p-info-text-description">{props.text}</div>
      </div>
    </div>
	)
}

export default InfoText;
