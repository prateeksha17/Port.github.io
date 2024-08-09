import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prateeksha Pandey </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I am currently persuing Civil Engineering in Dr. BR Ambedkar National Institute Of Technology Jalandhar.
           
            
            <br />
            <br />
            I hail from Lucknow, Uttar Pradesh.
          </p>
          

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
