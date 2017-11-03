import React from 'react';
import { Link } from 'react-router-dom';

import facebook from '../../images/tm-fb.png';
import twitter from '../../images/tm-tw.png';
import instagram from '../../images/tm-ig.png';

export const TeamItemHiring = (props) => (
	<div className="flex-item flex-item-hiring">
  	<div className="team-item-container team-content team-item-hiring">

			<div className="team-text-hiring">
				{`We're always on the hunt for new talents!`}
			</div>
     	<div className="team-text-hiring-button-cont">
     		<Link className="team-work-with-us-a" to={'/#contact'} onClick={() => window.scrollTo(0, 0)}>
                  <span className="team-work-with-us"> JOIN US! </span>
              </Link>
     	</div>

		</div>
  </div>
)

export const TeamItemSocialMedias = (props) => (
	<div className="flex-item flex-item-social">
    	<div className="team-item-container team-content team-item-hiring">
			<div className="team-text-social">
				Take the inside scoop!
			</div>
	     	<div className="team-text-social-links">
				<a href="https://www.facebook.com/xseedsf/" target="_blank" >
					<img className="tp-f-icon-img" alt="facebook" src={facebook} draggable="false" />
				</a>

        <a href="https://www.instagram.com/xseed.io/" target="_blank" >
					<img className="tp-f-icon-img" alt="instagram" src={instagram} draggable="false" />
				</a>

				<a href="https://twitter.com/XseedSF/" target="_blank" >
					<img className="tp-f-icon-img" alt="twitter" src={twitter} draggable="false" />
				</a>

			</div>
		</div>
    </div>
)

export const TeamItemCultural = (props) => (
	<div className="flex-item-cultural">
		<div className="team-item-container team-content">
				 <img className="team-img"
					 src={props.image} draggable="false" />
		</div>

	</div>
)

export const TeamItemContact = (props) => (
	<div className="flex-item flex-item-contact">
    	<div className="team-item-container team-content team-item-hiring">
				<div className="team-text-contact">
					Got any questions?
				</div>
	     	<div className="team-text-contact-button-cont">
	     		<Link className="team-contact-a" to={'/#contact'} onClick={() => window.scrollTo(0, 0)}>
	            <span className="team-contact"> CONTACT US! </span>
	        </Link>
	     	</div>
			</div>
    </div>
)
