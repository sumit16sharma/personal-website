import React from "react";
import { Timeline } from "./ui/Timeline";

const Experience = () => {
  const data = [
    {
      title: "May 2022 - June 2024",
      content: (
        <div>
          <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
            Full Stack Developer Intern at Webknot Technologies
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start gap-1">
              <span className="text-[#A594F9]">•</span>
              Led backend development for an E-invoicing project with NestJS,
              overseeing a team of 2.
            </li>
            <li className="flex items-start gap-1">
              <span className="text-[#A594F9]">•</span>
              Developed the Qause platform with Next.js, creating 5+ pages and
              implementing SEO.
            </li>
            <li className="flex items-start gap-1">
              <span className="text-[#A594F9]">•</span>
              Built responsive frontend pages for Bliss Club using React.
            </li>
            <li className="flex items-start gap-1">
              <span className="text-[#A594F9]">•</span>
              Created 30+ REST APIs for the Small Kindness mobile app with SMS
              and push notifications.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Feb 2022 – April 2022",
      content: (
        <div>
          <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
            Full Stack Developer Intern at Crowdoverflow
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 text-sm md:text-base">
            <li className="flex items-start gap-1">
              <span className="text-[#A594F9]">•</span>
              Developed Crowd Overflow with React.js, Node.js, and MongoDB,
              following quality standards.
            </li>
            <li className="flex items-start gap-1">
              <span className="text-[#A594F9]">•</span>
              Reviewed pull requests, improved delivery processes, and reduced
              bugs.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="py-40 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <Timeline data={data} />
    </div>
  );
};

export default Experience;
