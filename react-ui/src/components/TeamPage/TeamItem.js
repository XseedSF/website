import React from 'react';

const TeamItem = (props) => (
    <div className="flex-item">
    	<div className="team-item-container team-content">
			   <img className="team-img"
	     		alt={props.name} src={props.image} draggable="false" />
		</div>

    </div>
)

export default TeamItem;
