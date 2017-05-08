import React from 'react';

import PortfolioHeaderSection from './PortfolioHeaderSection';
import InfoText from './InfoText';
import BigImageSection from './BigImageSection';
import NextCase from './NextCase';
import Footer from './Footer';

const PortfolioMelancia = (props) => (
	<div>
		<PortfolioHeaderSection {...props.header} />
		<InfoText {...props.infoText1} />
		<BigImageSection bigImage={props.bigImage1} />
		<InfoText {...props.infoText2} />
		<BigImageSection bigImage={props.bigImage2} />
		<InfoText {...props.infoText3} />
		<NextCase title='SURA: Creating safety in an instant' link='2'/>
		<Footer />
	</div>
);

export default PortfolioMelancia;
