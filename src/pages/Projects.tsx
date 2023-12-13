import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida mauris vitae luctus iaculis. Phasellus nibh nisl, lacinia viverra maximus at, bibendum sed nibh. Sed tempus a dolor nec suscipit. Nunc eu bibendum sem, id luctus nisl. Nulla enim lectus, sollicitudin ut tristique eget, convallis eu ex. In est ligula, blandit at diam rhoncus, efficitur porta lectus. Aliquam leo nunc, laoreet a ex ac, aliquet scelerisque magna. Donec in mauris turpis. Aenean at auctor nulla. Vivamus pellentesque cursus nisi vel malesuada."
              ghLink="https://github.com/sabari-vr/country_list"
              demoLink="https://sabari-vr.github.io/country_list"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida mauris vitae luctus iaculis. Phasellus nibh nisl, lacinia viverra maximus at, bibendum sed nibh. Sed tempus a dolor nec suscipit. Nunc eu bibendum sem, id luctus nisl. Nulla enim lectus, sollicitudin ut tristique eget, convallis eu ex. In est ligula, blandit at diam rhoncus, efficitur porta lectus. Aliquam leo nunc, laoreet a ex ac, aliquet scelerisque magna. Donec in mauris turpis. Aenean at auctor nulla. Vivamus pellentesque cursus nisi vel malesuada."
              ghLink="https://github.com/sabari-vr"
              demoLink="https://github.com/sabari-vr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida mauris vitae luctus iaculis. Phasellus nibh nisl, lacinia viverra maximus at, bibendum sed nibh. Sed tempus a dolor nec suscipit. Nunc eu bibendum sem, id luctus nisl. Nulla enim lectus, sollicitudin ut tristique eget, convallis eu ex. In est ligula, blandit at diam rhoncus, efficitur porta lectus. Aliquam leo nunc, laoreet a ex ac, aliquet scelerisque magna. Donec in mauris turpis. Aenean at auctor nulla. Vivamus pellentesque cursus nisi vel malesuada."
              ghLink="https://github.com/sabari-vr"
              demoLink="https://github.com/sabari-vr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida mauris vitae luctus iaculis. Phasellus nibh nisl, lacinia viverra maximus at, bibendum sed nibh. Sed tempus a dolor nec suscipit. Nunc eu bibendum sem, id luctus nisl. Nulla enim lectus, sollicitudin ut tristique eget, convallis eu ex. In est ligula, blandit at diam rhoncus, efficitur porta lectus. Aliquam leo nunc, laoreet a ex ac, aliquet scelerisque magna. Donec in mauris turpis. Aenean at auctor nulla. Vivamus pellentesque cursus nisi vel malesuada."
              ghLink="https://github.com/sabari-vr"
              demoLink="https://github.com/sabari-vr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida mauris vitae luctus iaculis. Phasellus nibh nisl, lacinia viverra maximus at, bibendum sed nibh. Sed tempus a dolor nec suscipit. Nunc eu bibendum sem, id luctus nisl. Nulla enim lectus, sollicitudin ut tristique eget, convallis eu ex. In est ligula, blandit at diam rhoncus, efficitur porta lectus. Aliquam leo nunc, laoreet a ex ac, aliquet scelerisque magna. Donec in mauris turpis. Aenean at auctor nulla. Vivamus pellentesque cursus nisi vel malesuada."
              ghLink="https://github.com/sabari-vr"
              demoLink="https://github.com/sabari-vr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida mauris vitae luctus iaculis. Phasellus nibh nisl, lacinia viverra maximus at, bibendum sed nibh. Sed tempus a dolor nec suscipit. Nunc eu bibendum sem, id luctus nisl. Nulla enim lectus, sollicitudin ut tristique eget, convallis eu ex. In est ligula, blandit at diam rhoncus, efficitur porta lectus. Aliquam leo nunc, laoreet a ex ac, aliquet scelerisque magna. Donec in mauris turpis. Aenean at auctor nulla. Vivamus pellentesque cursus nisi vel malesuada."
              ghLink="https://github.com/sabari-vr"
              demoLink="https://github.com/sabari-vr"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
