import React from "react";

const Resume = () => {
  return (
    <div className="project containerr" id="resume">
      <h1 className="heading">Resume</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="resume-left-box">
          <div>
            <h4>Education</h4>
            <hr></hr>
            <div className="boxx">
              <p>BE in Computer Science</p>
              <button className="btnn">2017-2021</button>
            </div>
            <div className="boxx">
              <p>Intermediate</p>
              <button className="btnn">2014-2016</button>
            </div>
          </div>
          <div>
            <h4>Work Experience</h4>
            <hr></hr>
            <p>Wipro</p>
            <div className="boxx">
            <p>Worked as react front-end-developer</p>
            <button className="btnn">2022-2023</button>
            </div>
          </div>
          <div>
            <h4>Certificates</h4>
            <hr></hr>
            <p>lorem-epsum</p>
            <div className="boxx">
            <p>Lorem-epsum</p>
            <button className="btnn">2023-pursuing</button>
            </div>
          </div>
        </div>
        <div className="resume-right-box">
          <div>
            <img src="./image/myimg2.png" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
