"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import ModalBox from "./ModalBox";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex">
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
        </ul>
        <ul className="list-disc pl-8">
          <li>Next JS</li>
          <li>Node.js</li>
          <li>Material UI</li>
          <li>Tailwind CSS</li>
        </ul>
        <ul className="list-disc pl-8">
          <li>MongoDB</li>
          <li>Express</li>
          <li>Netlify</li>
          <li>GitHub</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Webbrain Academy</li>
        <li>Training center, Tashkent</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer</li>
        <li>Junior Web Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2   gap-8 items-center py-8 px-4 xl:gap-16  sm:py-16 xl:px-5">
        <Image src="/images/web.jpg" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating interactive and
            responsive web applications. I have experience working with HTML,
            CSS, JavaScript, React, Next js, Node.js, Express, Material
            UI, Tailwind CSS, MongoDB,  Netlify ...
          </p>
          <ModalBox />
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
