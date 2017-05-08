import React from 'react';

const Header = (props) => {
	return (
		<div className="p-caption-container" style={{'background-image': `url(${props.background})`}}>
			<div className="p-caption-subcontainer">
				<div className="p-caption">
					<img className="p-icon-img" alt={props.name} src={props.iconImage} draggable="false" />			
          <p className="p-bigHeader ">{props.title}</p>
          <p className="p-bigHeader ">{props.title2}</p>
          <p className="p-header-subtitle">{props.subtitle}</p>
          <p className="p-description">{props.description}</p>                
        </div>
      </div>
    </div>
	)
}

export default Header;
