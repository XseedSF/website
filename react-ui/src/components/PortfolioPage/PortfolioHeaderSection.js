import React from 'react';
import PortfolioNavHeader from './PortfolioNavHeader';
import Header from './Header';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const PortfolioHeaderSection = (props) => {
	return (
		<div id="home" className="p-header-container" >
			<ScrollableAnchor id={'home'}>
		 		<div>
		 			<PortfolioNavHeader />
		 			<Header {...props}/>
		 		</div>
		 	</ScrollableAnchor>
		</div>
	);
}

export default PortfolioHeaderSection
