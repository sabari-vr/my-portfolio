import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  imgPath,
  title,
  description,
  ghLink,
  isBlog,
  demoLink,
}: any) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <div>
        <Card.Img
          variant="top"
          src={imgPath}
          alt="card-img"
          style={{
            height: "200px",
            objectFit: "contain",
            alignSelf: "flex-start",
            borderRadius: "10%",
          }}
        />
      </div>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card.Title className="mb-3">{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
          {description}
        </Card.Text>
      </Card.Body>
      <div className="card-body d-flex justify-content-end flex-column">
        {ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "flex-end",
              textAlign: "center",
              position: "relative",
              bottom: "0px",
            }}
          >
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
              position: "static",
              bottom: "0px",
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </div>
    </Card>
  );
};
export default ProjectCard;
