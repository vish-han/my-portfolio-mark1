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
              <h3 className="connect">Connect with me 😄  </h3>
          < div className="i-links">
            <div className="twitter"><a href="https://github.com/vish-han"><img src="https://img.icons8.com/glyph-neue/344/github.png" width="35" height="35"></img></a></div>
            <div className="twitter"><a href="https://twitter.com/vishaldev09"><img src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png" width="35" height="35"></img></a></div>
            <div className="twitter"><a href="https://www.linkedin.com/in/vishaldev09/"><img src="https://img.icons8.com/ios-filled/344/linkedin-circled--v1.png" width="35" height="35"></img></a></div>
            <div className="twitter"><a href="http://www.vishalchauhan.hashnode.dev"><img src="https://img.icons8.com/color/344/hashnode.png" width="35" height="35"></img></a></div>
          </div>
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
