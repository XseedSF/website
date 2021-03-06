import React from 'react';

import facebook from '../images/social-facebook.png';
import twitter from '../images/social-twitter.png';
import instagram from '../images/social-instagram.png';
import linkedin from '../images/social-linkedin.png';

const Footer = (props) => {
	const year = new Date().getFullYear();
	return (
		<div className="footer">
			<div className="container">
				<div className="footer-xseed">
					<p> © {year} Xseed Solutions </p>
					<p> 1355 Market St suite 488 San Francisco CA 94103 </p>
				</div>
				<div className="footer-medias">
					<a href="https://www.facebook.com/xseedsf/" target="_blank" >
						<img className="f-icon-img" alt="facebook" src={facebook} draggable="false" />
					</a>

	        <a href="https://www.instagram.com/xseed.io/" target="_blank" >
						<img className="f-icon-img" alt="instagram" src={instagram} draggable="false" />
					</a>

					<a href="https://twitter.com/XseedSF/" target="_blank" >
						<img className="f-icon-img" alt="twitter" src={twitter} draggable="false" />
					</a>

					<a href="https://www.linkedin.com/company-beta/936817/" target="_blank" >
						<img className="f-icon-img" alt="linkedin" src={linkedin} draggable="false" />
					</a>
				</div>
				<div className="footer-medias-mobile">
					<a className="footer-media-link" href="https://www.facebook.com/xseeditsolutions/" target="_blank" >
						<span className="footer-media-mobile"> Facebook </span>
					</a>
	                -
	                <a className="footer-media-link" href="https://www.instagram.com/xseedsf/" target="_blank" >
						<span className="footer-media-mobile"> Instagram </span>
					</a>
					-
					<a className="footer-media-link" href="https://twitter.com/XseedSF/" target="_blank" >
						<span className="footer-media-mobile"> Twitter </span>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
