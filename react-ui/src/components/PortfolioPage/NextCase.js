import React from 'react';
import { Link } from 'react-router-dom';
import arrowNext from '../../images/icon-next.png';

const NextCase = (props) => {
	return (
		<div className="p-next-case-container">
			<div className="p-info-text-title-container">
        <div className="p-info-text-arrow-text">
        	<img className="p-info-text-arrow" src={arrowNext} alt="next"/>
        	<p className="p-info-text-smallTitle">next case</p>
        </div>
        <p className="p-info-text-title">{props.title}</p>
      </div>
			<div className="">
        <div className="p-info-text-description">
				<Link to={props.link} className="p-next-case-link">
					<span>VIEW CASE</span>
				</Link>
				</div>
      </div>
    </div>
	)
}

export default NextCase;
