import { FaArrowRight } from "react-icons/fa";
import "./projects.css";
import React from "react";
import ProjectData from "./projectData";

const Project = () => {
  return (
    <section id="projects">
      <h2>LATEST PROJECTS</h2>
      <p>
        Ipsum lorem as sea, in reque bonorum definiebas mei, lus causae
        conclusioneque in. Sea ex nemore eirmoddelicatissim
      </p>
      <div className="container latest-container">
        {ProjectData.map((item) => (
          <div className="content">
            <img src={item.img} alt="" />
            <h3>{item.text}</h3>
            <p>
              Allenium phaedrum torquatos nec eu, vis detraxit periculls ex,
              nihil expetendis in mei. Mei an pericula euripidis hinc partem ei
              est. Eos ei nisi graecis. Vix aperiri consequat an. Elus lorem
              tincidunt vix at.
            </p>
            <div className="btn">
              Read More <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
