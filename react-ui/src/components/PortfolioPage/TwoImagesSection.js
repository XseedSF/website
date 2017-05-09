import React from 'react';

const TwoImagesSection = (props) => {
	return (
		<div className="p-big-two-image-section" >
			
	 			<img className="p-two-image" src={props.image.image1} alt=""/>
	 			<img className="p-two-image" src={props.image.image2} alt=""/>
	 		
		</div>
	);
}

export default TwoImagesSection
