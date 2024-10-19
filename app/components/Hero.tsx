import { FaLocationArrow } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <div className="pt-36" id="about">
      {/* Spotlight  */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Animation made it absolute so that it gets removed from flow of direction from text below */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-5">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Fueling Dreams with Code and Coffee"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos; am <span className="font-bold">Sumit</span>, a Full
            Stack Developer.
          </p>

          <a href="https://drive.google.com/file/d/1wJnQkqKsUQMCg29B7q4PuSNwsEIUOP5l/view">
            <MagicButton
              title="Show my Resume"
              icon={<FaLocationArrow />}
              position={"right"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
