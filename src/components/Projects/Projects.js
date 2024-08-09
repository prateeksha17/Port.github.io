import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image1 from '../../Assets/Projects/image1.png';
import image2 from '../../Assets/Projects/image2.png';

import image4 from '../../Assets/Projects/image4.png';
import image5 from '../../Assets/Projects/image5.png';
import image10 from '../../Assets/Projects/image10.png';
import image9 from '../../Assets/Projects/image9.png';
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image9}
              isBlog={false}
              title="SyntaxStories"
              description="Syntax Stories is a project created with the aim of combining storytelling with coding concepts. The project likely serves as an educational tool that makes learning programming languages more engaging by weaving syntax and code snippets into narrative form. It might explore various coding topics or algorithms through a creative, story-driven approach, making complex ideas more relatable and easier to understand."
              ghLink="https://github.com/prateeksha17/mern-blog-main"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image10}
              isBlog={false}
              title="SortingVisualiser"
              description="A Sorting Visualizer is an interactive tool or application designed to visually demonstrate how different sorting algorithms work. It typically displays a set of data (like bars of varying heights) and animates the process of sorting this data step by step, allowing users to observe how elements are compared, swapped, or moved according to the rules of the specific sorting algorithm being visualized."
              ghLink="https://github.com/prateeksha17/Sorting-Visualizer-main"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
