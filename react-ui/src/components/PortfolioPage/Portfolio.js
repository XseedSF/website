import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import PortfolioNavHeader from './PortfolioNavHeader';
import Header from './Header';
import InfoText from './InfoText';

const Portfolio = (props) => (
	<div>
		<PortfolioHeaderSection {...props} />
		<InfoText {...props.infoText1} />
	</div>
)

const PortfolioHeaderSection = (props) => {
	return (
		<div id="home" className="p-header-container" >
			<ScrollableAnchor id={'home'}>
		 		<div>
		 			<PortfolioNavHeader />
		 			<Header {...props.header}/>
		 		</div>
		 	</ScrollableAnchor>		       
		</div>
	);
}

export default Portfolio;