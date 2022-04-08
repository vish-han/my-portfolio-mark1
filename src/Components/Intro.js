import React from "react";
import "../Components/intro.css";
import ProfilePic from "../assets/portfoliopic.png";
const Intro = () => {
  return (
    <>
      <button
        type="button"
        class="btn"
        onClick={() => {
          console.log("hello world");
        }}
      >
        RESUME
      </button>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello 👋, My name is</h2>
            <h1 className="i-name">Vishal Chauhan</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Engineering Student</div>
                <div className="i-title-item">Opensource Enthusiast</div>
                <div className="i-title-item">Technical Writer</div>
              </div>
            </div>
            <div className="i-connections">
              <h3>Connect with me </h3>
            <div className="twitter">G</div>
            <div className="twitter">G</div>
            <div className="twitter">G</div>
            <div className="twitter">G</div>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-image">
            <img
              src={ProfilePic}
              alt=""
              srcset=""
              className="i-pic"
              width="430"
              height="430"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
