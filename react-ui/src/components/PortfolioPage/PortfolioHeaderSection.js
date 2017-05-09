import React from 'react';
import NavHeader from '../NavHeader/NavHeader.js';
import Header from './Header';
import ScrollableAnchor from 'react-scrollable-anchor';

const PortfolioHeaderSection = (props) => {
	return (
		<div id="home" className="p-header-container" >
			<ScrollableAnchor id={'home'}>
		 		<div>
		 			<NavHeader 
            homeLink="/#home"
            hwwLink="/#hww"
            portfolioLink="#"
            teamLink="/#team"
            contactUsLink="/#contact"
          />
		 			<Header {...props}/>
		 		</div>
		 	</ScrollableAnchor>
		</div>
	);
}

export default PortfolioHeaderSection
