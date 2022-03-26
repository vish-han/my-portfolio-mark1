import React from "react";
import "../Components/intro.css";
import ProfilePic from "../assets/portfoliopic.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello 👋, My name is</h2>
          <h1 className="i-name">Vishal Chauhan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Engineering</div>
              <div className="i-title-item">Opensource Enthusiast</div>
              <div className="i-title-item">Technical Writer</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
            ipsam vel aliquid repellendus nulla modi blanditiis molestiae iure
            reiciendis alias temporibus quibusdam nam corporis nesciunt
            voluptatem molestias consectetur officia ab, facilis dolores saepe
            dolor.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-image">
          <img src={ProfilePic} alt="" srcset="" width="430" height="430" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
