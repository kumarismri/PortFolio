import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Contactt = () => {
  return (
    <div className="contact containerr" id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="main-container">
        <div className="connect">
          <br/>
          <h4>Let's Connect</h4>
          <br/>
          <p>
            Thankyou for visiting my portfolio. Please feel free to ask any
            queries. I will reply you as soon as possible.
          </p>
          <br/>
          <br/>
          <div style={{ display: "flex" }}>
            <MailOutlineIcon />
            <p style={{ color:"grey",marginLeft:"10px" }}>kumarismriti727@gmail.com</p>
          </div>
          <div style={{ display: "flex"}}>
            <PhoneInTalkOutlinedIcon />
            <p style={{color:"grey", marginLeft:"10px"}}>(+91) 7619518968</p>
          </div>
          <div style={{ display: "flex" }}>
            <LocationOnOutlinedIcon />
            <p style={{color:"grey",marginLeft:"10px"}}>Vill-Patsa, PO-Bihta, PS-Bihta, Dist-Patna, Pin-801103</p>
          </div>
        </div>
        <div className="contact-form">
          <h4>Send me a message</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLasttName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              send message
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contactt;
