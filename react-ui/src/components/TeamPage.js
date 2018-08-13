import React from 'react';

import NavHeader from './NavHeader/NavHeader.js';

import TextCaption from './TeamPage/TextCaption';
import TeamContent from './TeamPage/TeamContent';
import TeamJoinUs from './TeamPage/TeamJoinUs';
import TeamContact from './TeamPage/TeamContact';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({offset: -40, scrollDuration: 800})

const TeamPage = () => (
    <div>
        <TeamHeaderSection />
        <TeamContent />
        <TeamJoinUs />
        <TeamContact />
    </div>
)

const TeamHeaderSection = () => {
	return (
		<div id="home" className="tp-header-container" >
			<ScrollableAnchor id={'home'}>
		 		<div>
		 			<NavHeader
                        homeLink="/#home"
                        hwwLink="/#hww"
                        portfolioLink="/#portfolio"
                        teamLink="/team"
                        contactUsLink="/#contact"
                    />
		 			<TextCaption />
		 		</div>
		 	</ScrollableAnchor>
		</div>
	);
}

export default TeamPage;
