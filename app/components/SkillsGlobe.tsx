import IconCloud from "@/app/components/ui/icon-cloud";
import React from "react";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "sonarqube",
  "figma",
];

const SkillsGlobe = () => {
  return (
    <div id="technology" className="pt-32">
      <h1 className="heading">
        Technologies <span className="text-purple">I Work With</span>
      </h1>

      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default SkillsGlobe;
