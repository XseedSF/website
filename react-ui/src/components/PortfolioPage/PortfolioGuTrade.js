import React from 'react';

import PortfolioHeaderSection from './PortfolioHeaderSection';
import InfoText from './InfoText';
import BigImageSection from './BigImageSection';
import TwoImagesSection from './TwoImagesSection';
import VideoSection from './VideoSection';
import NextCase from './NextCase';
import Footer from './Footer';
import SeparatorLine from './SeparatorLine';

const PortfolioMelancia = (props) => (
	<div>
		<PortfolioHeaderSection {...props.header} />
		<InfoText {...props.infoText1} />
		<VideoSection source={props.videoUrl} />
		<InfoText {...props.infoText2} />
		<BigImageSection bigImage={props.bigImage1} />
		<InfoText {...props.infoText3} />
		<SeparatorLine />
		<InfoText {...props.infoText4} />
		<TwoImagesSection image={props.bigImage2} 
			classCont="p-big-two-image-section-large"
			classInner="p-two-image-large" />
		<InfoText {...props.infoText5} />
		<NextCase title={props.nextCase.title} link={props.nextCase.id}/>
		<Footer />
	</div>
);

export default PortfolioMelancia;
