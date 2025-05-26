import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Medivista Hospital, established in 2022 by Dr. Arjun Mehta and Dr. Priya Nambiar, is a modern healthcare institution based in Bangalore, India. With a mission to make quality healthcare accessible and compassionate, the hospital offers a wide range of specialties including cardiology, orthopedics, gynecology, pediatrics, and more. Backed by advanced medical technology and a dedicated team, Medivista delivers efficient, patient-centric care in a comfortable and well-equipped environment.
<p></p>
Beyond treatment, Medivista is committed to community health, medical education, and clinical research. Its multidisciplinary team works with empathy and precision to ensure holistic care for every patient. Combining innovation with a human touch, Medivista continues to grow as a trusted name in healthcare, setting high standards in service and wellness.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;