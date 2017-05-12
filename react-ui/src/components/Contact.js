import React from 'react';
import ContactForm from './Contact/ContactForm.js';
import Footer from './Footer.js';

const Contact = () => (
	<section className="contact-container">
		<div className="contact-container-caption">
			<div className="contact-caption">
				<h1 className="contact-title"> Contact us </h1>
				<div className="contact-divider"></div>
				<p className="contact-subtitle"> {`Have a project you're interested in launching into the skies? Want to join us in our crusade for creating awesome experiences? Hit us up!`} </p>				
			</div>
		</div>
		<ContactForm />
		<Footer />
	</section>
);

export default Contact;
