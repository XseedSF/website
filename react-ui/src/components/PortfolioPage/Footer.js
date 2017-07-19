import React from 'react';

import facebook from '../../images/fb-green.png';
import twitter from '../../images/tw-green.png';
import instagram from '../../images/ig-green.png';
import linkedin from '../../images/link-green.png';

const Footer = (props) => {
	const year = new Date().getFullYear();
	return (
    <div className="p-footer-container">
  		<div className="p-footer">
  			<div className="tp-footer-xseed">
  				<p> © {year} Xseed Solutions </p>
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
  			<div className="footer-medias-mobile tp-footer-medias-mobile">
  				<a className="footer-media-link" href="https://www.facebook.com/xseeditsolutions/" target="_blank" >
  					<span className="tp-footer-media-mobile"> Facebook </span>
  				</a>
                  -
                  <a className="footer-media-link" href="https://www.instagram.com/xseedsf/" target="_blank" >
  					<span className="tp-footer-media-mobile"> Instagram </span>
  				</a>
  				-
  				<a className="footer-media-link" href="https://twitter.com/XseedSF/" target="_blank" >
  					<span className="tp-footer-media-mobile"> Twitter </span>
  				</a>
  			</div>
  		</div>
    </div>
	)
}

export default Footer;
