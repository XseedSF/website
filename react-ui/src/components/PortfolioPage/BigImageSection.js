import React from "react";

const BigImageSection = props => {
  return (
    <div className="p-big-image-section" style={props.style ? props.style : {}}>
      <div className="p-big-image-container">
        <img className="p-big-image" src={props.bigImage} alt="" />
      </div>
    </div>
  );
};

export default BigImageSection;
