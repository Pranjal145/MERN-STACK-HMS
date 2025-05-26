import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Medivista Hospital stands as a modern healthcare center devoted to offering a full spectrum of medical services with empathy, precision, and advanced care. Backed by a dedicated team of experienced professionals, we strive to deliver individualized treatment that respects each patient’s unique needs. At Medivista, your health is our priority, and we are committed to guiding you on a smooth and caring path toward complete well-being.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;