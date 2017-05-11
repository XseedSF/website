import React from 'react';

import PortfolioHeaderSection from './PortfolioHeaderSection';
import InfoText from './InfoText';
import BigImageSection from './BigImageSection';
import TwoImagesSection from './TwoImagesSection';
import NextCase from './NextCase';
import Footer from './Footer';

const PortfolioSura = (props) => (
	<div>
		<PortfolioHeaderSection {...props.header} />
		<InfoText {...props.infoText1} />
		<BigImageSection bigImage={props.bigImage1} />
		<InfoText {...props.infoText2} />
		<TwoImagesSection image={props.bigImage2} 
			classCont="p-big-two-image-section"
			classInner="p-two-image" />
		<InfoText {...props.infoText3} />
		<NextCase title={props.nextCase.title} link={props.nextCase.id}/>
		<Footer />
	</div>
);

export default PortfolioSura;
