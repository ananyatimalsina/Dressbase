import React from "react";

function AboutCard(img: string, alt: string, text: string) {
  return (
    <div className="aboutCardContainer">
      <img src={img} alt={alt} />
    </div>
  );
}

export default AboutCard;
