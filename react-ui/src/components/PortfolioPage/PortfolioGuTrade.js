import React from 'react';

import PortfolioHeaderSection from './PortfolioHeaderSection';
import InfoText from './InfoText';
import BigImageSection from './BigImageSection';
import VideoSection from './VideoSection';
import NextCase from './NextCase';
import Footer from './Footer';

const PortfolioMelancia = (props) => (
	<div>
		<PortfolioHeaderSection {...props.header} />
		<InfoText {...props.infoText1} />
		<VideoSection source={props.videoUrl} />
		<InfoText {...props.infoText2} />
		<BigImageSection bigImage={props.bigImage1} />
		<InfoText {...props.infoText3} />
		<InfoText {...props.infoText4} />
		<BigImageSection bigImage={props.bigImage2} />
		<InfoText {...props.infoText5} />
		<NextCase title={props.nextCase.title} link={props.nextCase.id}/>
		<Footer />
	</div>
);

export default PortfolioMelancia;
