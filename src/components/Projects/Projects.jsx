import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";
import { Separator } from "../Shared/Separator/Separator";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects" data-aos="zoom-in">
      <label>
        <Separator section={"Projects"} />
      </label>
      <div className={styles.content}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
