import React from 'react';

const TwoImagesSection = (props) => {
	return (
		<div className={props.classCont} >
			
	 			<img className={props.classInner} src={props.image.image1} alt=""/>
	 			<img className={props.classInner} src={props.image.image2} alt=""/>
	 		
		</div>
	);
}

export default TwoImagesSection
