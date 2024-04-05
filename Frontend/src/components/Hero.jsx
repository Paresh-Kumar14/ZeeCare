import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          ZeeCare Medical Institute of Technology is a state of the art facility
          dedicated to providing quality health information with compassion and
          expertise.
        </p>
      </div>
      <div className="banner">
      <img src={imageUrl} alt="hero" className="animated-image" />
      <span>
      <img src="Vector.png" alt="vector" />
      </span>
      </div>
    </div>
  );
};

export default Hero;
