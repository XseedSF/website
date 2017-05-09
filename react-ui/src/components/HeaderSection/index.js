import React from 'react';

import NavHeader from '../NavHeader/NavHeader.js';

import VideoCaption from './VideoCaption';
import VideoPlayer from './VideoPlayer';

const HeaderSection = () => {
	return (
		<div className="headerSection-cover" >
            <NavHeader 
                homeLink="/#home"
                hwwLink="/#hww"
                portfolioLink="/#portfolio"
                teamLink="/#team"
                contactUsLink="/#contact"
            />
		 	<VideoCaption />
			<VideoPlayer />	         
		</div>
	);
}

export default HeaderSection;