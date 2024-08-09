import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image1 from '../../Assets/Projects/image1.png';
import image2 from '../../Assets/Projects/image2.png';
import image3 from '../../Assets/Projects/image3.png';
import image4 from '../../Assets/Projects/image4.png';
import image5 from '../../Assets/Projects/image5.png';
import image6 from '../../Assets/Projects/image6.png';
import image7 from '../../Assets/Projects/image7.png';
import image8 from '../../Assets/Projects/image8.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image1}
              isBlog={false}
              title="Memory Game"
              description="Memory game: Test your recall with matching pairs. Flip cards to find matches and improve memory. Great for all ages, enhancing cognitive skills and entertaining fun. 
              Tech Stack: React JS, Javascripts, HTML, CSS"
              ghLink="https://github.com/prateeksha17/memory_cards.github.io"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image2}
              isBlog={false}
              title="Recipe site"
              description=
              "Elevate your culinary skills with our recipe site! Explore diverse cuisines, step-by-step instructions, and user-friendly interface. Unleash your inner chef and savor delicious homemade creations.Tech Stack: React JS, Javascripts, HTML, CSS, Firebase"
              ghLink="https://github.com/prateeksha17/Lets_cook.github.io"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image4}
              isBlog={false}
              title="Task Management Site"
              description="Boost productivity with our task management site. Organize, prioritize, and collaborate seamlessly. Streamline workflows, track progress, and achieve more. Elevate your efficiency and conquer your to-do list effortlessly. Tech Stack: React JS, Javascripts, HTML, CSS, Firebase"
              ghLink="https://github.com/prateeksha17/Dojo.github.io"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image5}
              isBlog={false}
              title="OtakuFeed"
              description="Connect with fellow anime enthusiasts on our social media site. Share favorite shows, fan art, and discussions. Embrace the anime community, discover new series, and celebrate the love for Japanese animation. Tech Stack: React JS, Javascripts, HTML, CSS, Express Js, Node JS, MongoDB"
              ghLink="https://github.com/prateeksha17/OtakuFeed"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


         

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image8}
              isBlog={false}
              title="Callets"
              description="Experience seamless communication with our video conferencing site. Connect, collaborate, and engage with crystal-clear video and audio. Enhance productivity and foster meaningful connections with a reliable, user-friendly platform. Tech Stack:  Javascripts, HTML, CSS, Agora"
              ghLink="https://github.com/prateeksha17/callets.github.io"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
