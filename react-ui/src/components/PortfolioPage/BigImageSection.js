import React from 'react';

const BigImageSection = (props) => {
	return (
		<div className="p-big-image-section" >
			<div>
	 			<img className="p-big-image" src={props.bigImage}/>
	 		</div>
		</div>
	);
}

export default BigImageSection
