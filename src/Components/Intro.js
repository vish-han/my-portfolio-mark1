import React from "react";
import "../Components/intro.css";
import ProfilePic from "../assets/portfoliopic.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-intro">
          <div className="namaste">
            <h1>Hello Folks👋</h1>
          </div>
          <div className="name">
            <h2>I'm Vishal Chauhan</h2>
          </div>
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
