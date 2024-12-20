import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import projects from "../Data/projects.json";

import country_list from "../assets/projects/country_list.png";
import my_portfolio from "../assets/projects/my_portfolio.png";
import MERN_auth from "../assets/projects/MERN_auth.png";
import EV_charging from "../assets/projects/ev_charging_station.jpg";
import AD_ECOM from "../assets/projects/advanced-ecom.png";
import AD_AUTH from "../assets/projects/advanced_auth.png";
import EXPENCE_GQL from "../assets/projects/expence-tracker-gql.png";
import CHAT_APP from "../assets/projects/chat_app.png";
import PERN_ECOM_APP from "../assets/projects/pern-ecom.png";
import WHATSAPP from "../assets/projects/whats_app.png";

const Projects = () => {
  const imageMap: any = {
    MERN_auth: MERN_auth,
    my_portfolio: my_portfolio,
    country_list: country_list,
    EV_charging: EV_charging,
    AD_ECOM: AD_ECOM,
    AD_AUTH: AD_AUTH,
    EXPENCE_GQL: EXPENCE_GQL,
    CHAT_APP: CHAT_APP,
    PERN_ECOM_APP: PERN_ECOM_APP,
    WHATSAPP: WHATSAPP,
  };

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
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={imageMap[project?.imgPath]}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
