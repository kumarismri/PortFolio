import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
const Resume = () => {
  return (
    <div className="project containerr" id="resume">
      <h1 className="heading">Resume</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="resume-left-box">
          <div>
            <h4>Education</h4>
            <hr></hr>
            <ul>
              <li className="boxx">
                <p className="para">BE in Computer Science</p>
                <button className="btnn">2017-2021</button>
              </li>
              <li className="boxx">
                <p className="para">Intermediate</p>
                <button className="btnn">2014-2016</button>
              </li>
            </ul>
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
            <h4>Projects</h4>
            <hr></hr>
            <h5>Talent Management System</h5>
            <h6>
              Tools and technologies: HTML5, CSS, JavaScript, Bootstrap, JSON,
              Rest.
            </h6>  
              <p>This is a benchmark in teaching & Learning by developing
              innovative Web-Apps for controlling & monitoring of individuals &
              educational institutions and implementing our services throughout
              the country. - Roles and responsibilities: Web services
              implementations, Coding with minimum time and space complexities,
              post-deployment maintenance.
            </p>
          </div>
          <div className="resume-icons">
            <GitHubIcon
              style={{
                fontSize: "70px",
                padding: "3px 6px 0px 6px",
                marginLeft: "4rem",
              }}
            />
            <LinkedInIcon
              style={{ fontSize: "70px", padding: "3px 6px 0px 6px" }}
            />
            <InstagramIcon
              style={{ fontSize: "70px", padding: "3px 6px 0px 6px" }}
            />
            <FacebookIcon
              style={{ fontSize: "70px", padding: "3px 6px 0px 6px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
