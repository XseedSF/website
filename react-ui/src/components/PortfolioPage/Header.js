import React from "react";

const Header = props => {
  let styleObj = {};

  if (props.background)
    styleObj = { backgroundImage: `url(${props.background})` };

  return (
    <div
      className={`${props.gradientClass || ""} p-caption-container`}
      style={styleObj}
    >
      <div
        className={`${props.gradientClass
          ? ""
          : "p-caption-container-overlay"}`}
      />
      <div className="p-caption-subcontainer">
        <div className="p-caption">
          <img
            className="p-icon-img"
            alt={props.name}
            src={props.iconImage}
            draggable="false"
            style={props.imgStyle || {}}
          />
          <p className="p-bigHeader ">{props.title}</p>
          <p className="p-bigHeader ">{props.title2}</p>
          <p className="p-header-subtitle">{props.subtitle}</p>
          <p className="p-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
