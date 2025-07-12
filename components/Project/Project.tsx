"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import projectsData from "@/utils/json/skills/projects.json";

const Project = () => {
  // Transform the projects data to match the HeroParallax expected format
  const projects = projectsData.projects.map((project) => ({
    title: project.name,
    link: project.link,
    thumbnail: project.thumbnail,
    id: project.id,
  }));

  return (
    <section id="projects" className="relative z-10 w-full bg-black py-20">
      <div className=" mx-auto px-4">
        <div className="mx-auto">
          <div className="relative">
            <HeroParallax products={projects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
