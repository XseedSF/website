import React from 'react';
import TeamFooter from './TeamFooter.js';
import { Link } from 'react-router-dom';

const TeamContact = () => (
	<section className="tp-contact-container">
		<div className="tp-contact-container-caption">
			<div className="tp-contact-caption">
				<h1 className="tp-contact-title"> Ready to work with us? </h1>
				<p className="tp-contact-subtitle"> Reach us, we´re eager to start building amazing stuff for you! </p>
			</div>
			<div className="tp-contact-button">
	     		<Link className="team-work-with-us-a" to={'/#contact'} onClick={() => window.scrollTo(0, 0)}>
              <span className="team-work-with-us"> LET´S CHAT </span>
          </Link>
	     	</div>
		</div>

		<TeamFooter />
	</section>
);

export default TeamContact;
