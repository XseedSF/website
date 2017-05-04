import React from 'react';
import img2 from '../../images/JoinUsIcon.png';
import { Link } from 'react-router-dom';

const TeamJoinUs = () => {
	return (
		<div className="tp-join-us">
			<div>
				<div className="tp-join-us-image-container">
					<img className="tp-join-us-img" 
	     			alt="Join us!" src={img2} draggable="false" />
				</div>
				<div className="tp-join-us-text">
					<h1 className="tp-join-us-title"> Join us </h1>
					<div className="tp-join-us-divider"></div>
					<p className="tp-join-us-subtitle"> Are you passionate about your craft? Do you like other people? Want to be part of a fun, driven team? Sweet. Let us know how you see yourself adding value to our team. </p>				
					<Link className="tp-drop-mail-link" to={'/#contact'}>	 
						<p className="tp-drop-mail">Drop us an email!</p>
					</Link>
				</div>
			</div>
        </div>
	)
} 
export default TeamJoinUs;