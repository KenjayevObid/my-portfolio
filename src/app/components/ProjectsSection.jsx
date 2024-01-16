"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { Button } from "flowbite-react";

const projectsData = [
  {
    id: 1,
    title: "Random color picker",
    technology: ["Html", "Css", "Javascript"],
    image: "/images/projects/color-pica.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KenjayevObid/colors-type.git",
    previewUrl: "https://random-color-copy.netlify.app",
  },
  {
    id: 2,
    title: "Headout",
    technology: ["React"],
    image: "/images/projects/trevel.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KenjayevObid/Headout-travel.git",
    previewUrl: "https://travel-world-uz.netlify.app/",
  },
  {
    id: 3,
    title: "Downloeder",
    technology: ["Html", "Css", "Javascript"],
    image: "/images/projects/dow.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KenjayevObid/downloeder.git",
    previewUrl: "https://kenjayevobid.github.io/downloeder/",
  },
  {
    id: 4,
    title: "Home ads",
    technology: ["React Js"],
    image: "/images/projects/uy.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KenjayevObid/nozimjonning-uylari.git",
    previewUrl: "https://uykerak.netlify.app",
  },
  {
    id: 5,
    title: "Clon You Tube",
    technology: ["Html", "Css"],
    image: "/images/projects/youtube.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://clon-you-tube.netlify.app/",
  },
  {
    id: 6,
    title: "Cryptofrenz",
    technology: ["Html", "Css"],
    image: "/images/projects/cr.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://cryptofrenz.netlify.app",
  },
  {
    id: 7,
    title: "Houzing",
    technology: ["React Js"],
    image: "/images/projects/housing.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://houzing-obid.netlify.app",
  },
  {
    id: 8,
    title: "Waether",
    technology: ["Html", "Css", "Javascript"],
    image: "/images/projects/waether.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ob-havo-world.netlify.app",
  },
  {
    id: 9,
    title: "Project",
    technology: ["Html", "Css"],
    image: "/images/projects/css.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://oddiy-card.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [onsplice, setOnSplice] = useState(6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const OnSplice = () => {
    setOnSplice(onsplice + 3);
  };
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
        {filteredProjects.splice(0, onsplice).map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              technology={project.technology}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>

      <Button className="mt-1 w-40 m-auto" onClick={OnSplice}>
        More
      </Button>
    </section>
  );
};

export default ProjectsSection;
